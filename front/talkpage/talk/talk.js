const banlistElem = document.getElementsByClassName("banlist-btn");
const talkmodal1Elem = document.getElementsByClassName("talk-modal1")[0];
const talkmodal2Elem = document.getElementsByClassName("talk-modal2")[0];
const talklistModalElem = document.getElementsByClassName("talklist-modal")[0];
const banmanageElem = document.getElementsByClassName("ban-manage")[0];
const talklogModalElem = document.getElementsByClassName("talklog-modal")[0];
const talklistMenuElem = document.getElementsByClassName("talklist-menu")[0];
const talklogMenuElem = document.getElementsByClassName("talklog-menu")[0];
const talkcateElem = document.getElementsByClassName("talk-cate")[0];
const pictureElem = document.getElementsByClassName("picture")[0];
const emojiElem = document.getElementsByClassName("Emoji")[0];
const inputbtnElem = document.getElementById("input-btn");
const talkwrapElem = document.getElementById("log-wrap");
const inputboxElem = document.getElementById("input-box");

function talklistMenuClick(elem) {
  //   console.log("???");
  //   console.log(e);
  //   console.dir(elem.parentElement);
  [...elem.parentElement.children].forEach((item) => {
    item.classList.remove("on");
  });
  elem.classList.add("on");
}

banlistElem[0].onclick = () => {
  talkmodal1Elem.classList.add("on");
  talklistModalElem.classList.add("on");
  talklistMenuElem.classList.add("on");
  talklistMenuElem.innerHTML = `<h2 id="ban-store">차단 상점 관리</h2>`;

  const banstoreElem = document.getElementById("ban-store");
  const banmanageElem = document.getElementsByClassName("ban-manage")[0];
  banstoreElem.onclick = () => {
    banmanageElem.classList.add("on");
  };
};

talklistModalElem.onclick = () => {
  talkmodal1Elem.classList.remove("on");
  talklistModalElem.classList.remove("on");
  talklistMenuElem.classList.remove("on");
  banmanageElem.classList.remove("on");
};

talkcateElem.onclick = () => {
  talkmodal1Elem.classList.add("on");
  talklistModalElem.classList.add("on");
  talklistMenuElem.classList.add("on");
  talklistMenuElem.innerHTML = `<h3 class="btn-li on" onclick="talklistMenuClick(this)">전체 대화</h3>
          <h3 class="btn-li" onclick="talklistMenuClick(this)">구매 대화</h3>
          <h3 class="btn-li" onclick="talklistMenuClick(this)">판매 대화</h3>`;
  //   const talkmenu_btnElem = [...document.getElementsByClassName("btn-li")];
  //   talkmenu_btnElem.forEach((item) => {
  //     item.onclick = () => {
  //       talkmenu_btnElem.forEach((item) => {
  //         item.classList.remove("on");
  //       });
  //       item.classList.add("on");
  //     };
  //   });
};

banlistElem[1].onclick = () => {
  talkmodal2Elem.classList.add("on");
  talklogModalElem.classList.add("on");
  talklogMenuElem.classList.add("on");
  talklogMenuElem.innerHTML = ` <a>
  <h2>알람켜기</h2>
</a>
<a>
  <h2>상점 정보 보기</h2>
</a>
<a>
  <h2>신고이력 조회하기</h2>
</a>
<a>
  <h2>신고하기</h2>
</a>
<a>
  <h2>차단 하기</h2>
</a>
<a>
  <h2>대화방 나가기</h2>
</a>`;
};

pictureElem.onclick = () => {
  talkmodal2Elem.classList.add("on");
  talklogModalElem.classList.add("on");
  talklogMenuElem.classList.add("on");
  talklogMenuElem.innerHTML = `<h2 class="">사진 보내기</h2>`;
};

talklogModalElem.onclick = () => {
  talkmodal2Elem.classList.remove("on");
  talklogModalElem.classList.remove("on");
  talklogMenuElem.classList.remove("on");
};

emojiElem.onclick = () => {
  talkwrapElem.classList.add("on");
  inputboxElem.innerHTML = `<div class="emoji-box">
  <img clss="emojis" src="./imgs/emoji/thumbnail_01 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_01.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_02 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_02.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_03 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_03.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_04 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_04.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_05 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_05.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_06 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_06 (2).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_06.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_07 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_07 (2).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_07.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_08 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_08 (2).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_08.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_09 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_09.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_10.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_11.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_12.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_13.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_14 (1).png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_14.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_15.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_16.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_17.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_18.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_19.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_20.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_21.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_22.png">
  <img clss="emojis" src="./imgs/emoji/thumbnail_24.png">
</div>`;
};

inputbtnElem.onclick = () => {
  talkwrapElem.classList.add("on");
  inputboxElem.innerHTML = `<div class="input-btns">
  <div>
    <div>
      <img src="./imgs/icon_ic_location.png">
    </div>
    <p>배송지전달</p>
  </div>
  <div>
    <div>
      <img src="./imgs/icon_ic_clock.png">
    </div>
    <p>직거래 약속</p>
  </div>
  <div>
    <div>
      <img src="./imgs/icon_ic_product_select.png">
    </div>
    <p>상품선택</p>
  </div>
</div>`;
};

talkwrapElem.onclick = () => {
  talkwrapElem.classList.remove("on");
};
