const prdName = document.getElementById("prd_name");
const prdPrice = document.getElementById("prd_price");
const prdStatus = document.getElementById("prd_status");
const explanation = document.getElementById("prd_exp");
const tag1 = document.getElementById("tag1");
const tag2 = document.getElementById("tag2");
const tag3 = document.getElementById("tag3");
const tag4 = document.getElementById("tag4");
const tag5 = document.getElementById("tag5");

const url = new URL(window.location).search;
let words = url.split("=");

console.log(words[1]);

(async () => {
  try {
    let paramElem = words[1];
    const product_page = (
      await axios.get(
        "http://localhost:8000/products",
        { param: paramElem },
        {
          withCredentials: true,
        }
      )
    ).data;
  } catch (err) {
    console.error(err);
  }
  //   console.log(req);
})();
