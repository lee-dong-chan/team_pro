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

//paging script

let user = [
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "SAMSUNG/TV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Shaomi",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "Banill/ChinRu",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGTV",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
  {
    name: "LGBT",
    price: "25000",
    location: "A시 B구 C동",
    img: "./imgs/eye.png",
  },
];
let page = 1;
let count = 40;
console.log(user.length);

const prdArea = document.getElementById("product-wrap");

// const getPrd = async () => {
//   try {
//     const product = (await axios.post("/product_list", { user, page, count }))
//       .data;
//     prdArea.innerHTML = "";

//     // (page -1) * count, page * count
//     // 40, 80
//     user = user.slice((page - 1) * count, page * count);

//     for (let i = 0; i < user.length; ++i) {
//       prdArea.innerHTML += `<a href="#">
//       <div class="product">
//         <img src="${user[i].img}" />
//         <div class="info">
//           <p>${user[i].name}</p>
//           <div>
//             <span><span>${user[i].price}</span>원</span>4초전
//           </div>
//         </div>
//         <div class="location">
//           <img src="./imgs/location.png" />${user[i].location}
//         </div>
//       </div>
//     </a>`;
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

const getPrd = async () => {
  try {
    const product = (await axios.post("/product_list", { user, page, count }))
      .data;
    prdArea.innerHTML = "";

    // (page -1) * count, page * count
    // 40, 80
    // page = 1, i = 0 page =2, i = 40 page 3, i = 80
    // i = page - 1

    for (let i = (page - 1) * count; i < page * count; ++i) {
      if (i < user.length) {
        prdArea.innerHTML += `<a href="#">
      <div class="product">
        <img src="${user[i].img}" />
        <div class="info">
          <p>${user[i].name}</p>
          <div>
            <span><span>${user[i].price}</span>원</span>4초전
          </div>
        </div>
        <div class="location">
          <img src="./imgs/location.png" />${user[i].location}
        </div>
      </div>
    </a>`;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

getPrd();

const pageLi = async () => {
  try {
    const pagingCount = 10;

    pagingElem = document.getElementById("page-list");
    pagingElem.innerHTML = "";
    for (let i = 0; i < pagingCount; ++i) {
      const creLi = document.createElement("li");
      creLi.innerHTML = i + 1;
      creLi.onclick = () => {
        page = i + 1;
        getPrd(page);
        console.log(page);
      };
      pagingElem.append(creLi);
    }
  } catch (err) {
    console.error(err);
  }
};

pageLi();
