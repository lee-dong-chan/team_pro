prdlistBtn = document.getElementById("all_sell_list");
reviewBtn = document.getElementById("store_review");
favoriteBtn = document.getElementById("user_favorite_list");
followingBtn = document.getElementById("user_following");
followerBtn = document.getElementById("user_follower");

(async () => {
  const logUser = (
    await axios.get("http://localhost:8000/user/info", {
      withCredentials: true,
    })
  ).data;

  try {
    const UserInfo = await axios.post(
      "http://localhost:8000/my_page",
      {
        userstore_id: logUser[0][1].store,
      },
      { withCredentials: true }
    );
  } catch (err) {
    console.err(error);
  }
})();

mypageElem = document.getElementById("content_body_wrap");

mypageElem.innerHTML = `<div class="all_sell_list">
<div class="content_body_header">
  <span>상품<span>1</span></span>
  <select>
    <option>전체</option>
    <option>여성의류</option>
    <option>남성의류</option>
    <option>신발</option>
    <option>가방/지갑</option>
    <option>시계</option>
    <option>쥬얼리</option>
    <option>패션 액세서리</option>
    <option>디지털</option>
    <option>가전제품</option>
    <option>스포츠/레저</option>
    <option>차량/오토바이</option>
    <option>스타굿즈</option>
    <option>예술/희귀/수집품</option>
    <option>음반/악기</option>
    <option>도서/티켓/문구</option>
    <option>뷰티/미용</option>
    <option>가구/인테리어</option>
    <option>생활/주방용품</option>
  </select>
</div>
<dlv class="content_body">
  <div class="body_head">
    <div>
      <span>전체</span>
      <span>1개</span>
    </div>
    <div>
      <a class="on">최신순</a>
      <a>|</a>
      <a>인기순</a>
      <a>|</a>
      <a>저가순</a>
      <a>|</a>
      <a>고가순</a>
    </div>
  </div>
  <div class="prdboxArea">
  <a href="./">
    <div class="prdimgbox">
      <img src="./imgs/sample.png" />
      <span class="prdname">상품명예시텍스트</span>
      <div class="priceandCA">
        <span>750,000원</span>
        <span>3년 전</span>
      </div>
      <div class="location">
        <img class="icon" src="./imgs/loca_icon.png" />
        <span>서울특별시 강남구 세곡동</span>
      </div>
    </div>
    </a>
    <a href="./">
    <div class="prdimgbox">
      <img src="./imgs/sample.png" />
      <span class="prdname">상품명예시텍스트</span>
      <div class="priceandCA">
        <span>750,000원</span>
        <span>3년 전</span>
      </div>
      <div class="location">
        <img class="icon" src="./imgs/loca_icon.png" />
        <span>서울특별시 강남구 세곡동</span>
      </div>
    </div>
    </a>
    <a href="./">
    <div class="prdimgbox">
      <img src="./imgs/sample.png" />
      <span class="prdname">상품명예시텍스트</span>
      <div class="priceandCA">
        <span>750,000원</span>
        <span>3년 전</span>
      </div>
      <div class="location">
        <img class="icon" src="./imgs/loca_icon.png" />
        <span>서울특별시 강남구 세곡동</span>
      </div>
    </div>
    </a>
    <a href="./">
    <div class="prdimgbox">
      <img src="./imgs/sample.png" />
      <span class="prdname">상품명예시텍스트</span>
      <div class="priceandCA">
        <span>750,000원</span>
        <span>3년 전</span>
      </div>
      <div class="location">
        <img class="icon" src="./imgs/loca_icon.png" />
        <span>서울특별시 강남구 세곡동</span>
      </div>
    </div>
    </a>
    <div class="prdimgbox">
      <img src="./imgs/sample.png" />
      <span class="prdname">상품명예시텍스트</span>
      <div class="priceandCA">
        <span>750,000원</span>
        <span>3년 전</span>
      </div>
      <div class="location">
        <img class="icon" src="./imgs/loca_icon.png" />
        <span>서울특별시 강남구 세곡동</span>
      </div>
    </div>
  </div>
</dlv>
</div>
`;

prdlistBtn.onclick = () => {
  mypageElem.innerHTML = "";
  prdlistBtn.classList.remove("on");
  reviewBtn.classList.remove("on");
  favoriteBtn.classList.remove("on");
  followerBtn.classList.remove("on");
  followingBtn.classList.remove("on");
  prdlistBtn.classList.add("on");

  mypageElem.innerHTML = ` <div class="all_sell_list">
  <div class="content_body_header">
    <span>상품<span>1</span></span>
    <select>
      <option>전체</option>
      <option>여성의류</option>
      <option>남성의류</option>
      <option>신발</option>
      <option>가방/지갑</option>
      <option>시계</option>
      <option>쥬얼리</option>
      <option>패션 액세서리</option>
      <option>디지털</option>
      <option>가전제품</option>
      <option>스포츠/레저</option>
      <option>차량/오토바이</option>
      <option>스타굿즈</option>
      <option>예술/희귀/수집품</option>
      <option>음반/악기</option>
      <option>도서/티켓/문구</option>
      <option>뷰티/미용</option>
      <option>가구/인테리어</option>
      <option>생활/주방용품</option>
    </select>
  </div>
  <dlv class="content_body">
    <div class="body_head">
      <div>
        <span>전체</span>
        <span>1개</span>
      </div>
      <div>
        <a class="on">최신순</a>
        <a>|</a>
        <a>인기순</a>
        <a>|</a>
        <a>저가순</a>
        <a>|</a>
        <a>고가순</a>
      </div>
    </div>
    <div class="prdboxArea">
      <div class="prdimgbox">
        <img src="./imgs/sample.png" />
        <span class="prdname">상품명예시텍스트</span>
        <div class="priceandCA">
          <span>750,000원</span>
          <span>3년 전</span>
        </div>
        <div class="location">
          <img class="icon" src="./imgs/loca_icon.png" />
          <span>서울특별시 강남구 세곡동</span>
        </div>
      </div>
      <div class="prdimgbox">
        <img src="./imgs/sample.png" />
        <span class="prdname">상품명예시텍스트</span>
        <div class="priceandCA">
          <span>750,000원</span>
          <span>3년 전</span>
        </div>
        <div class="location">
          <img class="icon" src="./imgs/loca_icon.png" />
          <span>서울특별시 강남구 세곡동</span>
        </div>
      </div>
      <div class="prdimgbox">
        <img src="./imgs/sample.png" />
        <span class="prdname">상품명예시텍스트</span>
        <div class="priceandCA">
          <span>750,000원</span>
          <span>3년 전</span>
        </div>
        <div class="location">
          <img class="icon" src="./imgs/loca_icon.png" />
          <span>서울특별시 강남구 세곡동</span>
        </div>
      </div>
      <div class="prdimgbox">
        <img src="./imgs/sample.png" />
        <span class="prdname">상품명예시텍스트</span>
        <div class="priceandCA">
          <span>750,000원</span>
          <span>3년 전</span>
        </div>
        <div class="location">
          <img class="icon" src="./imgs/loca_icon.png" />
          <span>서울특별시 강남구 세곡동</span>
        </div>
      </div>
      <div class="prdimgbox">
        <img src="./imgs/sample.png" />
        <span class="prdname">상품명예시텍스트</span>
        <div class="priceandCA">
          <span>750,000원</span>
          <span>3년 전</span>
        </div>
        <div class="location">
          <img class="icon" src="./imgs/loca_icon.png" />
          <span>서울특별시 강남구 세곡동</span>
        </div>
      </div>
    </div>
  </dlv>
</div>`;
};

reviewBtn.onclick = () => {
  mypageElem.innerHTML = "";
  prdlistBtn.classList.remove("on");
  reviewBtn.classList.remove("on");
  favoriteBtn.classList.remove("on");
  followerBtn.classList.remove("on");
  followingBtn.classList.remove("on");
  reviewBtn.classList.add("on");
  mypageElem.innerHTML = `<div class="store_review">
  <div class="review_body_header">
    <span>상점후기<span>1</span></span>
  </div>

  <div class="reviewbox">
    <div class="review_score">
      <div>5</div>
      <div class="imgbox">
        <img src="./imgs/fulled_star.png" />
        <img src="./imgs/fulled_star.png" />
        <img src="./imgs/fulled_star.png" />
        <img src="./imgs/fulled_star.png" />
        <img src="./imgs/fulled_star.png" />
      </div>
    </div>
    <div class="satisfy_per">
      <h3>100%</h3>
      <span>만족후기</span>
    </div>
  </div>
  <div class="store_review_area">
    <div class="reviewer_profile">
      <img class="profile" src="./imgs/sample.png" />
      <div class="reviewer_info">
        <span>D.store</span>
        <div class="review_star">
          <img src="./imgs/fulled_star.png" />
          <img src="./imgs/fulled_star.png" />
          <img src="./imgs/fulled_star.png" />
          <img src="./imgs/fulled_star.png" />
          <img src="./imgs/fulled_star.png" />
        </div>
        <span class="reviewer_prdinfo"
          >상품 정보를 조회할 수 없습니다.
          <img src="./imgs/next.png" />
        </span>
        <div id="review_content">
          <span
            >상품 리뷰 내용을 여기 적습니다. 리뷰 텍스트 예시 상품
            리뷰 내용 더미 데이터 어쩌구 저쩌구 어저구 저쩌구상품
            리뷰 내용 더미 데이터 어쩌구 저쩌구 어저구 저쩌구상품
            리뷰 내용 더미 데이터 어쩌구 저쩌구 어저구 저쩌구
            review_content innerHTML 어쩌구저쩌구</span
          >
        </div>
        <div class="report_button"><a href="./"><button>신고하기</button></a></div>
      </div>
    </div>
  </div>
</div>`;
};

favoriteBtn.onclick = () => {
  prdlistBtn.classList.remove("on");
  reviewBtn.classList.remove("on");
  favoriteBtn.classList.remove("on");
  followerBtn.classList.remove("on");
  followingBtn.classList.remove("on");
  favoriteBtn.classList.add("on");
  mypageElem.innerHTML = "";
  mypageElem.innerHTML = `<div class="user_favorite_list">
  <div class="review_body_header">
    <span>상점후기<span>1</span></span>
  </div>
  <form>
    <div class="body_head">
      <div class="wholecheckbox">
        <input type="checkbox" />
        <button>선택삭제</button>
      </div>
      <div>
        <a class="on">최신순</a>
        <a>|</a>
        <a>인기순</a>
        <a>|</a>
        <a>저가순</a>
        <a>|</a>
        <a>고가순</a>
      </div>
    </div>
    <div class="fav_prd_body">
      <div class="favorite_prd">
        <div class="fav_prd_img">
          <img src="./imgs/profile_ex.webp" />
        </div>
        <div class="fav_prd_content">
          <p>
            예시상품명 피규어 전자제품 그외등등
            <input type="checkbox" />
          </p>
          <p>100,000원</p>
          <p>10시간 전</p>
          <p><img src="./imgs/loca_icon.png" />위치없음</p>
        </div>
      </div>
      <div class="favorite_prd">
        <div class="fav_prd_img">
          <img src="./imgs/profile_ex.webp" />
        </div>
        <div class="fav_prd_content">
          <p>
            예시상품명 피규어 전자제품 그외등등
            <input type="checkbox" />
          </p>
          <p>100,000원</p>
          <p>10시간 전</p>
          <p><img src="./imgs/loca_icon.png" />위치없음</p>
        </div>
      </div>
    </div>
  </form>
</div>`;
};

followingBtn.onclick = () => {
  prdlistBtn.classList.remove("on");
  reviewBtn.classList.remove("on");
  favoriteBtn.classList.remove("on");
  followerBtn.classList.remove("on");
  followingBtn.classList.remove("on");
  followingBtn.classList.add("on");
  mypageElem.innerHTML = "";
  mypageElem.innerHTML = `<div class="user_follower">
  <div class="review_body_header">
    <span>팔로잉<span>2</span></span>
  </div>
  <div class="follower_content">
    <div class="follower_infobox">
      <img class="roundpro" src="./imgs/sample.png" />
      <div class="name">감자김치만두</div>
      <div class="info">
        <span>상품<span class="bold">1</span></span>
        <span>|</span>
        <span>팔로워<span class="bold">16</span></span>
      </div>
      <button><a href=./><img src="./imgs/following_btn.png" />팔로잉</a></button>
    </div>
    <div>
      <img class="follower_prd" src="./imgs/sample.png" />
    </div>
  </div>
  <div class="follower_content">
    <div class="follower_infobox">
      <img class="roundpro" src="./imgs/sample.png" />
      <div class="name">감자김치만두</div>
      <div class="info">
        <span>상품<span class="bold">1</span></span>
        <span>|</span>
        <span>팔로워<span class="bold">16</span></span>
      </div>
      <button><a href=./><img src="./imgs/following_btn.png" />팔로잉</a></button>
    </div>
    <div>
      <img class="follower_prd" src="./imgs/sample.png" />
    </div>
  </div>
</div>`;
};

followerBtn.onclick = () => {
  prdlistBtn.classList.remove("on");
  reviewBtn.classList.remove("on");
  favoriteBtn.classList.remove("on");
  followerBtn.classList.remove("on");
  followingBtn.classList.remove("on");
  followerBtn.classList.add("on");
  mypageElem.innerHTML = "";
  mypageElem.innerHTML = `<div class="user_following">
  <div class="review_body_header">
    <span>팔로워<span>2</span></span>
  </div>
  <div class="followers_area">
    <div class="follower_box">
      <img class="follower_profile" src="./imgs/sample.png" />
      <div><span>스카치봉봉</span></div>
      <div class="star_score">
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
      </div>
      <div class="info">
        <span>상품<span class="bold">1</span></span>
        <span>|</span>
        <span>팔로워<span class="bold">16</span></span>
      </div>
      <div class="follow_btn">
        <button><img src="./imgs/follow_btn.png" /><a href="./">팔로우</a></button>
      </div>
    </div>
    <div class="follower_box">
      <img class="follower_profile" src="./imgs/sample.png" />
      <div><span>스카치봉봉</span></div>
      <div class="star_score">
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
      </div>
      <div class="info">
        <span>상품<span class="bold">1</span></span>
        <span>|</span>
        <span>팔로워<span class="bold">16</span></span>
      </div>
      <div class="follow_btn">
        <button><img src="./imgs/follow_btn.png" /><a href="./">팔로우</a></button>
      </div>
    </div>
    <div class="follower_box">
      <img class="follower_profile" src="./imgs/sample.png" />
      <div><span>스카치봉봉</span></div>
      <div class="star_score">
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
        <img src="./imgs/empty_star.png" />
      </div>
      <div class="info">
        <span>상품<span class="bold">1</span></span>
        <span>|</span>
        <span>팔로워<span class="bold">16</span></span>
      </div>
      <div class="follow_btn">
        <button><img src="./imgs/follow_btn.png" /><a href="./">팔로우</a></button>
      </div>
    </div>
  </div>
</div>`;
};
