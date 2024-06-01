const logoutElem = document.getElementById("logout");
const delElem = document.getElementById("account_del");
const manageElem = document.getElementById("manage");
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

(async () => {
  try {
    const logUser = (
      await axios.get("http://localhost:8000/user/info", {
        withCredentials: true,
      })
    ).data;
    console.log(logUser[1][0].authority);
    if (logUser[1][0].authority == true) {
      manageElem.classList.add("on");
    } else {
      manageElem.classList.remove("on");
    }
  } catch (err) {
    console.error(err);
  }
})();

manageElem.onclick = () => {
  location.href = "http://localhost:8080/manage";
};
