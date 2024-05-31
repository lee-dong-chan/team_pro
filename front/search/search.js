const cateBtnsElem = document.getElementById("cate-btns");
const cateAllElem = document.getElementById("cate-all");
const subBtnElem = document.getElementsByClassName("sub-btn");
const sub2BtnElem = document.getElementsByClassName("sub2-btn");

const accuracyElem = document.getElementById("accuracy-btn");
const recentElem = document.getElementById("recent-btn");
const lowElem = document.getElementById("low-btn");
const highElem = document.getElementById("high-btn");

for (let i = 0; i < subBtnElem.length; i++) {
  subBtnElem[i].onclick = () => {
    cate2Elem.classList.add("on");
  };
}

for (let i = 0; i < sub2BtnElem.length; i++) {
  sub2BtnElem[i].onclick = () => {
    if (cate2Elem.classList.contains("on")) {
      cate3Elem.classList.add("on");
    }
  };
}

accuracyElem.onclick = () => {
  accuracyElem.classList.remove("on");
  recentElem.classList.remove("on");
  lowElem.classList.remove("on");
  highElem.classList.remove("on");
  accuracyElem.classList.add("on");
};

recentElem.onclick = () => {
  accuracyElem.classList.remove("on");
  recentElem.classList.remove("on");
  lowElem.classList.remove("on");
  highElem.classList.remove("on");
  recentElem.classList.add("on");
};

lowElem.onclick = () => {
  accuracyElem.classList.remove("on");
  recentElem.classList.remove("on");
  lowElem.classList.remove("on");
  highElem.classList.remove("on");
  lowElem.classList.add("on");
};

highElem.onclick = () => {
  accuracyElem.classList.remove("on");
  recentElem.classList.remove("on");
  lowElem.classList.remove("on");
  highElem.classList.remove("on");
  highElem.classList.add("on");
};

//category
const catelist1Elem = document.getElementById("cate-list1");
const catelist2Elem = document.getElementById("cate-list2");
const catelist3Elem = document.getElementById("cate-list3");
(async () => {
  try {
    const mainpage = (await axios.get("http://localhost:8080/main", {})).data;
    //category
    if (mainpage[0]) {
      mainpage[0].forEach((cate1) => {
        catelist1Elem.innerHTML += `<a href="/product_list?cate1=${cate1.id}" class="cate-list">${cate1.name}</a>`;
      });
      for (let i = 0; i < catelist1.length; i++) {
        catelist1[i].onmouseover = () => {
          secondCateElem.classList.add("on");
          let secondcate = i;
          let str = "";
          if (mainpage[0][secondcate].Secondcategories) {
            mainpage[0][secondcate].Secondcategories.forEach((cate2) => {
              str += `<a href="/product_list?cate2=${cate2.id}" class="cate-list">${cate2.name}</a>`;
            });
          }
          catelist2Elem.innerHTML = str;
          for (let i = 0; i < catelist2.length; i++) {
            catelist2[i].onmouseover = () => {
              thirdCateElem.classList.add("on");
              let thirdcate = i;
              let str = "";

              if (
                mainpage[0][secondcate].Secondcategories[thirdcate]
                  .Thirdcategories
              ) {
                mainpage[0][secondcate].Secondcategories[
                  thirdcate
                ].Thirdcategories.forEach((cate3) => {
                  str += `<a href="/product_list?cate3=${cate3.id}" class="cate-list">${cate3.name}</a>`;
                });
              }
              catelist3Elem.innerHTML = str;
            };

            catelist2[i].onmousedown = () => {
              for (let a = 0; a < catelist1.length; a++) {
                catelist2[a].classList.remove("on");
              }
              catelist2[i].classList.add("on");
            };
          }
        };

        catelist1[i].onmousedown = () => {
          for (let a = 0; a < catelist1.length; a++) {
            catelist1[a].classList.remove("on");
          }
          catelist1[i].classList.add("on");
        };
      }
    }
    //
  } catch (err) {
    console.error(err);
  }
})();

//search
const form = document.forms.searchform;

form.search.onsubmit = async (e) => {
  try {
    const search = (await axios.get("http://localhost:8080/products", {})).data;
    console.log(search);
  } catch (err) {
    console.error(err);
  }
};
