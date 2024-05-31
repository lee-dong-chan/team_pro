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
      "http://localhost:8000/search",
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
    console.log(correctitem);
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
    console.log(newitem);
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
    console.log(lowtitem);
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

    correctElem.onclick = () => {
      searchproduct = correctitem;
      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      correctElem.classList.add("on");
    };
    recentElem.onclick = () => {
      searchproduct = newitem;
      console.log(searchproduct);
      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      recentElem.classList.add("on");
    };
    lowElem.onclick = () => {
      searchproduct = lowtitem;
      console.log(searchproduct);
      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      lowElem.classList.add("on");
    };

    highElem.onclick = () => {
      searchproduct = highitem;
      console.log(searchproduct);
      getPrd();
      correctElem.classList.remove("on");
      recentElem.classList.remove("on");
      lowElem.classList.remove("on");
      highElem.classList.remove("on");
      highElem.classList.add("on");
    };

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
          prdArea.innerHTML += `<a href="/product_page/?product${searchproduct[i].id}">
        <div class="product">
          <img src="./imgs/select.png" />
          <div class="info">
            <p>${searchproduct[i].name}</p>
            <div>
              <span><span>${searchproduct[i].price}</span>원</span>4초전
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
