//paging script
const pagelistElem = document.getElementsByClassName("page-list")[0];
const pageElem = document.getElementsByClassName("num");
const nextElem = document.getElementById("next-btn");

let page = 1;
let count = 40;
let pageidx = 0;
console.log(user.length);

// search;

const searchform = document.forms.searchform;

searchform.onsubmit = async (e) => {
  e.preventDefault();
  const ProductList = document.getElementById("product-wrap");
  try {
    location.href = `http://localhost:8080/search/?${searchform.search.value}`;
    const correctitem = (
      await axios.post(
        "http://localhost:8000/search",
        {
          keyword: searchform.search.value,
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
          keyword: searchform.search.value,
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
          keyword: searchform.search.value,
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
          keyword: searchform.search.value,
        },
        {
          withCredentials: true,
        }
      )
    ).data;

    ProductList.innerHTML = "";

    for (let i = (page - 1) * count; i < page * count; ++i) {
      if (i < user.length) {
        ProductList.innerHTML += `<a href="#">
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

const pageLi = async () => {
  try {
    const pagingCount = Math.floor(user.length / 40);
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
  } catch (err) {
    console.error(err);
  }
};

pageLi();
