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

const catelist1Elem = document.getElementById("cate-list1");
const catelist2Elem = document.getElementById("cate-list2");
const catelist3Elem = document.getElementById("cate-list3");
(async () => {
  try {
    const mainpage = (
      await axios.get("http://localhost:8000/main", {
        withCredentials: true,
      })
    ).data;

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

              console.log(
                mainpage[0][secondcate].Secondcategories[thirdcate]
                  .Thirdcategories
              );
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

const catelist1 = document
  .getElementById("cate-list1")
  .getElementsByTagName("a");
const catelist2 = document
  .getElementById("cate-list2")
  .getElementsByTagName("a");
const catelist3 = document
  .getElementById("cate-list3")
  .getElementsByTagName("a");

noticeElem.onmouseover = () => {
  noticelistElem.classList.add("on");
  mystorelistElem.classList.remove("on");
};

noticeElem.onmouseout = () => {
  setTimeout(() => {
    noticelistElem.classList.remove("on");
  }, 1500);
};

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

const slideListElem = document.getElementById("slide");
slideListElem.style.transform = `translateX(-1024px)`;
let length = 1024;
let idx = 1;
let interval;
let isMoving = false;

const move = () => {
  isMoving = true;
  slideListElem.classList.add("on");
  slideListElem.style.transform = `translateX(-${idx * length}px)`;
  setTimeout(() => {
    isMoving = false;
    slideListElem.classList.remove("on");
    if (idx == 7) {
      idx = 1;
    } else if (idx == 0) {
      idx = 6;
    }
    slideListElem.style.transform = `translateX(-${idx * length}px)`;
  }, 1000);
  //   if (idx == 7) {
  //     setTimeout(() => {
  //       idx = 1;
  //       slideListElem.style.transform = `translateX(-${idx * length}px)`;
  //     }, 1000);
  //   } else if (idx == 0) {
  //     setTimeout(() => {
  //       idx = 6;
  //       slideListElem.style.transform = `translateX(-${idx * length}px)`;
  //     }, 1000);
  //   }
};

const createIntaval = () => {
  interval = setInterval(() => {
    idx++, move();
  }, 4000);
};

createIntaval();

document.getElementById("prev").onclick = () => {
  if (isMoving) return;
  idx--;
  move();
};

document.getElementById("next").onclick = () => {
  if (isMoving) return;
  idx++;
  move();
};

//regist

const registform = document.forms.regist;

const emailResultElem = document.getElementById("email-result");
const pwResultElem = document.getElementById("pw-result");
const pwcheckResultElem = document.getElementById("pw-check-result");
const nickResultElem = document.getElementById("nick-result");
const phoneResultElem = document.getElementById("phone-result");
const locationResultElem = document.getElementById("location-result");
const registElem = document.getElementById("regist");

const reset = () => {
  for (const item of registElem.getElementsByTagName("input")) {
    item.value = null;
  }
  emailResultElem.innerHTML = "";
  pwResultElem.innerHTML = "";
  pwcheckResultElem.innerHTML = "";
  nickResultElem.innerHTML = "";
  phoneResultElem.innerHTML = "";
  locationResultElem.innerHTML = "";
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

let isEmail = false,
  isPw = false,
  isCheck = false,
  isNick = false,
  isPhone = false,
  isLocation = false;

registform.email.oninput = (e) => {
  const emailReg = /^[a-z0-9가-힣]+@[a-z]+\.[a-z]{2,3}$/;
  console.log(emailReg.test(e.target.value));

  isEmail = false;
  if (!emailReg.test(e.target.value)) {
    emailResultElem.innerHTML = "이메일 형식을 지켜주세요";
  } else {
    isEmail = true;
    emailResultElem.innerHTML = "";
  }
};

let inputPw;

registform.pw.oninput = (e) => {
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/;
  console.log(pwReg.test(e.target.value));
  isPw = false;
  inputPw = e.target.value;
  console.log(inputPw);
  if (e.target.value.length < 8 || e.target.value.length > 30) {
    pwResultElem.innerHTML = "비밀번호는 8글자 이상, 30글자 이하로 작성하세요";
  } else if (!pwReg.test(e.target.value)) {
    pwResultElem.innerHTML = "비밀번호는 영어, 특수문자, 숫자를 포함하세요";
  } else {
    isPw = true;
    pwResultElem.innerHTML = "";
  }
};

registform["pw-check"].oninput = (e) => {
  isCheck = false;
  if (e.target.value !== inputPw) {
    pwcheckResultElem.innerHTML = "비밀번호가 일치하지 않습니다.";
  } else {
    isCheck = true;
    pwcheckResultElem.innerHTML = "";
  }
};

registform.nick.onchange = async (e) => {
  const nickReg = /^[A-Z|a-z|0-9|ㄱ-ㅎ|가-힣]{2,16}$/;
  isNick = false;

  const nickdub = (
    await axios.post("http://localhost:8000/user/nick", {
      nick: e.target.value,
    })
  ).data;
  console.log(nickdub.message);

  if (e.target.value.lenght < 2 || e.target.value.length > 30) {
    nickResultElem.innerHTML = "닉네임 2글자 이상, 16글자 이하로 작성하세요";
  } else if (!nickReg.test(e.target.value)) {
    nickResultElem.innerHTML = "특수문자 제외 알파벳과 한글로 작성하세요";
  } else if (nickdub.message == "중복임") {
    nickResultElem.innerHTML = "중복된 닉네임입니다";
  } else {
    isNick = true;
    nickResultElem.innerHTML = "";
  }
};

registform.phone.oninput = (e) => {
  const phoneReg = /^\d{3}-\d{3,4}-\d{4}$/;
  isPhone = false;
  console.log(e.target.value);
  if (!phoneReg.test(e.target.value)) {
    phoneResultElem.innerHTML = "전화번호 형식에 맞추어 주세요";
  } else {
    isPhone = true;
    phoneResultElem.innerHTML = "";
  }
};

registform.location.oninput = (e) => {
  const locationReg =
    /(([가-힣A-Za-z·\d~\-\.]{2,}(로|길).[\d]+)|([가-힣A-Za-z·\d~\-\.]+(읍|동)\s)[\d]+)/;
  isLocation = false;
  console.log(e.target.value);
  if (!locationReg.test(e.target.value)) {
    locationResultElem.innerHTML = "주소를 형식에 맞게 입력하세요";
  } else {
    isLocation = true;
    locationResultElem.innerHTML = "";
  }
};

registform.onsubmit = async (e) => {
  e.preventDefault();
  console.log(registform.email.value);
  try {
    const registdata = (
      await axios.post(
        "http://localhost:8000/user/regist",
        {
          email: registform.email.value,
          pw: registform.pw.value,
          "pw-check": registform["pw-check"].value,
          nick: registform.nick.value,
          phone: registform.phone.value,
          location: registform.location.value,
        },
        {
          withCredentials: true,
        }
      )
    ).data;
    if (registdata.pop) {
      alert(registdata.pop);
      location.href = location.href;
    }
  } catch (err) {
    console.error(err);
  }
};

//login

const loginform = document.forms.login;
const emailCheckElem = document.getElementById("email");
const pwCheckElem = document.getElementById("pw");
const loginElem = document.getElementById("login");

const loginreset = () => {
  for (const item of loginElem.getElementsByTagName("input")) {
    item.value = null;
  }
  emailCheckElem.innerHTML = "";
  pwCheckElem.innerHTML = "";
};

loginmodalElem.onclick = () => {
  reset();
  loginreset();
  loginmodalElem.classList.remove("on");
  loginonElem.classList.remove("on");
  registonElem.classList.remove("on");
};

let loginEmail = false,
  loginPw = false;

loginform.email.oninput = (e) => {
  const emailReg = /^[a-z0-9가-힣]+@[a-z]+\.[a-z]{2,3}$/;

  loginEmail = false;
  if (!emailReg.test(e.target.value)) {
    emailCheckElem.innerHTML = "이메일 형식을 지켜주세요";
  } else {
    loginEmail = true;
    emailCheckElem.innerHTML = "";
  }
};

loginform.pw.oninput = (e) => {
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/;

  loginPw = false;

  if (e.target.value.length < 8 || e.target.value.length > 30) {
    pwCheckElem.innerHTML = "비밀번호는 8글자 이상, 30글자 이하로 작성하세요";
  } else if (!pwReg.test(e.target.value)) {
    pwCheckElem.innerHTML = "비밀번호는 영어, 특수문자, 숫자를 포함하세요";
  } else {
    loginPw = true;
    pwCheckElem.innerHTML = "";
  }
};

loginform.onsubmit = async (e) => {
  e.preventDefault();
  try {
    const logindata = (
      await axios.post(
        "http://localhost:8000/user/login",
        {
          email: loginform.email.value,
          pw: loginform.pw.value,
        },
        {
          withCredentials: true,
        }
      )
    ).data;
    if (logindata.error) {
      alert(logindata.error);
    } else if (logindata.pwerror) {
      alert(logindata.pwerror);
    } else if (logindata.menager) {
      alert(logindata.menager);
      location.href = "http://localhost:8080/manage";
    } else {
      alert("로그인 성공!");
      location.href = location.href;
    }
  } catch (err) {
    console.error(err);
  }
};

//logout
const logoutbtn = document.getElementById("logout-btn");
logoutbtn.onclick = () => {
  (async () => {
    try {
      const logoutdata = (
        await axios.post(
          "http://localhost:8000/user/logout",
          {},
          {
            withCredentials: true,
          }
        )
      ).data;
      if (logoutdata.pop) {
        alert(logoutdata.pop);
        location.href = location.href;
      }
    } catch (err) {
      console.error(err);
    }
  })();
};
// logcheck

(async () => {
  const noCookieElem = document.getElementsByClassName("noCookie")[0];
  const CookieElem = document.getElementsByClassName("Cookie")[0];
  try {
    const logUser = (
      await axios.get("http://localhost:8000/user/info", {
        withCredentials: true,
      })
    ).data;

    console.log(logUser);

    if (logUser.result == "notlogin") {
      CookieElem.classList.remove("on");
      noCookieElem.classList.add("on");
    } else if (logUser[0].result == "login") {
      noCookieElem.classList.remove("on");
      CookieElem.classList.add("on");
    }
  } catch (err) {
    console.error(err);
  }
})();

// search;

const searchform = document.forms.searchform;

searchform.onsubmit = async (e) => {
  e.preventDefault();

  try {
    location.href = `http://localhost:8080/search/?${searchform.search.value}`;
    await axios.post("http://localhost:8000/search", {
      keyword: searchform.search.value,
    });
    await axios.get("http://localhost:8000/search", {}).data;
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  try {
    const mainitem = (
      await axios.get("http://localhost:8000/mainitem", {
        withCredentials: true,
      })
    ).data;
    const prdArea = document.getElementById("prd-list");
    console.log(mainitem);
    prdArea.innerHTML = "";

    for (let i = 0; i < mainitem.length; i++) {
      const time = Math.floor(
        (new Date() - new Date(mainitem[i].created_at)) / (1000 * 60 * 60)
      );
      let timedata =
        Math.floor(
          (new Date() - new Date(mainitem[i].created_at)) / (1000 * 60 * 60)
        ) + "시간전";
      if (time < 1) {
        timedata = "방금전";
      }
      if (time > 24) {
        timedata =
          Math.floor(
            (new Date() - new Date(mainitem[i].created_at)) / (1000 * 60 * 60)
          ) /
            24 +
          "일전";
      }

      prdArea.innerHTML += `<a href="/product_page/?product=${mainitem[i].id}" class="item">
      <div>
        <div id="imgdiv">
          <img src="http://localhost:8000/productimg/${mainitem[i].Prdimgs[0].img_path}" />
        </div>
        <div class="info">
          <div>
            <p>${mainitem[i].name}</p>
            <div>${mainitem[i].price}원<span>${timedata}</span></div>
          </div>
        </div>
      </div>
    </a>`;
    }

    console.log(timedata);
  } catch (err) {}
})();

//찜한상품
