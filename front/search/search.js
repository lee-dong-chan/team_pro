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
