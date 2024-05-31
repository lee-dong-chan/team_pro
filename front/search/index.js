const cateBtnsElem = document.getElementById("cate-btns");
const cateAllElem = document.getElementById("cate-all");
const subBtnElem = document.getElementsByClassName("sub-btn");
const sub2BtnElem = document.getElementsByClassName("sub2-btn");

const pagelistElem = document.getElementsByClassName("page-list")[0];
const pageElem = document.getElementsByClassName("num");
const nextElem = document.getElementsByClassName("next")[0];

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
