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

const prd_catelist1Elem = document.getElementById("prd_cate-list1");
const prd_catelist2Elem = document.getElementById("prd_cate-list2");
const prd_catelist3Elem = document.getElementById("prd_cate-list3");

const prd_firstCateElem = document.getElementsByClassName("prd_first_cate")[0];
const prd_secondCateElem =
  document.getElementsByClassName("prd_second_cate")[0];
const prd_thirdCateElem = document.getElementsByClassName("prd_third_cate")[0];

let cateValue1;
let cateValue2;
let cateValue3;

(async () => {
  try {
    const mainpage = (await axios.get("http://localhost:8000/main", {})).data;

    console.log(mainpage);
    //category
    if (mainpage[0]) {
      mainpage[0].forEach((cate1) => {
        prd_catelist1Elem.innerHTML += `<span class="cate-list">
        ${cate1.name}</span>`;
      });
      for (let i = 0; i < prd_catelist1.length; i++) {
        prd_catelist1[i].onclick = () => {
          prd_secondCateElem.classList.add("on");
          cateValue1 = prd_catelist1[i].innerText;
          cateValue2 = null;
          cateValue3 = null;
          console.log(cateValue1);
          console.log(cateValue3);
          prd_catelist3Elem.innerHTML = "";
          let secondcate = i;
          let str = "";
          if (mainpage[0][secondcate].Secondcategories) {
            mainpage[0][secondcate].Secondcategories.forEach((cate2) => {
              str += `<span class="cate-list">${cate2.name}</span>`;
            });
          }
          prd_catelist2Elem.innerHTML = str;
          for (let i = 0; i < prd_catelist2.length; i++) {
            prd_catelist2[i].onclick = () => {
              cateValue2 = prd_catelist2[i].innerText;
              console.log(cateValue2);
              prd_thirdCateElem.classList.add("on");
              let thirdcate = i;
              let str = "";
              // console.log(thirdcate);
              // console.log(
              //   mainpage[0][secondcate].Secondcategories[thirdcate]
              //     .Thirdcategories
              // );
              if (
                mainpage[0][secondcate].Secondcategories[thirdcate]
                  .Thirdcategories
              ) {
                mainpage[0][secondcate].Secondcategories[
                  thirdcate
                ].Thirdcategories.forEach((cate3) => {
                  str += `<span class="cate-list3">${cate3.name}</span>`;
                });
              }
              prd_catelist3Elem.innerHTML = str;
              let cate3Btn = document.getElementsByClassName("cate-list3");
            };

            // prd_catelist2[i].onclick = () => {
            //   for (let a = 0; a < prd_catelist1.length; a++) {
            //     prd_catelist2[a].classList.remove("on");
            //   }
            //   prd_catelist2[i].classList.add("on");
            // };
          }
        };

        // prd_catelist1[i].onclick = () => {
        //   for (let a = 0; a < prd_catelist1.length; a++) {
        //     prd_catelist1[a].classList.remove("on");
        //   }
        //   prd_catelist1[i].classList.add("on");
        // };
      }
    }
    //
  } catch (err) {
    console.error(err);
  }
})();

const prd_catelist1 = document
  .getElementById("prd_cate-list1")
  .getElementsByTagName("span");
const prd_catelist2 = document
  .getElementById("prd_cate-list2")
  .getElementsByTagName("span");
const prd_catelist3 = document
  .getElementById("prd_cate-list3")
  .getElementsByTagName("span");

form.onsubmit = async (e) => {
  e.preventDefault();
  try {
    const sellData = (
      await axios.post(
        "http://localhost:8000/seller",
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
    location.href = "http://localhost:8080";
  } catch (err) {
    console.error(err);
  }
};
