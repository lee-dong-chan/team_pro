const bodyElem = document.getElementsByClassName("body")[0];
const noticeElem = document.getElementById("notice");
const noticelistElem = document.getElementById("notice-list");
const mystore1Elem = document.getElementById("my-store1");
const mystore2Elem = document.getElementById("my-store2");
const mystorelistElem = document.getElementById("myStore-menu");
const cateImgElem = document.getElementById("cateImg");
const firstCateElem = document.getElementsByClassName("first-cate")[0];
const secondCateElem = document.getElementsByClassName("second-cate")[0];
const thirdCateElem = document.getElementsByClassName("third-cate")[0];
const loginbtnELem = document.getElementById("login-btn");
const loginmodalElem = document.getElementsByClassName("login-modal")[0];
const loginonElem = document.getElementsByClassName("login")[0];
const modal_registELem = document.getElementsByClassName("regist-link")[0];
const modal_loginELem = document.getElementsByClassName("login-link")[0];
const registonElem = document.getElementsByClassName("regist")[0];
const registbtnElem = document.getElementsByClassName("regist-btn")[0];
const loginbtnElem = document.getElementsByClassName("login-btn")[0];

const salebtnELem = document.getElementsByClassName("sale-btn")[0];
const storeElem = document.getElementsByClassName("store-btn")[0];
const talkElem = document.getElementsByClassName("talk-btn")[0];
const nocookieElem = document.getElementsByClassName("noCookie")[0];

const catelist1 = document
  .getElementById("cate-list1")
  .getElementsByTagName("a");
const catelist2 = document
  .getElementById("cate-list2")
  .getElementsByTagName("a");
const catelist3 = document
  .getElementById("cate-list3")
  .getElementsByTagName("a");
// const noticehover = ();

noticeElem.onmouseover = () => {
  noticelistElem.classList.add("on");
  mystorelistElem.classList.remove("on");
};

noticeElem.onmouseout = () => {
  setTimeout(() => {
    noticelistElem.classList.remove("on");
  }, 1500);
};

// mystore1Elem.onmouseover = () => {
//   mystorelistElem.classList.add("on");
// };

// mystore1Elem.onmouseout = () => {
//   setTimeout(() => {
//     mystorelistElem.classList.remove("on");
//   }, 1500);
// };

mystore1Elem.onclick = () => {
  loginmodalElem.classList.add("on");
  loginonElem.classList.add("on");
};

mystore2Elem.onmouseover = () => {
  mystorelistElem.classList.add("on");
  noticelistElem.classList.remove("on");
};

mystore2Elem.onmouseout = () => {
  setTimeout(() => {
    mystorelistElem.classList.remove("on");
  }, 1500);
};
salebtnELem.onclick = (e) => {
  if (nocookieElem.classList.contains("on")) {
    e.preventDefault();
    loginmodalElem.classList.add("on");
    loginonElem.classList.add("on");
  }
};

storeElem.onclick = (e) => {
  if (nocookieElem.classList.contains("on")) {
    e.preventDefault();
    loginmodalElem.classList.add("on");
    loginonElem.classList.add("on");
  }
};

talkElem.onclick = (e) => {
  if (nocookieElem.classList.contains("on")) {
    e.preventDefault();
    loginmodalElem.classList.add("on");
    loginonElem.classList.add("on");
  }
};

cateImgElem.onmouseover = () => {
  cateImgElem.classList.add("on");
  firstCateElem.classList.add("on");
};

firstCateElem.onmouseover = () => {
  firstCateElem.classList.add("on");
  cateImgElem.classList.add("on");
};

for (let i = 0; i < catelist1.length; i++) {
  catelist1[i].onmouseover = () => {
    secondCateElem.classList.add("on");
  };

  catelist1[i].onmousedown = () => {
    for (let a = 0; a < catelist1.length; a++) {
      catelist1[a].classList.remove("on");
    }
    catelist1[i].classList.add("on");
  };
}

for (let i = 0; i < catelist2.length; i++) {
  catelist2[i].onmouseover = () => {
    thirdCateElem.classList.add("on");
  };
  catelist2[i].onmousedown = () => {
    for (let a = 0; a < catelist1.length; a++) {
      catelist2[a].classList.remove("on");
    }
    catelist2[i].classList.add("on");
  };
}

for (let i = 0; i < catelist3.length; i++) {
  catelist3[i].onclick = () => {
    for (let a = 0; a < catelist3.length; a++) {
      catelist3[a].classList.remove("on");
    }
    catelist3[i].classList.add("on");
  };
}
// thirdCateElem.onmouseover = () => {
//   thirdCateElem.classList.add("on");
// };

bodyElem.onmouseover = () => {
  cateImgElem.classList.remove("on");
  firstCateElem.classList.remove("on");
  secondCateElem.classList.remove("on");
  thirdCateElem.classList.remove("on");
  for (let a = 0; a < catelist1.length; a++) {
    catelist1[a].classList.remove("on");
  }
  for (let a = 0; a < catelist2.length; a++) {
    catelist2[a].classList.remove("on");
  }
  for (let a = 0; a < catelist3.length; a++) {
    catelist3[a].classList.remove("on");
  }
};

loginbtnELem.onclick = () => {
  loginmodalElem.classList.add("on");
  loginonElem.classList.add("on");
};
modal_registELem.onclick = () => {
  loginonElem.classList.remove("on");
  registonElem.classList.add("on");
};
modal_loginELem.onclick = () => {
  registonElem.classList.remove("on");
  loginonElem.classList.add("on");
};

loginmodalElem.onclick = () => {
  loginmodalElem.classList.remove("on");
  loginonElem.classList.remove("on");
  registonElem.classList.remove("on");
};
