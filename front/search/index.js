// search;
const searchElem = document.getElementById("result-search");
const searchform = document.forms.searchform;
let urlStr = window.location.href;
let url = new URL(urlStr);
let urlsearch = url.search;
let searchresult = decodeURI(urlsearch.slice(1));

searchElem.innerHTML = searchresult;

searchform.onsubmit = async (e) => {
  e.preventDefault();

  try {
    location.href = `http://localhost:8080/search/?${searchform.search.value}`;

    await axios.post(
      "http://localhost:8000/searchproduct",
      {
        keyword: searchform.search.value,
      },
      {
        withCredentials: true,
      }
    ).data;
  } catch (err) {
    console.error(err);
  }
};
const prdArea = document.getElementById("product-wrap");
(async () => {
  const ProductList = document.getElementById("product-wrap");
  const correctElem = document.getElementById("accuracy-btn");
  const recentElem = document.getElementById("recent-btn");
  const lowElem = document.getElementById("low-btn");
  const highElem = document.getElementById("high-btn");
  let searchproduct;

  try {
    const correctitem = (
      await axios.post(
        "http://localhost:8000/search",
        {
          keyword: searchresult,
        },
        {
          withCredentials: true,
        }
      )
    ).data;

    const newitem = (
      await axios.post(
        "http://localhost:8000/search_new",
        {
          keyword: searchresult,
        },
        {
          withCredentials: true,
        }
      )
    ).data;

    const lowtitem = (
      await axios.post(
        "http://localhost:8000/search_low",
        {
          keyword: searchresult,
        },
        {
          withCredentials: true,
        }
      )
    ).data;

    const highitem = (
      await axios.post(
        "http://localhost:8000/search_high",
        {
          keyword: searchresult,
        },
        {
          withCredentials: true,
        }
      )
    ).data;
    searchproduct = correctitem;
    console.log(searchproduct);
    correctElem.onclick = () => {
      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      correctElem.classList.add("on");
    };
    recentElem.onclick = () => {
      searchproduct = newitem;

      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      recentElem.classList.add("on");
    };
    lowElem.onclick = () => {
      searchproduct = lowtitem;

      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      lowElem.classList.add("on");
    };

    highElem.onclick = () => {
      searchproduct = highitem;
      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      highElem.classList.add("on");
    };

    const cateboxElem = document.getElementById("cate-box");
    const catebtnElem = document.getElementById("cate-btns");
    const arrUnique = searchproduct.filter((cate, idx, arr) => {
      return arr.findIndex((item) => item.cate3 === cate.cate3) === idx;
    });

    cateboxElem.innerHTML = "";
    catebtnElem.innerHTML = "";
    arrUnique.forEach((item) => {
      if (item.cate3) {
        cateboxElem.innerHTML += `<a href="/product_list/?cate3=${item.cate3id}"><div class="result-cate">
        <span><img src="./imgs/path.png" /></span>${item.cate3}
        <p></p>
      </div></a>`;

        catebtnElem.innerHTML += `<div class="sub-btn">
      <a href="/product_list/?cate3=${item.cate3id}">${item.cate3}<span></span></a>
    </div>`;
      } else if (!item.cate3) {
        cateboxElem.innerHTML += `<a href="/product_list/?cate2=${item.cate2id}"><div class="result-cate">
        <span><img src="./imgs/path.png" /></span>${item.cate2}
        <p></p>
      </div></a>`;

        catebtnElem.innerHTML += `<div class="sub-btn">
      <a href="/product_list/?cate2=${item.cate2id}">${item.cate2}<span></span></a>
    </div>`;
      } else if (!item.cate2) {
        cateboxElem.innerHTML += `<a href="/product_list/?cate1=${item.cate1id}"><div class="result-cate">
        <span><img src="./imgs/path.png" /></span>${item.cate1}
        <p></p>
      </div></a>`;

        catebtnElem.innerHTML += `<div class="sub-btn">
      <a href="/product_list/?cate1=${item.cate1id}">${item.cate1}<span></span></a>
    </div>`;
      }
    });

    ProductList.innerHTML = "";

    const pagelistElem = document.getElementsByClassName("page-list")[0];
    const pageElem = document.getElementsByClassName("num");
    const nextElem = document.getElementById("next-btn");

    let page = 1;
    let count = 40;
    let pageidx = 0;

    const getPrd = () => {
      prdArea.innerHTML = "";

      for (let i = (page - 1) * count; i < page * count; ++i) {
        if (i < searchproduct.length) {
          const time = Math.floor(
            (new Date() - new Date(searchproduct[i].created_at)) /
              (1000 * 60 * 60)
          );
          let timedata =
            Math.floor(
              (new Date() - new Date(searchproduct[i].created_at)) /
                (1000 * 60 * 60)
            ) + "시간전";
          if (time < 1) {
            timedata = "방금전";
          }
          if (time > 24) {
            timedata =
              Math.floor(
                (new Date() - new Date(searchproduct[i].created_at)) /
                  (1000 * 60 * 60)
              ) /
                24 +
              "일전";
          }
          prdArea.innerHTML += `<a href="/product_page/?product=${searchproduct[i].id}">
        <div class="product">
          <img id="pd_img" src="http://localhost:8000/productimg/${searchproduct[i].Prdimgs[0].img_path}" />
          <div class="info">
            <p>${searchproduct[i].name}</p>
            <div>
              <span><span>${searchproduct[i].price}</span>원</span>${timedata}
            </div>
          </div>
          <div class="location">
            <img src="./imgs/location.png" />${searchproduct[i].location}
          </div>
        </div>
      </a>`;
        }
      }
    };

    getPrd();

    const pageLi = () => {
      const pagingCount = Math.floor(product.length / 40);
      const pagingElem = document.getElementById("page-list");
      const preElem = document.getElementById("pre-btn");
      pagingElem.innerHTML = "";
      preElem.innerHTML = "";
      const creLi = document.createElement("li");

      for (let i = pageidx * 10; i < pagingCount; ++i) {
        if (i < 10 * (pageidx + 1)) {
          const creLi = document.createElement("li");
          creLi.innerHTML += `<a href="#${pageidx}" class="num">${i + 1}</a>`;

          creLi.onclick = () => {
            page = i + 1;
            getPrd(page);
            console.log("i:", i);
            console.log("page:", page);
            console.log("idx:", pageidx);

            [...pageElem].forEach((item) => {
              item.classList.remove("on");
            });
            pageElem[page - pageidx * 10 - 1].classList.add("on");
          };

          pagingElem.append(creLi);
        }
      }

      for (let i = pageidx * 10; i < pagingCount; ++i) {
        if (i == 10 * (pageidx + 1)) {
          nextElem.onclick = () => {
            if (pageidx == Math.floor(pagingCount / 10)) {
              return;
            }
            pageidx += 1;
            page = pageidx * 10 + 1;
            console.log("idx: " + pageidx);
            getPrd(page);
            pageLi();
            console.log("i:", i);
            console.log("page:", page);
            console.log("idx:", pageidx);
          };
        }
      }

      for (let i = pageidx * 1; i < pagingCount; ++i) {
        if (pageidx > 0) {
          creLi.innerHTML = `<a href="#" class="pred">〈</a>`;
          creLi.onclick = () => {
            pageidx -= 1;
            page = pageidx * 10 + 10;
            console.log("idx: " + pageidx);
            getPrd(page);
            pageLi();
            console.log("i:", i);
            console.log("page:", page);
            console.log("idx:", pageidx);
          };
          preElem.append(creLi);
        }
      }

      pageElem[page - pageidx * 10 - 1].classList.add("on");
      console.log("page C:", pagingCount);
      pageLi();
    };
  } catch (err) {
    console.error(err);
  }
})();
