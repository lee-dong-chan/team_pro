// 카테고리 조작
(async () => {
  try {
    const categorydata = (
      await axios.get("http://localhost:8000/manage/editcategory", {
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

//상품 리스트
(async () => {
  const productElem = document.getElementsByClassName("product-box")[0];
  const product = (
    await axios.get("http://localhost:8000/manage/getproduct", {
      withCredentials: true,
    })
  ).data;
  console.log(productElem);
  productElem.innerHTML = "";

  product.forEach((item) => {
    productElem.innerHTML += ` <ul>
<li>
  <a href="http://localhost:8080/product_page/?product=${item.id}"
    ><div>
      <span>상품번호:${item.id} </span>제목:${item.name} <span>가격:${item.price} </span
      ><span>스토어:${item.userstore_id}</span>
    </div></a
  >
  <div class="delete-product">삭제</div>
</li>
</ul>`;
  });
})();

//상점리스트
(async () => {
  const storeElem = document.getElementsByClassName("store-box")[0];
  const store = (
    await axios.get("http://localhost:8000/manage/getstore", {
      withCredentials: true,
    })
  ).data;

  storeElem.innerHTML = "";

  store.forEach((item) => {
    storeElem.innerHTML += ` <ul>
  <li>
    <a href="http://localhost:8080/my_page/?my_page=${item.id}"
      ><div>
        <span>상점번호: ${item.store_id} </span>상점이름:${item.store_name} <span>유저번호:${item.id} </span>
      </div></a
    >
    <div class="delete-product">삭제</div>
  </li>
</ul>`;
  });

  console.log(store);
})();
