const logoutElem = document.getElementById("logout");
const delElem = document.getElementById("account_del");
const manageElem = document.getElementById("manage");
console.log(logoutElem);

logoutElem.onclick = () => {
  (async () => {
    try {
      const logout = (
        await axios.post(
          "/api/user/logout",
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
      await axios.get("/api/user/info", {
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

(async () => {
  try {
    const logUser = (
      await axios.get("/api/user/info", {
        withCredentials: true,
      })
    ).data;
    console.log(logUser[1][0].id);
    const delaccount = document.getElementById("account_del");
    if (logUser[1][0].id) {
      delaccount.onclick = (e) => {
        e.preventDefault();
        axios.post(
          "/api/manage/deluser",
          { id: logUser[1][0].id, store_id: logUser[1][0].store },
          {
            withCredentials: true,
          }
        ).data;

        axios.post(
          "/api/user/logout",
          {},
          {
            withCredentials: true,
          }
        ).data;

        alert("회왼탈퇴 완료");
        location.href = "http://localhost:8080";
      };
    }
  } catch (err) {
    console.error(err);
  }
})();
