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
  'input[name="directtrade"]:checked'
).value;
function tradeFnc(e) {
  console.log(e.target.value);
}

form.sizeSelecter.oninput = (e) => {
  console.log(e.target.value);
};
let isnameEmpty = false;

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

let cateValue1 = null;
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
        prd_catelist1Elem.innerHTML += `<span 
        data-itemtype ="${cate1.id}" 
        class="cate-list">
        ${cate1.name}</span>`;
      });
      for (let i = 0; i < prd_catelist1.length; i++) {
        prd_catelist1[i].onclick = () => {
          prd_catelist1[i].setAttribute("data-auto", true);
          cateValue1 = prd_catelist1[i].dataset.itemtype;
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
              str += `<span 
              data-itemtype ="${cate2.id}" 
              class="cate-list">${cate2.name}</span>`;
            });
          }
          prd_catelist2Elem.innerHTML = str;
          for (let j = 0; j < prd_catelist2.length; j++) {
            prd_catelist2[j].onclick = () => {
              prd_catelist1[j].setAttribute("data-auto", true);
              cateValue2 = prd_catelist1[j].dataset.itemtype;

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
                  str += `<span 
                  data-itemtype ="${cate3.id}"  
                  class="cate-list3">${cate3.name}</span>`;
                });
              }
              prd_catelist3Elem.innerHTML = str;
              let cate3Btn = document.getElementsByClassName("cate-list3");
              for (let k = 0; k < cate3Btn.length; k++) {
                cate3Btn[k].onclick = () => {
                  prd_catelist3[k].setAttribute("data-auto", true);
                  cateValue3 = prd_catelist1[k].dataset.itemtype;

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

const negoInput = document.getElementById("checkbox_round");
let negoValue = 0;
negoInput.oninput = (e) => {
  if (negoValue == 0) {
    negoValue = 1;
    console.log(negoValue);
  } else if (negoValue == 1) {
    negoValue = 0;
    console.log(negoValue);
  }
};

form.onsubmit = async (e) => {
  e.preventDefault();
  if (isnameEmpty == false) {
    alert("상품명을 입력해주세요!");
  } else if (detail_empty == false) {
    alert("상품 정보를 입력해주세요!");
  } else if (price_empty == false) {
    alert("가격을 입력해주세요!");
  } else if (cateValue1 == null) {
    alert("카테고리를 선택해주세요!");
  } else {
    const data = new FormData();
    data.append("URL", "seller");
    data.append("userstore_id", "1");
    console.log([...form.prd_img.files]);
    // [...form.prd_img.files].forEach((item) => data.append("imgs", item));
    for (let i = 0; i < form.prd_img.files.length; i++) {
      data.append("imgs", prd_img.files[i]);
    }
    // if (cateValue2 == null) {
    //   data.append("secondcategory_id", null);
    // } else if (cateValue2 != null) {
    //   data.append("secondcategory_id", cateValue2);
    // }
    data.append("name", form.nameinput.value);
    data.append("price", form.price.value);
    data.append("product_count", form.count.value);
    data.append("direct_trade", form.directtrade.value);
    data.append("price_nego", negoValue);
    data.append("product_status", statusValue);
    data.append("product_explanation", form.prd_detail.value);
    if (cateValue1 != null) {
      data.append("firstcategory_id", cateValue1);
    }
    if (cateValue2 != null) {
      data.append("secondcategory_id", cateValue2);
    }
    if (cateValue3 != null) {
      data.append("thirdcategory_id", cateValue3);
    }
    if (tagArr[0] != null) {
      data.append("tag1", tagArr[0]);
    }
    if (tagArr[1] != null) {
      data.append("tag2", tagArr[1]);
    }
    if (tagArr[2] != null) {
      data.append("tag3", tagArr[2]);
    }
    if (tagArr[3] != null) {
      data.append("tag4", tagArr[3]);
    }
    if (tagArr[4] != null) {
      data.append("tag5", tagArr[4]);
    }
    try {
      const sellData = (
        await axios.post(
          "http://localhost:8000/seller",
          data,
          // {
          //   userstore_id: 1,
          //   img: form.prd_img.files,
          //   name: form.nameinput.value,
          //   price: form.price.value,
          //   product_count: form.count.value,
          //   direct_trade: form.directtrade.value,
          //   price_nego: negoValue,
          //   product_status: statusValue,
          //   product_count: form.count.value,
          //   product_explanation: form.prd_detail.value,
          //   firstcategory_id: cateValue1,
          //   secondcategory_id: cateValue2,
          //   thirdcategory_id: cateValue3,
          //   tag1: tagArr[0],
          //   tag2: tagArr[1],
          //   tag3: tagArr[2],
          //   tag4: tagArr[3],
          //   tag5: tagArr[4],
          //   URL: "seller",
          // },
          {
            // options
            withCredentials: true,
          }
        )
      ).data;
      location.href = "http://localhost:8080";
    } catch (err) {
      console.error(err);
    }
  }
};
