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

let directrade = document.querySelector(
  'input[name="direct-trade"]:checked'
).value;
function tradeFnc(e) {
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

const price = document.getElementById("price");
let price_empty = false;
let detail_empty = false;

price.oninput = (e) => {
  if (e.target.value.length > 0) {
    price_empty = true;
  } else if (e.target.value.length < 1) {
    price_empty = false;
  }
};

detail.oninput = (e) => {
  detailLength.innerHTML = `${e.target.value.length}/2000`;
  if (e.target.value.length > 0) {
    detail_empty = true;
    console.log(detail_empty);
  } else if (e.target.value.length == 0) {
    detail_empty = false;
    console.log(detail_empty);
  }
};

let status = 1;

const prd_catelist1Elem = document.getElementById("prd_cate-list1");
const prd_catelist2Elem = document.getElementById("prd_cate-list2");
const prd_catelist3Elem = document.getElementById("prd_cate-list3");

const prd_firstCateElem = document.getElementsByClassName("prd_first_cate")[0];
const prd_secondCateElem =
  document.getElementsByClassName("prd_second_cate")[0];
const prd_thirdCateElem = document.getElementsByClassName("prd_third_cate")[0];

let tagArr = [];

const tagElem = document.getElementById("tagElem");
const tag = document.getElementById("tags");
tag.oninput = (e) => {
  if (
    e.data == " " &&
    tagArr.length < 5 &&
    2 < e.target.value.length &&
    e.target.value.length <= 10 &&
    e.target.value != "  " &&
    tagArr.indexOf(e.target.value.slice(0, e.target.value.length - 1)) == -1
  ) {
    // alert(e.target.value.slice(0, -1));
    const temp = document.createElement("div");
    temp.classList.add("tagbtns");
    temp.innerHTML = e.target.value.slice(0, -1);
    temp.onclick = () => {
      temp.outerHTML = "";
      let targetValue = tagArr.indexOf(temp);
      tagArr.splice(targetValue, 1);
    };
    // tagElem.innerHTML += `<div class="tagbtns">${e.target.value.slice(0, -1)}`;
    tagElem.append(temp);
    tagArr.push(temp.innerText);
    console.log(tagArr);
    e.target.value = "";
  } else if (e.data == " " && tagArr.length < 5 && e.target.value.length > 10) {
    e.target.value = null;
  } else if (tagArr.length >= 5 || e.target.value == "  ") {
    e.target.value = null;
  } else if (
    e.data == " " &&
    tagArr.indexOf(e.target.value.slice(0, e.target.value.length - 1)) != -1
  ) {
    e.target.value = null;
  }
};

let cateValue1;
let cateValue2;
let cateValue3;

cateTEXT1 = document.getElementById("selcate1");
cateTEXT2 = document.getElementById("selcate2");
cateTEXT3 = document.getElementById("selcate3");

cateTEXT1.innerHTML = "";
cateTEXT2.innerHTML = "";
cateTEXT3.innerHTML = "";

(async () => {
  try {
    const mainpage = (await axios.get("http://localhost:8000/main", {})).data;

    console.log(mainpage);
    //category
    if (mainpage[0]) {
      mainpage[0].forEach((cate1) => {
        prd_catelist1Elem.innerHTML += `<span id="1st_${cate1.id}" class="cate-list">
        ${cate1.name}</span>`;
        prd_catelist1Elem.value = cate1.id;
      });
      for (let i = 0; i < prd_catelist1.length; i++) {
        prd_catelist1[i].onclick = () => {
          prd_secondCateElem.classList.add("on");
          cateValue1 = prd_catelist1[i].id;
          cateValue2 = null;
          cateValue3 = null;
          console.log(cateValue1);
          console.log(cateValue3);
          prd_catelist3Elem.innerHTML = "";
          cateTEXT1.innerHTML = prd_catelist1[i].innerText;
          cateTEXT2.innerHTML = "";
          cateTEXT3.innerHTML = "";
          let secondcate = i;
          let str = "";
          if (mainpage[0][secondcate].Secondcategories) {
            mainpage[0][secondcate].Secondcategories.forEach((cate2) => {
              str += `<span id="2nd_${cate2.id}" class="cate-list">${cate2.name}</span>`;
            });
          }
          prd_catelist2Elem.innerHTML = str;
          for (let j = 0; j < prd_catelist2.length; j++) {
            prd_catelist2[j].onclick = () => {
              cateValue2 = prd_catelist2[j].id;
              cateTEXT2.innerHTML = prd_catelist2[j].innerText;
              cateTEXT3.innerHTML = "";
              console.log(cateValue2);
              prd_thirdCateElem.classList.add("on");
              let thirdcate = j;
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
                  str += `<span id="3rd_${cate3.id}" class="cate-list3">${cate3.name}</span>`;
                });
              }
              prd_catelist3Elem.innerHTML = str;
              let cate3Btn = document.getElementsByClassName("cate-list3");
              for (let k = 0; k < cate3Btn.length; k++) {
                cate3Btn[k].onclick = () => {
                  cateValue3 = cate3Btn[k].id;
                  console.log(cateValue3);
                  cateTEXT3.innerHTML = cate3Btn[k].innerText;
                };
              }
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
          store_id: 1,
          img: form.prd_img.files,
          prd_name: form.nameinput.value,
          prd_quality: statusValue,
          product_count: form.count.value,
          product_explanation: form.prd_detail.value,
          price: form.price.value,
          direct_trade: form.direct_trade.value,
          firstcate_id: cateValue1,
          secondcate_id: cateValue2,
          thirdcate_id: cateValue3,
          tag1: tagArr[1],
          tag2: tagArr[2],
          tag3: tagArr[3],
          tag4: tagArr[4],
          tag5: tagArr[5],
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
