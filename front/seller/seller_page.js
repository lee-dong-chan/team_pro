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

(async () => {
  const noCookieElem = document.getElementsByClassName("noCookie")[0];
  const CookieElem = document.getElementsByClassName("Cookie")[0];
  try {
    const logUser = (
      await axios.get("http://localhost:8000/user/info", {
        withCredentials: true,
      })
    ).data;

    console.log(logUser[1][0]);

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

//regist

const registform = document.forms.regist;

const emailResultElem = document.getElementById("email-result");
const pwResultElem = document.getElementById("pw-result");
const pwcheckResultElem = document.getElementById("pw-check-result");
const nickResultElem = document.getElementById("nick-result");
const phoneResultElem = document.getElementById("phone-result");
const locationResultElem = document.getElementById("location-result");
const registElem = document.getElementById("regist");
const loginbtnELem = document.getElementById("login-btn");
const loginmodalElem = document.getElementsByClassName("login-modal")[0];
const loginonElem = document.getElementsByClassName("login")[0];
const modal_registELem = document.getElementsByClassName("regist-link")[0];
const modal_loginELem = document.getElementsByClassName("login-link")[0];
const registonElem = document.getElementsByClassName("regist")[0];
const registbtnElem = document.getElementsByClassName("regist-btn")[0];
const loginbtnElem = document.getElementsByClassName("login-btn")[0];

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
  statusValue = e.target.value;
  console.log(statusValue);
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
              prd_catelist2[j].setAttribute("data-auto", true);
              cateValue2 = prd_catelist2[j].dataset.itemtype;

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
                  cateValue3 = prd_catelist3[k].dataset.itemtype;

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

  const logUser = (
    await axios.get("http://localhost:8000/user/info", {
      withCredentials: true,
    })
  ).data;

  console.log(logUser);

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
    data.append("userstore_id", logUser[1][0].store);
    // data.append("userstore_id", 1);
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
    data.append("direct_trade_location", form.location.value);
    data.append("favorite_product", 0);
    data.append("view", 0);

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
