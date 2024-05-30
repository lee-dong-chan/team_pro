const logoutElem = document.getElementById("logout");
const delElem = document.getElementById("account_del");
console.log(logoutElem);

logoutElem.onclick = () => {
  (async () => {
    try {
      const logout = (
        await axios.post(
          "http://localhost:8000/user/logout",
          {},
          {
            withCredentials: true,
          }
        )
      ).data;
      if (logout.pop) {
        alert(logout.pop);
        location.href = "http://localhost:8080";
      }
    } catch (err) {
      console.error(err);
    }
  })();
};
