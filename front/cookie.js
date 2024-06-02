let urlStr = window.location.href;
let url = new URL(urlStr);
let urlparams = url.searchParams;

let productdata = urlparams.get("product");

(async () => {
  (
    await axios.post(
      "http://localhost:8000/product_cookie",
      {
        cookie: productdata,
      },
      {
        withCredentials: true,
      }
    )
  ).data;
})();

const cookie = document.cookie;
