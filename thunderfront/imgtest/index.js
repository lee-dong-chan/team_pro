const form = document.getElementById("formElem");

form.onsubmit = async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(data);
  try {
    const sellData = (
      await axios.post("/api/imgtest", data, {
        withCredentials: true,
      })
    ).data;
    console.log(sellData);
  } catch (err) {
    console.error(err);
  }
};
