const cateBtnsElem = document.getElementById("cate-btns");
const cateAllElem = document.getElementById("cate-all");
const subBtnElem = document.getElementsByClassName("sub-btn");
const sub2BtnElem = document.getElementsByClassName("sub2-btn");

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

//category
const catelist1Elem = document.getElementById("cate-list1");
const catelist2Elem = document.getElementById("cate-list2");
const catelist3Elem = document.getElementById("cate-list3");
(async () => {
  try {
    const mainpage = (
      await axios.get(
        "http://localhost:8000/main",
        {},
        {
          withCredentials: true,
        }
      )
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
              console.log(thirdcate);
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
