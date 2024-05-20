const cate1Elem = document.getElementById("cate1");
const cate2Elem = document.getElementById("cate2");
const cate3Elem = document.getElementById("cate3");
const mainCateElem = document.getElementsByClassName("main")[0];
const subCateElem = document.getElementsByClassName("sub")[0];
const sub2CateElem = document.getElementsByClassName("sub2")[0];
const mainliElem = document
  .getElementsByClassName("main")[0]
  .getElementsByClassName("cate-li");
const subliElem = document
  .getElementsByClassName("sub")[0]
  .getElementsByClassName("cate-li");
const sub2liElem = document
  .getElementsByClassName("sub2")[0]
  .getElementsByClassName("cate-li");

const cateBtnsElem = document.getElementById("cate-btns");
const cateAllElem = document.getElementById("cate-all");
const subBtnElem = document.getElementsByClassName("sub-btn");
const sub2BtnElem = document.getElementsByClassName("sub2-btn");

const pagelistElem = document.getElementsByClassName("page-list")[0];
const pageElem = document.getElementsByClassName("num");
const nextElem = document.getElementsByClassName("next")[0];

cate1Elem.onmouseover = () => {
  mainCateElem.classList.add("on");
};

cate1Elem.onclick = () => {
  mainCateElem.classList.add("on");
};

cate1Elem.onmouseout = () => {
  mainCateElem.classList.remove("on");
};

cate2Elem.onmouseover = () => {
  subCateElem.classList.add("on");
};

cate2Elem.onclick = () => {
  subCateElem.classList.add("on");
};

cate2Elem.onmouseout = () => {
  subCateElem.classList.remove("on");
};

cate3Elem.onmouseover = () => {
  sub2CateElem.classList.add("on");
};

cate3Elem.onclick = () => {
  sub2CateElem.classList.add("on");
};

cate3Elem.onmouseout = () => {
  sub2CateElem.classList.remove("on");
};

for (let i = 0; i < mainliElem.length; i++) {
  mainliElem[i].onclick = () => {
    for (let a = 0; a < mainliElem.length; a++) {
      mainliElem[a].classList.remove("on");
    }
    mainliElem[i].classList.add("on");
  };
}

for (let i = 0; i < subliElem.length; i++) {
  subliElem[i].onclick = () => {
    for (let a = 0; a < subliElem.length; a++) {
      subliElem[a].classList.remove("on");
    }
    subliElem[i].classList.add("on");
  };
}

for (let i = 0; i < sub2liElem.length; i++) {
  sub2liElem[i].onclick = () => {
    for (let a = 0; a < sub2liElem.length; a++) {
      sub2liElem[a].classList.remove("on");
    }
    sub2liElem[i].classList.add("on");
  };
}

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

for (let i = 0; i < pageElem.length; i++) {
  pageElem[i].onclick = () => {
    for (let a = 0; a < pageElem.length; a++) {
      pageElem[a].classList.remove("on");
    }
    pageElem[i].classList.add("on");
  };
}

nextElem.onclick = () => {
  for (let i = 0; i < pageElem.length; i++) {
    if (pageElem[i].classList.contains("on") == true) {
      i++;
      for (let a = 0; a < pageElem.length; a++) {
        pageElem[a].classList.remove("on");
      }
      if (i !== pageElem.length) {
        pageElem[i].classList.add("on");
      } else {
        pageElem[i - 1].classList.add("on");
      }
      console.log(i);
    }
  }
};
