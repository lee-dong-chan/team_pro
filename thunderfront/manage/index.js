(async () => {
  try {
    const logUser = (
      await axios.get("/api/user/info", {
        withCredentials: true,
      })
    ).data;
    console.log(logUser);
    if (logUser.result == "notlogin") {
      location.href = "../";
    } else if (logUser[1][0].authority == false) {
      alert("관리자 계정이 아닙니다.");
      location.href = "../";
    }
  } catch (err) {
    console.error(err);
  }
})();

//상품 리스트 삭제
(async () => {
  const productElem = document.getElementsByClassName("product-box")[0];

  const product = (
    await axios.get("/api/manage/getproduct", {
      withCredentials: true,
    })
  ).data;

  productElem.innerHTML = "";

  product.forEach((item) => {
    productElem.innerHTML += ` <ul>
<li>
  <a href="/product_page/?product=${item.id}"
    ><div>
      <span>상품번호:${item.id} </span>제목:${item.name} <span>가격:${item.price} </span
      ><span>스토어번호:${item.userstore_id}</span>
    </div></a
  >
  <div class="delete-product">삭제</div>
</li>
</ul>`;
  });

  const deletElem = document.getElementsByClassName("delete-product");
  if (product) {
    for (let i = 0; i < deletElem.length; i++) {
      deletElem[i].onclick = () => {
        console.log("ok");
        axios.post(
          "/api/manage/delproduct",
          { id: product[i].id },
          {
            withCredentials: true,
          }
        ).data;
        location.href = location.href;
      };
    }
  }

  const searchform = document.forms.search;

  searchform.onsubmit = async (e) => {
    e.preventDefault();
    const search = (
      await axios.post(
        "/api/manage/searchproduct",
        { keyword: searchform.search.value },
        {
          withCredentials: true,
        }
      )
    ).data;
    console.log(search);
    productElem.innerHTML = "";

    search.forEach((item) => {
      productElem.innerHTML += ` <ul>
      <li>
        <a href="/product_page/?product=${item.id}"
          ><div>
            <span>상품번호:${item.id} </span>제목:${item.name} <span>가격:${item.price} </span
            ><span>스토어번호:${item.userstore_id}</span>
          </div></a
        >
        <div class="delete-product">삭제</div>
      </li>
      </ul>`;
    });
    if (search) {
      for (let i = 0; i < deletElem.length; i++) {
        deletElem[i].onclick = () => {
          console.log("ok");
          axios.post(
            "/api/manage/delproduct",
            { id: search[i].id },
            {
              withCredentials: true,
            }
          ).data;
          location.href = location.href;
        };
      }
    }
  };
})();

//상점리스트 삭제
(async () => {
  const storeElem = document.getElementsByClassName("store-box")[0];
  const store = (
    await axios.get("/api/manage/getstore", {
      withCredentials: true,
    })
  ).data;

  storeElem.innerHTML = "";

  store.forEach((item) => {
    storeElem.innerHTML += ` <ul>
  <li>
    <a href="/my_page/?my_page=${item.store_id}"
      ><div>
        <span>상점번호: ${item.store_id} </span>상점이름:${item.store_name} <span>유저번호:${item.id} </span>
      </div></a
    >
    <div class="delete-store">유저삭제</div>
  </li>
</ul>`;
  });

  console.log(store);
  const deletuserElem = document.getElementsByClassName("delete-store");
  if (deletuserElem) {
    for (let i = 0; i < deletuserElem.length; i++) {
      deletuserElem[i].onclick = () => {
        console.log("ok");
        axios.post(
          "/api/manage/deluser",
          { id: store[i].id, store_id: store[i].store_id },
          {
            withCredentials: true,
          }
        ).data;
        location.href = location.href;
      };
    }
  }
  const storeform = document.forms.store;

  storeform.onsubmit = async (e) => {
    e.preventDefault();
    const searchstore = (
      await axios.post(
        "/api/manage/searchstore",
        { keyword: storeform.searchstore.value },
        {
          withCredentials: true,
        }
      )
    ).data;

    storeElem.innerHTML = "";

    searchstore.forEach((item) => {
      storeElem.innerHTML += ` <ul>
      <li>
        <a href="/my_page/?my_page=${item.store_id}"
          ><div>
            <span>상점번호: ${item.store_id} </span>상점이름:${item.store_name} <span>유저번호:${item.id} </span>
          </div></a
        >
        <div class="search-store">유저삭제</div>
      </li>
    </ul>`;
    });

    const searchuserElem = document.getElementsByClassName("search-store");

    for (let i = 0; i < searchuserElem.length; i++) {
      searchuserElem[i].onclick = () => {
        axios.post(
          "/api/manage/deluser",
          { id: searchstore[i].id, store_id: searchstore[i].store_id },
          {
            withCredentials: true,
          }
        ).data;
        location.href = location.href;
      };
    }
  };
})();

//신고 상품 삭제
(async () => {
  const reportElem = document.getElementsByClassName("report-product")[0];

  const report = (
    await axios.get("/api/manage//getreport", {
      withCredentials: true,
    })
  ).data;

  reportElem.innerHTML = "";
  report.forEach((item) => {
    reportElem.innerHTML += ` <ul>
    <li>
      <div>
        <span>상품번호:${item.productid}</span>
        <span>상품이름:${item.product}</span>
        <span>신고사유:${item.report_content}</span>
        <span>스토어이름:${item.store}</span>
      </div>
      <div class="del-pd">완료</div>
    </li>
  </ul>`;
  });
  console.log(report);

  const delpdElem = document.getElementsByClassName("del-pd");
  for (let i = 0; i < delpdElem.length; i++) {
    delpdElem[i].onclick = () => {
      console.log("ok");
      axios.post(
        "/api/manage/delreport",
        { id: report[i].id },
        {
          withCredentials: true,
        }
      ).data;
      location.href = location.href;
    };
  }
})();

//카테고리 삭제

const cateform = document.forms.outcate;

cateform.onsubmit = async (e) => {
  e.preventDefault();
  const category = (
    await axios.post(
      "/api/manage/delcategory",
      {
        cate1: cateform.first.value,
        cate2: cateform.second.value,
        cate3: cateform.third.value,
      },
      {
        withCredentials: true,
      }
    )
  ).data;
  if (category.error == "입력값이 잘못되었습니다") {
    alert(category.error);
  } else {
    alert("카테고리 " + category + " 항목이 삭제되었습니다");
  }
  location.href = location.href;
};

//카테고리 생성

const createcateform = document.forms.incate;

createcateform.onsubmit = async (e) => {
  e.preventDefault();
  const category = (
    await axios.post(
      "/api/manage/makecategory",
      {
        cate1: createcateform.first.value,
        cate2: createcateform.second.value,
        cate3: createcateform.third.value,
      },
      {
        withCredentials: true,
      }
    )
  ).data;

  console.log(category);

  if (category) {
    alert("카테고리 " + category + " 항목이 생성되었습니다.");
  }
  location.href = location.href;
};

// 카테고리 조작
(async () => {
  try {
    const categorydata = (
      await axios.get("/api/manage/editcategory", {
        withCredentials: true,
      })
    ).data;

    const firstcateELem = document.getElementsByClassName("first-cate")[0];
    const secondcateElem = document.getElementsByClassName("second-cate")[0];
    const thirdcateElem = document.getElementsByClassName("third-cate")[0];
    const firstlistElem = document.getElementsByClassName("first-list");
    const secondlistElem = document.getElementsByClassName("second-list");
    const thirdlistElem = document.getElementsByClassName("third-list");
    const firstoutElem = document.getElementById("outFirst");
    const secondoutElem = document.getElementById("outSecond");
    const thirdoutElem = document.getElementById("outThird");
    firstcateELem.innerHTML = "";
    secondcateElem.innerHTML = "";
    categorydata.forEach((item) => {
      firstcateELem.innerHTML += `<ul class="first-list">
      <li>
        <div>${item.name}</div><span>${item.id}</span>
      </li>
    </ul>`;
    });
    for (let i = 0; i < firstlistElem.length; i++) {
      firstlistElem[i].onclick = () => {
        let secondcate = i;
        let str = "";
        if (categorydata[secondcate].Secondcategories) {
          categorydata[secondcate].Secondcategories.forEach((item) => {
            str += `<ul class="second-list">
              <li>
                <div>${item.name}</div><span>${item.id}</span>
              </li>
            </ul>`;
          });
        }

        firstoutElem.value = categorydata[secondcate].id;
        secondoutElem.value = "";
        thirdoutElem.value = "";

        secondcateElem.innerHTML = str;

        for (let i = 0; i < secondlistElem.length; i++) {
          secondlistElem[i].onclick = () => {
            let thirdcate = i;
            let str = "";

            if (
              categorydata[secondcate].Secondcategories[thirdcate]
                .Thirdcategories
            ) {
              categorydata[secondcate].Secondcategories[
                thirdcate
              ].Thirdcategories.forEach((item) => {
                str += `<ul class="third-list">
                <li>
                  <div>${item.name}</div><span>${item.id}</span>
                </li>
              </ul>`;
              });
            }
            thirdcateElem.innerHTML = str;
            secondoutElem.value =
              categorydata[secondcate].Secondcategories[thirdcate].id;
            thirdoutElem.value = "";

            for (let i = 0; i < thirdlistElem.length; i++) {
              thirdlistElem[i].onclick = () => {
                thirdoutElem.value =
                  categorydata[secondcate].Secondcategories[
                    thirdcate
                  ].Thirdcategories[i].id;
              };
            }
          };
        }
      };
    }
  } catch (err) {
    console.error(err);
  }
})();
