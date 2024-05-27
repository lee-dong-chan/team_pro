// let cateAdd = document.getElementById("category_ul");
// cateArr = [
//   "여성의류",
//   "남성의류",
//   "신발",
//   "가방/지갑",
//   "시계",
//   "쥬얼리",
//   "패션 액세서리",
//   "디지털",
//   "가전제품",
//   "스포츠/레저",
//   "차량/오토바이",
//   "스타굿즈",
//   "키덜트",
//   "예술/희귀/수집품",
//   "음반/악기",
//   "도서/티켓/문구",
//   "뷰티/미용",
//   "가구/인테리어",
//   "생활/주방용품",
//   "공구/산업용품",
//   "식품",
//   "유아동/출산",
//   "반려동물용품",
//   "기타",
//   "지역 서비스",
//   "원룸/함께살아요",
//   "번개나눔",
//   "구인구직",
//   "재능",
//   "커뮤니티",
// ];

// for (i = 0; i < cateArr.length + 1; i++) {
//   cateAdd.innerHTML = "";
//   console.log(cateArr[i]);
//   cateAdd.innerHTML = `<li>${cateArr[i]}</li>`;
// }

const imgArea = document.getElementById("img_area");
const inputBtn = document.getElementById("prd_img");
inputBtn.onchange = (e) => {
  for (var image of e.target.files) {
    let reader = new FileReader();

    reader.onload = (e) => {
      let img = document.createElement("img");
      img.setAttribute("src", e.target.result);
      imgArea.appendChild(img);
    };

    console.log(e.target.files);
    reader.readAsDataURL(image);
  }

  //   let preview = new FileReader();

  //   preview.onload = (e) => {
  //     let img = document.createElement("img");
  //     img.setAttribute("src", e.target.result);
  //     imgArea.appendChild(img);
  //   };

  //   preview.readAsDataURL(e.target.files[0]);
};

const namelength = document.getElementById("name_length");
const nameInput = document.getElementById("nameinput");
const form = document.forms.create_prd;
const detail = document.getElementById("prd_detail");
const detailLength = document.getElementById("detail_length");

const statusRadio = document.getElementsByName("prd_quality");

let statusValue = document.querySelector(
  'input[name="prd_quality"]:checked'
).value;
function radioFnc(e) {
  console.log(e.target.value);
}

form.sizeSelecter.oninput = (e) => {
  console.log(e.target.value);
};

nameInput.oninput = (e) => {
  if (e.target.value.length > 0) {
    isnameEmpty = true;
    namelength.innerHTML = `${e.target.value.length}/40`;
    console.log(isnameEmpty);
  } else if (e.target.value.length < 1) {
    isnameEmpty = false;
    console.log(isnameEmpty);
  }
};

detail.oninput = (e) => {
  detailLength.innerHTML = `${e.target.value.length}/2000`;
};

let status = 1;

form.onsubmit = async (e) => {
  e.preventDefault();
  try {
    const sellData = (
      await axios.post(
        "/localhost/seller",
        {
          img: form.prd_img.files,
          prd_name: form.nameinput.value,
          size: form.sizeSelecter.value,
          prd_quality: statusValue,
          product_explanation: form.prd_detail.value,
          price: form.price_input.value,
        },
        {
          // options
          withCredentials: true,
        }
      )
    ).data;
    console.log(sellData);
    location.href = "localhost/main";
  } catch (err) {
    console.error(err);
  }
};
