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
