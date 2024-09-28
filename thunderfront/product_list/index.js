const catelist1Elem = document.getElementById("cate-list1");
const catelist2Elem = document.getElementById("cate-list2");
const catelist3Elem = document.getElementById("cate-list3");
(async () => {
  try {
    const category = (
      await axios.get("/api/main", {
        withCredentials: true,
      })
    ).data;

    //category
    if (category[0]) {
      category[0].forEach((cate1) => {
        catelist1Elem.innerHTML += `<a href="/product_list?cate1=${cate1.id}" class="cate-list">${cate1.name}</a>`;
      });
      for (let i = 0; i < catelist1.length; i++) {
        catelist1[i].onmouseover = () => {
          secondCateElem.classList.add("on");
          let secondcate = i;
          let str = "";
          if (category[0][secondcate].Secondcategories) {
            category[0][secondcate].Secondcategories.forEach((cate2) => {
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
                category[0][secondcate].Secondcategories[thirdcate]
                  .Thirdcategories
              ) {
                category[0][secondcate].Secondcategories[
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
    ////////body cate

    const cate1Elem = document.getElementById("cate1");
    const cate2Elem = document.getElementById("cate2");
    const cate3Elem = document.getElementById("cate3");
    const selectcate1Elem = document.getElementById("cate1-sel");
    const selectcate2Elem = document.getElementById("cate2-sel");
    const selectcate3Elem = document.getElementById("cate3-sel");
    const mainElem = document.getElementsByClassName("main")[0];
    const subElem = document.getElementsByClassName("sub")[0];
    const sub2Elem = document.getElementsByClassName("sub2")[0];
    const catebtnsElem = document.getElementById("cate-btns");
    const pickElem = document.getElementById("pick-title");
    let urlStr = window.location.href;
    let url = new URL(urlStr);
    let urlparams = url.searchParams;
    let cate1 = urlparams.get("cate1");
    let cate2 = urlparams.get("cate2");
    let cate3 = urlparams.get("cate3");
    let Firstarr = category[0];
    let secondarr = [];
    Firstarr.forEach((item) => {
      item.Secondcategories.forEach((item) => {
        secondarr.push(item);
      });
    });
    let thirdarr = [];
    secondarr.forEach((item) => {
      item.Thirdcategories.forEach((item) => {
        thirdarr.push(item);
      });
    });

    if (cate1) {
      let firstcate = Firstarr[cate1 - 1];
      let secondcate = Firstarr[cate1 - 1].Secondcategories;
      selectcate1Elem.innerText = firstcate.name;
      pickElem.innerText = "";
      pickElem.innerText = firstcate.name;
      if (!cate2) {
        catebtnsElem.innerHTML = "";
        catebtnsElem.innerHTML = `  <div class="cate-all" id="cate-all">
        <a href="?cate1=${cate1}">전체보기<img src="./imgs/path.png" /></a>
      </div>`;
        secondcate.forEach((item) => {
          catebtnsElem.innerHTML += `<div class="sub-btn">
      <a href="?cate2=${item.id}">${item.name}<span></span></a>
    </div>`;
        });
      }

      Firstarr.forEach((item) => {
        mainElem.innerHTML += `<li><a href="?cate1=${item.id}" class="cate-li">${item.name}</a></li>`;
      });
    }

    if (cate2) {
      selectcate1Elem.innerText =
        Firstarr[secondarr[cate2 - 1].firstcategory_id - 1].name;
      selectcate2Elem.innerText = secondarr[cate2 - 1].name;
      cate2Elem.classList.add("on");

      pickElem.innerText = "";
      pickElem.innerText = secondarr[cate2 - 1].name;

      Firstarr.forEach((item) => {
        mainElem.innerHTML += `<li><a href="?cate1=${item.id}" class="cate-li">${item.name}</a></li>`;
      });
      secondarr.forEach((item) => {
        if (
          item.firstcategory_id ==
          Firstarr[secondarr[cate2 - 1].firstcategory_id - 1].id
        )
          subElem.innerHTML += `<li><a href="?cate2=${item.id}" class="cate-li">${item.name}</a></li>`;
      });

      if (!cate3) {
        catebtnsElem.innerHTML = "";
        catebtnsElem.innerHTML = `  <div class="cate-all" id="cate-all">
        <a href="?cate2=${cate2}">전체보기<img src="./imgs/path.png" /></a>
      </div>`;
        thirdarr.forEach((item) => {
          if (item.secondcategory_id == cate2) {
            catebtnsElem.innerHTML += `<div class="sub2-btn">
<a href="?cate3=${item.id}">${item.name}<span></span></a>
</div>`;
          }
        });
      }
    }
    if (cate3) {
      cate2Elem.classList.add("on");
      cate3Elem.classList.add("on");

      selectcate1Elem.innerText =
        Firstarr[
          secondarr[thirdarr[cate3 - 1].secondcategory_id - 1]
            .firstcategory_id - 1
        ].name;

      selectcate2Elem.innerText =
        secondarr[thirdarr[cate3 - 1].secondcategory_id - 1].name;
      selectcate3Elem.innerText = thirdarr[cate3 - 1].name;

      pickElem.innerText = "";
      pickElem.innerText = thirdarr[cate3 - 1].name;

      mainElem.innerHTML = "";
      subElem.innerHTML = "";
      sub2Elem.innerHTML = "";

      Firstarr.forEach((item) => {
        mainElem.innerHTML += `<li><a href="?cate1=${item.id}" class="cate-li">${item.name}</a></li>`;
      });
      secondarr.forEach((item) => {
        if (
          item.firstcategory_id ==
          Firstarr[
            secondarr[thirdarr[cate3].secondcategory_id].firstcategory_id - 1
          ].id
        ) {
          subElem.innerHTML += `<li><a href="?cate2=${item.id}" class="cate-li">${item.name}</a></li>`;
        }
      });

      thirdarr.forEach((item) => {
        if (
          item.secondcategory_id ==
          secondarr[thirdarr[cate3 - 1].secondcategory_id - 1].id
        ) {
          sub2Elem.innerHTML += `<li><a href="?cate3=${item.id}" class="cate-li">${item.name}</a></li>`;
        }
      });
      catebtnsElem.innerHTML = "";
    }
  } catch (err) {
    console.error(err);
  }
})();

//paging script
const pagelistElem = document.getElementsByClassName("page-list")[0];
const pageElem = document.getElementsByClassName("num");
const nextElem = document.getElementById("next-btn");
let urlStr = window.location.href;
let url = new URL(urlStr);
let urlparams = url.searchParams;
let cate1 = urlparams.get("cate1");
let cate2 = urlparams.get("cate2");
let cate3 = urlparams.get("cate3");
let page = 1;
let count = 20;
let pageidx = 0;

const prdArea = document.getElementById("product-wrap");
(async () => {
  const product = (
    await axios.post(
      "/api/product_list",
      {
        cate1ID: cate1,
        cate2ID: cate2,
        cate3ID: cate3,
      },
      {
        withCredentials: true,
      }
    )
  ).data;
  console.log(product);

  const getPrd = async () => {
    try {
      prdArea.innerHTML = "";

      for (let i = (page - 1) * count; i < page * count; ++i) {
        if (i < product.length) {
          const time = Math.floor(
            (new Date() - new Date(product[i].created_at)) / (1000 * 60 * 60)
          );
          let timedata =
            Math.floor(
              (new Date() - new Date(product[i].created_at)) / (1000 * 60 * 60)
            ) + "시간전";
          if (time < 1) {
            timedata = "방금전";
          }
          if (time > 24) {
            timedata =
              Math.floor(
                (new Date() - new Date(product[i].created_at)) /
                  (1000 * 60 * 60)
              ) /
                24 +
              "일전";
          }
          prdArea.innerHTML += `<a href="/product_page/?product=${product[i].product_id}">
        <div class="product">
          <img id="pd_img" src="/api/productimg/${product[i].Product.Prdimgs[0].img_path}" />
          <div class="info">
            <p>${product[i].name}</p>
            <div>
              <span><span>${product[i].price}</span>원</span>${timedata}
            </div>
          </div>
          <div class="location">
            <img src="./imgs/location.png" />${product[i].location}
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
      const pagingCount = Math.floor(product.length / 20) + 1;
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
    } catch (err) {
      console.error(err);
    }
  };
})();
