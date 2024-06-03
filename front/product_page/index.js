// import { Prdimg } from "../../back/models";

const prdName = document.getElementById("prd_name");
const prdPrice = document.getElementById("prd_price");
const prdStatus = document.getElementById("prd_status");
const explanation = document.getElementById("prd_exp");
const tag1 = document.getElementById("tag1");
const tag2 = document.getElementById("tag2");
const tag3 = document.getElementById("tag3");
const tag4 = document.getElementById("tag4");
const tag5 = document.getElementById("tag5");
const imgArea = document.getElementById("img-area");
const locationElem = document.getElementById("location");
const locationElem2 = document.getElementById("location2");

const cate1 = document.getElementById("cate1");
const cate2 = document.getElementById("cate2");
const cate3 = document.getElementById("cate3");

const viewElem = document.getElementById("viewArea");
const createdAt = document.getElementById("created");
const favorite = document.getElementById("favArea");

const storeName = document.getElementById("store_name");
let urlStr = window.location.href;
let url = new URL(urlStr);
let urlparams = url.searchParams;

let words = urlparams.get("product");

console.log(words);

(async () => {
  try {
    let paramElem = words;

    const product_page = (
      await axios.post(
        "http://localhost:8000/product_page",
        { paramValue: paramElem },
        {
          withCredentials: true,
        }
      )
    ).data;

    console.log(product_page);
    console.log(product_page[0].Prdimgs[0].img_path);
    console.log(product_page[0].Productetc.direct_trade_location);

    prdName.innerHTML = product_page[0].name;
    imgArea.innerHTML = `<img class= "prd-img1" src="http://localhost:8000/productimg/${product_page[0].Prdimgs[0].img_path}" />`;
    prdPrice.innerHTML = `${product_page[0].ProductSell.price}원`;
    if (product_page[0].Productetc.direct_trade_location == null) {
      locationElem.innerHTML = "전국";
      locationElem2.innerHTML = "전국";
    } else if (product_page[0].Productetc.direct_trade_location != null) {
      locationElem.innerHTML = product_page[0].Productetc.direct_trade_location;
      locationElem2.innerHTML =
        product_page[0].Productetc.direct_trade_location;
    }

    if (product_page[0].Productinfo.product_status == 1) {
      prdStatus.innerHTML = "새 상품(미사용)";
    } else if (product_page[0].Productinfo.product_status == 2) {
      prdStatus.innerHTML = "사용감 없음";
    } else if (product_page[0].Productinfo.product_status == 3) {
      prdStatus.innerHTML = "사용감 적음";
    } else if (product_page[0].Productinfo.product_status == 4) {
      prdStatus.innerHTML = "사용감 많음";
    } else if (product_page[0].Productinfo.product_status == 5) {
      prdStatus.innerHTML = "고장/파손 상품";
    }

    if (product_page[0].ProductTag.tag5 != null) {
      tag5.innerHTML = `#${product_page[0].ProductTag.tag5}`;
    } else if (product_page[0].ProductTag.tag5 == null) {
      tag5.innerHTML = "";
    }

    if (product_page[0].ProductTag.tag4 != null) {
      tag4.innerHTML = `#${product_page[0].ProductTag.tag4}`;
    } else if (product_page[0].ProductTag.tag4 == null) {
      tag4.innerHTML = "";
    }

    if (product_page[0].ProductTag.tag3 != null) {
      tag3.innerHTML = `#${product_page[0].ProductTag.tag3}`;
    } else if (product_page[0].ProductTag.tag3 == null) {
      tag3.innerHTML = "";
    }

    if (product_page[0].ProductTag.tag2 != null) {
      tag2.innerHTML = `#${product_page[0].ProductTag.tag2}`;
    } else if (product_page[0].ProductTag.tag2 != null) {
      tag2.innerHTML = "";
    }

    if (product_page[0].ProductTag.tag1 != null) {
      tag1.innerHTML = `#${product_page[0].ProductTag.tag1}`;
    } else if (product_page[0].ProductTag.tag1 != null) {
      tag1.innerHTML = "";
    }

    explanation.innerHTML = product_page[0].Productinfo.product_explanation;

    if (product_page[0].Productinfo.thirdcategory_id != null) {
      cate3.innerHTML = product_page[0].Productinfo.Thirdcategory.name;
    } else if (product_page[0].Productinfo.thirdcategory_id == null) {
      cate3.innerHTML = "";
    }

    if (product_page[0].Productinfo.secondcategory_id != null) {
      cate2.innerHTML = product_page[0].Productinfo.Secondcategory.name;
    } else if (product_page[0].Productinfo.secondcategory_id == null) {
      cate2.innerHTML = "";
    }

    cate1.innerHTML = product_page[0].Productinfo.Firstcategory.name;
    storeName.innerHTML = product_page[0].Userstore.name;
    // prdPrice.innerHTML =
  } catch (err) {
    console.error(err);
  }
  //   console.log(req);
})();

//regist
const loginbtnELem = document.getElementById("login-btn");
const loginmodalElem = document.getElementsByClassName("login-modal")[0];
const loginonElem = document.getElementsByClassName("login")[0];
const modal_registELem = document.getElementsByClassName("regist-link")[0];
const modal_loginELem = document.getElementsByClassName("login-link")[0];
const registonElem = document.getElementsByClassName("regist")[0];
const registbtnElem = document.getElementsByClassName("regist-btn")[0];
const loginbtnElem = document.getElementsByClassName("login-btn")[0];

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

//찜한상품확인
(async () => {
  try {
    const logUser = (
      await axios.get("http://localhost:8000/user/info", {
        withCredentials: true,
      })
    ).data;

    if (logUser.result == "notlogin") {
      console.log("ok");
    } else if (logUser[0].result == "login") {
      const favorite = (
        await axios.post(
          "http://localhost:8000/favorite",
          { store: logUser[1][0].store },
          {
            withCredentials: true,
          }
        )
      ).data;
      console.log(favorite);
      const favoritElem = document.getElementsByClassName("wish-list")[0];
      if (favorite) {
        favoritElem.innerHTML = "";
        favoritElem.innerHTML = ` <h5>찜한상품</h5>
        <div>
          <a href="./"
            ><span><img src="./imgs/like.png" /></span>${favorite[0][0].idcnt}</a
          >
        </div>`;
      }

      const recentitem = (
        await axios.post(
          "http://localhost:8000/cookie",
          { id: favorite[1].product },
          {
            withCredentials: true,
          }
        )
      ).data;
      if (recentitem) {
        console.log(recentitem[0].Prdimgs[0].img_path);
        const recentElem = document.getElementsByClassName("recent-view")[0];
        recentElem.innerHTML = "";
        recentElem.innerHTML = `   <h5>최근본상품</h5>
      <div class="line"></div>
      <div class="recent-list">
      <a id ="pri" href="/product_page/?product=${recentitem[0].id}"><img src="http://localhost:8000/productimg/${recentitem[0].Prdimgs[0].img_path}" /></a>
      </div>`;
      }
    }
  } catch (err) {
    console.error(err);
  }
})();
