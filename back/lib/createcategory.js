import {
  sequelize,
  Firstcategory,
  Secondcategory,
  Thirdcategory,
  User,
  Userstore,
} from "../models/index.js";

const category = async function () {
  const force = false;

  const firstcate = [
    { name: "여성의류" },
    { name: "남성의류" },
    { name: "신발" },
    { name: "가방/지갑" },
    { name: "시계" },
    { name: "쥬얼리" },
    { name: "패션 액세서리" },
    { name: "디지털" },
    { name: "가전제품" },
    { name: "스포츠/레저" },
    { name: "차량/오토바이" },
    { name: "스타굿즈" },
    { name: "키덜트" },
    { name: "예술/희귀/수집품" },
    { name: "음반/악기" },
    { name: "도서/티켓/문구" },
    { name: "뷰티/미용" },
    { name: "가구/인테리어" },
    { name: "생활/주방용품" },
    { name: "공구/산업용품" },
    { name: "식품" },
    { name: "유아동/출산" },
    { name: "반려동물용품" },
    { name: "기타" },
    { name: "지역 서비스" },
    { name: "구인구직" },
    { name: "재능" },
  ];
  const secondcate = [
    { name: "아우터", Firstcategory_id: 1 },
    { name: "상의", Firstcategory_id: 1 },
    { name: "바지", Firstcategory_id: 1 },
    { name: "치마", Firstcategory_id: 1 },
    { name: "원피스", Firstcategory_id: 1 },
    { name: "점프슈트", Firstcategory_id: 1 },
    { name: "셋업/세트", Firstcategory_id: 1 },
    { name: "언더웨어/홈웨어", Firstcategory_id: 1 },
    { name: "테마/이벤트", Firstcategory_id: 1 },
    //
    { name: "아우터", Firstcategory_id: 2 },
    { name: "상의", Firstcategory_id: 2 },
    { name: "바지", Firstcategory_id: 2 },
    { name: "점프슈트", Firstcategory_id: 2 },
    { name: "셋업/세트", Firstcategory_id: 2 },
    {
      name: "언더웨어/홈웨어",

      Firstcategory_id: 2,
    },
    { name: "테마/이벤트", Firstcategory_id: 2 },
    //
    { name: "스니커즈", Firstcategory_id: 3 },
    { name: "남성화", Firstcategory_id: 3 },
    { name: "여성화", Firstcategory_id: 3 },
    { name: "스포츠화", Firstcategory_id: 3 },
    //
    { name: "여성가방", Firstcategory_id: 4 },
    { name: "남성가방", Firstcategory_id: 4 },
    { name: "여행용 가방", Firstcategory_id: 4 },
    { name: "여성지갑", Firstcategory_id: 4 },
    { name: "남성지갑", Firstcategory_id: 4 },
    { name: "기타지갑", Firstcategory_id: 4 },
    //
    { name: "남성시계", Firstcategory_id: 5 },
    { name: "여성시계", Firstcategory_id: 5 },
    { name: "시계용품", Firstcategory_id: 5 },
    { name: "귀걸이/피어싱", Firstcategory_id: 6 },
    //
    { name: "목걸이/팬던트", Firstcategory_id: 6 },
    { name: "팔찌", Firstcategory_id: 6 },
    { name: "발찌", Firstcategory_id: 6 },
    { name: "반지", Firstcategory_id: 6 },
    { name: "쥬얼리 세트", Firstcategory_id: 6 },
    { name: "기타쥬얼리", Firstcategory_id: 6 },
    //
    { name: "모자", Firstcategory_id: 7 },
    { name: "안경/선글라스", Firstcategory_id: 7 },
    { name: "목도리/장갑", Firstcategory_id: 7 },
    { name: "스카프/넥타이", Firstcategory_id: 7 },
    { name: "벨트", Firstcategory_id: 7 },
    { name: "양말/스타킹", Firstcategory_id: 7 },
    { name: "우산/양산", Firstcategory_id: 7 },
    { name: "키링/키케이스", Firstcategory_id: 7 },
    { name: "기타 액세서리", Firstcategory_id: 7 },
    //
    { name: "휴대폰", Firstcategory_id: 8 },
    { name: "태블릿", Firstcategory_id: 8 },
    {
      name: "웨어러블(워치/밴드)",

      Firstcategory_id: 8,
    },
    {
      name: "오디오/영상/관련기기",

      Firstcategory_id: 8,
    },
    { name: "pc/노트북", Firstcategory_id: 8 },
    { name: "게임/타이틀", Firstcategory_id: 8 },
    { name: "카메라/DSLR", Firstcategory_id: 8 },
    {
      name: "PC부품/저장장치",

      Firstcategory_id: 8,
    },
    //
    { name: "생활가전", Firstcategory_id: 9 },
    { name: "주방가전", Firstcategory_id: 9 },
    { name: "미용가전", Firstcategory_id: 9 },
    { name: "냉장고", Firstcategory_id: 9 },
    { name: "에어컨", Firstcategory_id: 9 },
    { name: "세탁기/건조기", Firstcategory_id: 9 },
    { name: "TV", Firstcategory_id: 9 },
    {
      name: "사무기기(복사기/팩스 등)",

      Firstcategory_id: 9,
    },
    { name: "기타 가전제품", Firstcategory_id: 9 },
    //
    { name: "골프", Firstcategory_id: 10 },
    { name: "캠핑", Firstcategory_id: 10 },
    { name: "낚시", Firstcategory_id: 10 },
    { name: "축구", Firstcategory_id: 10 },
    { name: "야구", Firstcategory_id: 10 },
    { name: "농구", Firstcategory_id: 10 },
    { name: "자전거", Firstcategory_id: 10 },
    { name: "등산/클라이밍", Firstcategory_id: 10 },
    {
      name: "헬스/요가/필라테스",

      Firstcategory_id: 10,
    },
    {
      name: "인라인/스케이트보드",

      Firstcategory_id: 10,
    },
    {
      name: "전동킥보드/전동휠",

      Firstcategory_id: 10,
    },
    { name: "테니스", Firstcategory_id: 10 },
    { name: "배드민턴", Firstcategory_id: 10 },
    { name: "볼링", Firstcategory_id: 10 },
    { name: "탁구", Firstcategory_id: 10 },
    { name: "당구", Firstcategory_id: 10 },
    { name: "겨울스포츠", Firstcategory_id: 10 },
    { name: "수상스포츠", Firstcategory_id: 10 },
    { name: "격투/무술", Firstcategory_id: 10 },
    { name: "기타스포츠", Firstcategory_id: 10 },
    //
    { name: "국산차", Firstcategory_id: 11 },
    { name: "수입차", Firstcategory_id: 11 },
    { name: "차량용품/부품", Firstcategory_id: 11 },
    {
      name: "오토바이/스쿠터",

      Firstcategory_id: 11,
    },
    {
      name: "오토바이 용품/부품",

      Firstcategory_id: 11,
    },
    {
      name: "산업용 차량/장비",

      Firstcategory_id: 11,
    },
    //
    { name: "보이그룹", Firstcategory_id: 12 },
    { name: "걸그룹", Firstcategory_id: 12 },
    { name: "솔로(남)", Firstcategory_id: 12 },
    { name: "솔로(여)", Firstcategory_id: 12 },
    { name: "배우(남)", Firstcategory_id: 12 },
    { name: "배우(여)", Firstcategory_id: 12 },
    {
      name: "방송/예능/캐릭터",

      Firstcategory_id: 12,
    },
    //
    { name: "피규어/인형", Firstcategory_id: 13 },
    { name: "레고/블럭", Firstcategory_id: 13 },
    { name: "프라모델", Firstcategory_id: 13 },
    { name: "RC/드론", Firstcategory_id: 13 },
    { name: "보드게임", Firstcategory_id: 13 },
    { name: "서바이벌건", Firstcategory_id: 13 },
    { name: "기타(키덜트)", Firstcategory_id: 13 },
    //
    { name: "희귀/수집품", Firstcategory_id: 14 },
    { name: "골동품", Firstcategory_id: 14 },
    { name: "예술작품", Firstcategory_id: 14 },
    //
    { name: "CD/DVD/LP", Firstcategory_id: 15 },
    { name: "악기", Firstcategory_id: 15 },
    //
    { name: "도서", Firstcategory_id: 16 },
    { name: "문구", Firstcategory_id: 16 },
    {
      name: "기프티콘/쿠폰",

      Firstcategory_id: 16,
    },
    { name: "상품권", Firstcategory_id: 16 },
    { name: "티켓", Firstcategory_id: 16 },
    //
    { name: "스킨케어", Firstcategory_id: 17 },
    { name: "색조메이크업", Firstcategory_id: 17 },
    {
      name: "베이스메이크업",

      Firstcategory_id: 17,
    },
    {
      name: "바디/헤어케어",

      Firstcategory_id: 17,
    },
    { name: "향수/아로마", Firstcategory_id: 17 },
    {
      name: "네일아트/케어",

      Firstcategory_id: 17,
    },
    {
      name: "미용소품/기기",

      Firstcategory_id: 17,
    },
    {
      name: "다이어트/이너뷰티",

      Firstcategory_id: 17,
    },
    { name: "남성 화장품", Firstcategory_id: 17 },
    //
    { name: "가구", Firstcategory_id: 18 },
    { name: "침구", Firstcategory_id: 18 },
    { name: "수공예/수선", Firstcategory_id: 18 },
    {
      name: "셀프 인테리어 물품",

      Firstcategory_id: 18,
    },
    {
      name: "인테리어 소품",

      Firstcategory_id: 18,
    },
    { name: "꽃/원예", Firstcategory_id: 18 },
    { name: "조명", Firstcategory_id: 18 },
    {
      name: "카페트/러그/매트",

      Firstcategory_id: 18,
    },
    {
      name: "커튼/블라인드",

      Firstcategory_id: 18,
    },
    //
    { name: "주방용품", Firstcategory_id: 19 },
    { name: "욕실용품", Firstcategory_id: 19 },
    { name: "생활용품", Firstcategory_id: 19 },
    //
    {
      name: "드릴/전동공구",

      Firstcategory_id: 20,
    },
    {
      name: "수공구/가정용 공구",

      Firstcategory_id: 20,
    },
    { name: "공구함", Firstcategory_id: 20 },
    {
      name: "산업용품/자재",

      Firstcategory_id: 20,
    },
    {
      name: "측정/계측/레벨",

      Firstcategory_id: 20,
    },
    {
      name: "공장기계/용접/가스",

      Firstcategory_id: 20,
    },
    {
      name: "에어 유압공구",

      Firstcategory_id: 20,
    },
    { name: "기타산업용품", Firstcategory_id: 20 },
    //
    { name: "건강식품", Firstcategory_id: 21 },
    {
      name: "건강기능식품(식약처 시범사업)",

      Firstcategory_id: 21,
    },
    { name: "농수축산물", Firstcategory_id: 21 },
    { name: "간식", Firstcategory_id: 21 },
    { name: "커피/차", Firstcategory_id: 21 },
    { name: "생수/음료", Firstcategory_id: 21 },
    { name: "면/통조림", Firstcategory_id: 21 },
    { name: "장/소스/오일", Firstcategory_id: 21 },
    { name: "간편조리식품", Firstcategory_id: 21 },
    { name: "기타 식품", Firstcategory_id: 21 },
    //
    {
      name: "베이비의류(0-2세)",

      Firstcategory_id: 22,
    },
    {
      name: "여아의류(3-6세)",

      Firstcategory_id: 22,
    },
    {
      name: "남아의류(3-6세)",

      Firstcategory_id: 22,
    },
    {
      name: "여주니어의류(7세~)",

      Firstcategory_id: 22,
    },
    {
      name: "남주니어의류(7세~)",

      Firstcategory_id: 22,
    },
    {
      name: "신발/가방/잡화",

      Firstcategory_id: 22,
    },
    { name: "유아동용품", Firstcategory_id: 22 },
    {
      name: "임부 의류/용품",

      Firstcategory_id: 22,
    },
    {
      name: "교구/완구/인형",

      Firstcategory_id: 22,
    },
    {
      name: "수유/이유용품",

      Firstcategory_id: 22,
    },
    //
    { name: "강아지 용품", Firstcategory_id: 23 },
    {
      name: "강아지 사료/간식",

      Firstcategory_id: 23,
    },
    { name: "기타(강아지)", Firstcategory_id: 23 },
    { name: "고양이 용품", Firstcategory_id: 23 },
    {
      name: "고양이 사료/간식",

      Firstcategory_id: 23,
    },
    { name: "기타(고양이)", Firstcategory_id: 23 },
    {
      name: "기타(반려동물 용품)",

      Firstcategory_id: 23,
    },
    {
      name: "기타(반려동물 사료/간식)",

      Firstcategory_id: 23,
    },
    //
    { name: "이사/용달", Firstcategory_id: 25 },
    {
      name: "인테리어/간판",

      Firstcategory_id: 25,
    },
    {
      name: "청소/세탁/철거",

      Firstcategory_id: 25,
    },
    { name: "학원/수강", Firstcategory_id: 25 },
    { name: "네일/미용", Firstcategory_id: 25 },
    { name: "헬스/요가", Firstcategory_id: 25 },
    {
      name: "호텔/펜션/숙박",

      Firstcategory_id: 25,
    },
    { name: "차량/수리", Firstcategory_id: 25 },
    { name: "금융/채무", Firstcategory_id: 25 },
    { name: "결혼/행사", Firstcategory_id: 25 },
    { name: "병원/약국", Firstcategory_id: 25 },
    { name: "기타", Firstcategory_id: 25 },
    //
    { name: "재택알바", Firstcategory_id: 26 },
    { name: "알바찾아요", Firstcategory_id: 26 },
    { name: "강사/교육", Firstcategory_id: 26 },
    {
      name: "서비스/미디어",

      Firstcategory_id: 26,
    },
    { name: "IT/디자인", Firstcategory_id: 26 },
    { name: "생산/기능직", Firstcategory_id: 26 },
    { name: "상담영업", Firstcategory_id: 26 },
    { name: "매장관리", Firstcategory_id: 26 },
    { name: "사무/회계", Firstcategory_id: 26 },
    { name: "서빙/주방", Firstcategory_id: 26 },
    //
    {
      name: "디자인/영상/사진",

      Firstcategory_id: 27,
    },
    {
      name: "생활서비스/지식",

      Firstcategory_id: 27,
    },
    { name: "스타일/뷰티", Firstcategory_id: 27 },
    {
      name: "블로그/문서/번역",

      Firstcategory_id: 27,
    },
    { name: "거래대행", Firstcategory_id: 27 },
    {
      name: "재능인 찾아요",

      Firstcategory_id: 27,
    },
    { name: "기타재능", Firstcategory_id: 27 },
  ];

  const Thirdcate = [
    { name: "패딩", Secondcategory_id: 1 },
    { name: "점퍼", Secondcategory_id: 1 },
    { name: "코트", Secondcategory_id: 1 },
    { name: "자켓", Secondcategory_id: 1 },
    { name: "가디건", Secondcategory_id: 1 },
    { name: "조끼/베스트", Secondcategory_id: 1 },
    { name: "니트/스웨터", Secondcategory_id: 2 },
    { name: "후드티/후드집업", Secondcategory_id: 2 },
    { name: "맨투맨", Secondcategory_id: 2 },
    { name: "블라우스", Secondcategory_id: 2 },
    { name: "셔츠", Secondcategory_id: 2 },
    { name: "반팔 티셔츠", Secondcategory_id: 2 },
    { name: "긴팔 티셔츠", Secondcategory_id: 2 },
    { name: "민소매 티셔츠", Secondcategory_id: 2 },
    { name: "데님/청바지", Secondcategory_id: 3 },
    { name: "슬랙스", Secondcategory_id: 3 },
    { name: "면바지", Secondcategory_id: 3 },
    { name: "반바지", Secondcategory_id: 3 },
    {
      name: "트레이닝/조거팬츠",
      Secondcategory_id: 3,
    },
    { name: "레깅스", Secondcategory_id: 3 },
    { name: "기타 바지", Secondcategory_id: 3 },
    { name: "롱 스커트", Secondcategory_id: 4 },
    { name: "미디 스커트", Secondcategory_id: 4 },
    { name: "미니 스커트", Secondcategory_id: 4 },
    { name: "롱 원피스", Secondcategory_id: 5 },
    { name: "미디 원피스", Secondcategory_id: 5 },
    { name: "미니 원피스", Secondcategory_id: 5 },
    { name: "정장/셋업", Secondcategory_id: 7 },
    {
      name: "트레이닝/스웨트 셋업",

      Secondcategory_id: 7,
    },
    { name: "기타 셋업 세트", Secondcategory_id: 7 },
    { name: "홈웨어", Secondcategory_id: 8 },
    { name: "언더웨어", Secondcategory_id: 8 },
    {
      name: "코스튬/코스프레",

      Secondcategory_id: 9,
    },
    { name: "한복", Secondcategory_id: 9 },
    { name: "드레스", Secondcategory_id: 9 },
    {
      name: "기타 테마/이벤트",

      Secondcategory_id: 9,
    },
    //
    { name: "패딩", Secondcategory_id: 10 },
    { name: "점퍼", Secondcategory_id: 10 },
    { name: "코트", Secondcategory_id: 10 },
    { name: "자켓", Secondcategory_id: 10 },
    { name: "가디건", Secondcategory_id: 10 },
    { name: "조끼/베스트", Secondcategory_id: 10 },
    //
    {
      name: "후드티/후드집업",

      Secondcategory_id: 11,
    },
    { name: "맨투맨", Secondcategory_id: 11 },
    { name: "니트/스웨터", Secondcategory_id: 11 },
    { name: "셔츠", Secondcategory_id: 11 },
    { name: "반팔 티셔츠", Secondcategory_id: 11 },
    { name: "긴팔 티셔츠", Secondcategory_id: 11 },
    { name: "민소매 티셔츠", Secondcategory_id: 11 },
    //
    { name: "데님/청바지", Secondcategory_id: 12 },
    { name: "면바지", Secondcategory_id: 12 },
    { name: "슬랙스", Secondcategory_id: 12 },
    { name: "트레이닝/조거팬츠", Secondcategory_id: 12 },
    { name: "반바지", Secondcategory_id: 12 },
    { name: "기타바지", Secondcategory_id: 12 },
    //
    { name: "정장/셋업", Secondcategory_id: 14 },
    { name: "트레이닝/스웨트 셋업", Secondcategory_id: 14 },
    { name: "기타 셋업/세트", Secondcategory_id: 14 },
    //
    { name: "언더웨어", Secondcategory_id: 15 },
    { name: "홈웨어", Secondcategory_id: 15 },
    //
    { name: "코스튬/코스프레", Secondcategory_id: 16 },
    { name: "한복", Secondcategory_id: 16 },
    { name: "기타 테마/이벤트", Secondcategory_id: 16 },
    //
    { name: "샌들/슬리퍼", Secondcategory_id: 18 },
    { name: "구두/로퍼", Secondcategory_id: 18 },
    { name: "워커/부츠", Secondcategory_id: 18 },
    { name: "기타 남성화", Secondcategory_id: 18 },
    //
    { name: "샌들/슬리퍼", Secondcategory_id: 19 },
    { name: "구두", Secondcategory_id: 19 },
    { name: "단화/플랫슈즈", Secondcategory_id: 19 },
    { name: "워커/부츠", Secondcategory_id: 19 },
    { name: "기타여성화", Secondcategory_id: 19 },
    //
    { name: "농구화", Secondcategory_id: 20 },
    { name: "골프화", Secondcategory_id: 20 },
    { name: "축구/풋살화", Secondcategory_id: 20 },
    { name: "테니스화", Secondcategory_id: 20 },
    { name: "등산화/트레킹화", Secondcategory_id: 20 },
    { name: "야구화", Secondcategory_id: 20 },
    { name: "기타 스포츠화", Secondcategory_id: 20 },
    //
    { name: "클러치백", Secondcategory_id: 21 },
    { name: "숄더백", Secondcategory_id: 21 },
    { name: "크로스백", Secondcategory_id: 21 },
    { name: "토트벡", Secondcategory_id: 21 },
    { name: "백팩", Secondcategory_id: 21 },
    { name: "기타 여성가방", Secondcategory_id: 21 },
    //
    { name: "클러치", Secondcategory_id: 22 },
    { name: "숄더백", Secondcategory_id: 22 },
    { name: "크로스백", Secondcategory_id: 22 },
    { name: "브러프케이스", Secondcategory_id: 22 },
    { name: "백팩", Secondcategory_id: 22 },
    { name: "기타 남성가방", Secondcategory_id: 22 },
    //
    { name: "캐리어", Secondcategory_id: 23 },
    { name: "기타 여행용 가방", Secondcategory_id: 23 },
    //
    { name: "프리미엄 시계(쿼츠)", Secondcategory_id: 27 },
    { name: "프리미엄 시계(오토매틱)", Secondcategory_id: 27 },
    { name: "일반 시계 시계(디지털)", Secondcategory_id: 27 },
    { name: "일반 시계(메탈 밴드)", Secondcategory_id: 27 },
    { name: "일반 시계(가죽 밴드)", Secondcategory_id: 27 },
    { name: "일반 시계(기타 밴ㄷ)", Secondcategory_id: 27 },
    //
    { name: "프리미엄 시계(쿼츠)", Secondcategory_id: 28 },
    { name: "프리미엄 시계(오토매틱)", Secondcategory_id: 28 },
    { name: "일반 시계 시계(디지털)", Secondcategory_id: 28 },
    { name: "일반 시계(메탈 밴드)", Secondcategory_id: 28 },
    { name: "일반 시계(가죽 밴드)", Secondcategory_id: 28 },
    { name: "일반 시계(기타 밴ㄷ)", Secondcategory_id: 28 },
    //
    { name: "스트랩", Secondcategory_id: 29 },
    { name: "기타 시계용품", Secondcategory_id: 29 },
    //
    { name: "다이아몬드 귀걸이", Secondcategory_id: 30 },
    { name: "금 귀걸이", Secondcategory_id: 30 },
    { name: "은 귀걸이", Secondcategory_id: 30 },
    { name: "진주/유색보석 귀걸이", Secondcategory_id: 30 },
    { name: "패션 귀걸이", Secondcategory_id: 30 },
    { name: "피어싱", Secondcategory_id: 30 },
    { name: "귀찌/이어커프", Secondcategory_id: 30 },
    //
    { name: "다이아몬드 목걸이", Secondcategory_id: 31 },
    { name: "금 목걸이", Secondcategory_id: 31 },
    { name: "은 목걸이", Secondcategory_id: 31 },
    { name: "진주/유색보석 목걸이", Secondcategory_id: 31 },
    { name: "패션 목걸이", Secondcategory_id: 31 },
    { name: "초커", Secondcategory_id: 31 },
    //
    { name: "금팔찌", Secondcategory_id: 32 },
    { name: "은팔찌", Secondcategory_id: 32 },
    { name: "패션팔찌", Secondcategory_id: 32 },
    //
    { name: "금발찌", Secondcategory_id: 33 },
    { name: "패션발찌", Secondcategory_id: 33 },
    //
    { name: "다이아몬드 반지", Secondcategory_id: 34 },
    { name: "금반지", Secondcategory_id: 34 },
    { name: "은반지", Secondcategory_id: 34 },
    { name: "진주/유색보석 반지", Secondcategory_id: 34 },
    { name: "패션반지", Secondcategory_id: 34 },
    //
    { name: "귀금속 쥬얼리 세트", Secondcategory_id: 35 },
    { name: "패션 쥬얼리 세트", Secondcategory_id: 35 },
    //
    { name: "볼캡", Secondcategory_id: 37 },
    { name: "버킷", Secondcategory_id: 37 },
    { name: "스냅백", Secondcategory_id: 37 },
    { name: "비니", Secondcategory_id: 37 },
    { name: "기타(모자)", Secondcategory_id: 37 },
    //
    { name: "선글라스", Secondcategory_id: 38 },
    { name: "안경", Secondcategory_id: 38 },
    //
    { name: "목도리", Secondcategory_id: 39 },
    { name: "장갑", Secondcategory_id: 39 },
    //
    { name: "스카프", Secondcategory_id: 40 },
    { name: "넥타이", Secondcategory_id: 40 },
    //
    { name: "남성 벨트", Secondcategory_id: 41 },
    { name: "여성 벨트", Secondcategory_id: 41 },
    //
    { name: "양말", Secondcategory_id: 42 },
    { name: "스타킹", Secondcategory_id: 42 },
    //
    { name: "스마트폰", Secondcategory_id: 46 },
    { name: "일반폰(피쳐폰)", Secondcategory_id: 46 },
    { name: "케이스/보호필름/액세서리", Secondcategory_id: 46 },
    { name: "케이블/충전기/주변기기", Secondcategory_id: 46 },
    { name: "기타 휴대폰", Secondcategory_id: 46 },
    //
    { name: "태블릿", Secondcategory_id: 47 },
    { name: "케이스/보호필름/액세서리", Secondcategory_id: 47 },
    { name: "케이블/충전기/주변기기", Secondcategory_id: 47 },
    //
    { name: "스마트워치/밴드", Secondcategory_id: 48 },
    { name: "케이스/보호필름/액세서리", Secondcategory_id: 48 },
    { name: "케이블/충전기/주변기기", Secondcategory_id: 48 },
    //
    { name: "이어폰", Secondcategory_id: 49 },
    { name: "헤드폰", Secondcategory_id: 49 },
    { name: "스피커/앰프", Secondcategory_id: 49 },
    { name: "MP3/PMP", Secondcategory_id: 49 },
    { name: "비디오/프로젝터", Secondcategory_id: 49 },
    { name: "오디오/홈시어터", Secondcategory_id: 49 },
    { name: "기타 오디오/영상/관련기기", Secondcategory_id: 49 },
    //
    { name: "데스크탑", Secondcategory_id: 50 },
    { name: "노트북/넷북", Secondcategory_id: 50 },
    { name: "모니터", Secondcategory_id: 50 },
    { name: "키보드", Secondcategory_id: 50 },
    { name: "마우스", Secondcategory_id: 50 },
    { name: "기타 PC 주변기기", Secondcategory_id: 50 },
    { name: "노트북 가방/액세서리", Secondcategory_id: 50 },
    { name: "기타 PC/노트북", Secondcategory_id: 50 },
    //
    { name: "닌텐도/NDS/Wii", Secondcategory_id: 51 },
    { name: "소니/플레이스테이션", Secondcategory_id: 51 },
    { name: "XBOX", Secondcategory_id: 51 },
    { name: "PC게임", Secondcategory_id: 51 },
    { name: "기타 게임/타이틀", Secondcategory_id: 51 },
    //
    { name: "필름카메라/중형카메라", Secondcategory_id: 52 },
    { name: "DSLR/미러리스", Secondcategory_id: 52 },
    { name: "렌즈/필터/컨버터", Secondcategory_id: 52 },
    { name: "일반디카/토이카메라", Secondcategory_id: 52 },
    { name: "삼각대/플래시/조명", Secondcategory_id: 52 },
    { name: "디지털 캠코더", Secondcategory_id: 52 },
    { name: "메모리/배터리/가방", Secondcategory_id: 52 },
    { name: "기타 카메라", Secondcategory_id: 52 },
    //
    { name: "CPU/메인보드", Secondcategory_id: 53 },
    { name: "HDD/ODD/SSD", Secondcategory_id: 53 },
    { name: "USB/케이블/스피커", Secondcategory_id: 53 },
    { name: "복합기/프린터", Secondcategory_id: 53 },
    { name: "네트워크 장비", Secondcategory_id: 53 },
    { name: "쿨러/파워서플라이", Secondcategory_id: 53 },
    { name: "메모리/VGA", Secondcategory_id: 53 },
    { name: "소모품", Secondcategory_id: 53 },
    //
    { name: "마사지기", Secondcategory_id: 54 },
    { name: "청소기", Secondcategory_id: 54 },
    { name: "공기청정기", Secondcategory_id: 54 },
    { name: "가습기", Secondcategory_id: 54 },
    { name: "제습기", Secondcategory_id: 54 },
    { name: "선풍기/냉풍기", Secondcategory_id: 54 },
    { name: "히터/온풍기", Secondcategory_id: 54 },
    { name: "전기매트/장판", Secondcategory_id: 54 },
    { name: "다리미", Secondcategory_id: 54 },
    { name: "미싱/재봉틀", Secondcategory_id: 54 },
    //
    { name: "인덕션/전기레인지", Secondcategory_id: 55 },
    { name: "전기밥솥", Secondcategory_id: 55 },
    { name: "커피머신", Secondcategory_id: 55 },
    { name: "에어프라이어", Secondcategory_id: 55 },
    { name: "믹서기/블렌더", Secondcategory_id: 55 },
    { name: "식기세척기", Secondcategory_id: 55 },
    { name: "정수기", Secondcategory_id: 55 },
    { name: "오븐", Secondcategory_id: 55 },
    { name: "전기포트", Secondcategory_id: 55 },
    { name: "토스터", Secondcategory_id: 55 },
    { name: "전자레인지", Secondcategory_id: 55 },
    { name: "음식물처리기", Secondcategory_id: 55 },
    //
    { name: "피부케어기기", Secondcategory_id: 56 },
    { name: "고데기", Secondcategory_id: 56 },
    { name: "드라이기", Secondcategory_id: 56 },
    { name: "면도기/이발기", Secondcategory_id: 56 },
    { name: "제모기", Secondcategory_id: 56 },
    //
    { name: "골프 채", Secondcategory_id: 63 },
    { name: "골프 남성 의류", Secondcategory_id: 63 },
    { name: "골프 여성 읠", Secondcategory_id: 63 },
    { name: "골프백", Secondcategory_id: 63 },
    { name: "골프공", Secondcategory_id: 63 },
    { name: "골프 커버", Secondcategory_id: 63 },
    { name: "기타 골프 용품", Secondcategory_id: 63 },
    //
    { name: "캠핑 의자/테이블", Secondcategory_id: 64 },
    { name: "캠핑 취사용품", Secondcategory_id: 64 },
    { name: "캠핑 랜턴", Secondcategory_id: 64 },
    { name: "침낭/매트/해먹", Secondcategory_id: 64 },
    { name: "텐트/그늘막", Secondcategory_id: 64 },
    { name: "기타 캠핑 용품", Secondcategory_id: 64 },
    //
    { name: "공통 낚시 장비", Secondcategory_id: 65 },
    { name: "바다 낚시", Secondcategory_id: 65 },
    { name: "민물 낚시", Secondcategory_id: 65 },
    { name: "루어/플라이 낚시", Secondcategory_id: 65 },
    { name: "낚시 의류 및 기타 용품", Secondcategory_id: 65 },
    //
    { name: "축구 의류/잡화", Secondcategory_id: 66 },
    { name: "축구 용품", Secondcategory_id: 66 },
    { name: "굿즈(카드/사인볼 등)", Secondcategory_id: 66 },
    //
    { name: "야구 의류/잡화", Secondcategory_id: 67 },
    { name: "야구 용품", Secondcategory_id: 67 },
    { name: "글러브", Secondcategory_id: 67 },
    { name: "굿즈(카드/사인볼 등)", Secondcategory_id: 67 },
    //
    { name: "농구 의류/잡화", Secondcategory_id: 68 },
    { name: "농구 용품", Secondcategory_id: 68 },
    { name: "굿즈(카드/사인볼 등)", Secondcategory_id: 68 },
    //
    { name: "자전거 의류 및 액세서리", Secondcategory_id: 69 },
    { name: "자전거 부품", Secondcategory_id: 69 },
    { name: "클래식/픽시", Secondcategory_id: 69 },
    { name: "로드/BMX", Secondcategory_id: 69 },
    { name: "MTB/산악", Secondcategory_id: 69 },
    { name: "전동/하이브리드", Secondcategory_id: 69 },
    { name: "미니벨로/접이식", Secondcategory_id: 69 },
    { name: "기타 자전거", Secondcategory_id: 69 },
    //
    { name: "남성 등산복", Secondcategory_id: 70 },
    { name: "여성 등산복", Secondcategory_id: 70 },
    { name: "등산 가방", Secondcategory_id: 70 },
    { name: "암벽/클라이밍", Secondcategory_id: 70 },
    { name: "기타 등산 용품", Secondcategory_id: 70 },
    //
    { name: "헬스/요가/필라테스 장비", Secondcategory_id: 71 },
    { name: "헬스/요가/필라테스 의류", Secondcategory_id: 71 },
    { name: "기타용품", Secondcategory_id: 71 },
    //
    { name: "스키/보드 의류 및 잡화", Secondcategory_id: 79 },
    { name: "스노우 보드 장비", Secondcategory_id: 79 },
    { name: "스키 장비", Secondcategory_id: 79 },
    { name: "기타 겨울 스포츠", Secondcategory_id: 79 },
    //
    { name: "남성 수영복/래쉬가드", Secondcategory_id: 80 },
    { name: "여성 수영복/래쉬가드", Secondcategory_id: 80 },
    { name: "수영/물놀이 용품", Secondcategory_id: 80 },
    { name: "서핑", Secondcategory_id: 80 },
    { name: "기타 수상 스포츠", Secondcategory_id: 80 },
    //
    { name: "복싱", Secondcategory_id: 81 },
    { name: "주짓수", Secondcategory_id: 81 },
    { name: "기타 격투/무술", Secondcategory_id: 81 },
    //
    { name: "경차/소형차", Secondcategory_id: 83 },
    { name: "준/중형치", Secondcategory_id: 83 },
    { name: "준/대형차", Secondcategory_id: 83 },
    { name: "SRV/RV", Secondcategory_id: 83 },
    { name: "밴/승합차", Secondcategory_id: 83 },
    { name: "버스/화물차", Secondcategory_id: 83 },
    { name: "스포츠카", Secondcategory_id: 83 },
    { name: "기타(국산차)", Secondcategory_id: 83 },
    //
    { name: "경차/소형차", Secondcategory_id: 84 },
    { name: "준/중형치", Secondcategory_id: 84 },
    { name: "준/대형차", Secondcategory_id: 84 },
    { name: "SRV/RV", Secondcategory_id: 84 },
    { name: "밴/승합차", Secondcategory_id: 84 },
    { name: "버스/화물차", Secondcategory_id: 84 },
    { name: "스포츠카", Secondcategory_id: 84 },
    { name: "기타(수입차)", Secondcategory_id: 84 },
    //
    { name: "타이어/휠", Secondcategory_id: 85 },
    { name: "차량 부품", Secondcategory_id: 85 },
    { name: "차량/튜닝 용품", Secondcategory_id: 85 },
    { name: "네이게이션/블랙박스", Secondcategory_id: 85 },
    { name: "카오디오/영상", Secondcategory_id: 85 },
    //
    { name: "오토바이(125cc 이하)", Secondcategory_id: 86 },
    { name: "오토바이(125cc 초과)", Secondcategory_id: 86 },
    //
    { name: "라이더 용품", Secondcategory_id: 87 },
    { name: "오토바이 용품", Secondcategory_id: 87 },
    { name: "오토바이/튜닝 용품", Secondcategory_id: 87 },
    { name: "기타(오토바이 용품/부품)", Secondcategory_id: 87 },
    //
    { name: "굴삭기/지게차", Secondcategory_id: 88 },
    { name: "농기계/경운기", Secondcategory_id: 88 },
    //
    { name: "음반/영상물", Secondcategory_id: 89 },
    { name: "팬시/포토카드", Secondcategory_id: 89 },
    { name: "포스터 화보", Secondcategory_id: 89 },
    { name: "인형/피규어", Secondcategory_id: 89 },
    { name: "응원도구", Secondcategory_id: 89 },
    { name: "의류/패션잡화", Secondcategory_id: 89 },
    { name: "기타(보이그룹)", Secondcategory_id: 89 },
    //
    { name: "음반/영상물", Secondcategory_id: 90 },
    { name: "팬시/포토카드", Secondcategory_id: 90 },
    { name: "포스터 화보", Secondcategory_id: 90 },
    { name: "인형/피규어", Secondcategory_id: 90 },
    { name: "응원도구", Secondcategory_id: 90 },
    { name: "의류/패션잡화", Secondcategory_id: 90 },
    { name: "걸그룹)", Secondcategory_id: 90 },
    //
    { name: "음반/영상물", Secondcategory_id: 91 },
    { name: "팬시/포토카드", Secondcategory_id: 91 },
    { name: "포스터 화보", Secondcategory_id: 91 },
    { name: "인형/피규어", Secondcategory_id: 91 },
    { name: "응원도구", Secondcategory_id: 91 },
    { name: "의류/패션잡화", Secondcategory_id: 91 },
    { name: "기타(솔로-남)", Secondcategory_id: 91 },
    //
    { name: "음반/영상물", Secondcategory_id: 92 },
    { name: "팬시/포토카드", Secondcategory_id: 92 },
    { name: "포스터 화보", Secondcategory_id: 92 },
    { name: "인형/피규어", Secondcategory_id: 92 },
    { name: "응원도구", Secondcategory_id: 92 },
    { name: "의류/패션잡화", Secondcategory_id: 92 },
    { name: "기타(솔로-여)", Secondcategory_id: 92 },
    //
    { name: "음반/영상물", Secondcategory_id: 93 },
    { name: "팬시/포토카드", Secondcategory_id: 93 },
    { name: "포스터 화보", Secondcategory_id: 93 },
    { name: "인형/피규어", Secondcategory_id: 93 },
    { name: "응원도구", Secondcategory_id: 93 },
    { name: "의류/패션잡화", Secondcategory_id: 93 },
    { name: "기타(배우-남)", Secondcategory_id: 93 },
    //
    { name: "음반/영상물", Secondcategory_id: 94 },
    { name: "팬시/포토카드", Secondcategory_id: 94 },
    { name: "포스터 화보", Secondcategory_id: 94 },
    { name: "인형/피규어", Secondcategory_id: 94 },
    { name: "응원도구", Secondcategory_id: 94 },
    { name: "의류/패션잡화", Secondcategory_id: 94 },
    { name: "기타(배우-여)", Secondcategory_id: 94 },
    //
    { name: "음반/영상물", Secondcategory_id: 95 },
    { name: "팬시/포토카드", Secondcategory_id: 95 },
    { name: "포스터 화보", Secondcategory_id: 95 },
    { name: "인형/피규어", Secondcategory_id: 95 },
    { name: "응원도구", Secondcategory_id: 95 },
    { name: "의류/패션잡화", Secondcategory_id: 95 },
    { name: "기타(보이그룹)", Secondcategory_id: 95 },
    //
    { name: "관악기", Secondcategory_id: 107 },
    { name: "현악기", Secondcategory_id: 107 },
    { name: "타악기", Secondcategory_id: 107 },
    { name: "건반악기", Secondcategory_id: 107 },
    { name: "전자악기", Secondcategory_id: 107 },
    { name: "악기 용품", Secondcategory_id: 107 },
    { name: "기타(음반/악기)", Secondcategory_id: 107 },
    //
    { name: "시/소설", Secondcategory_id: 108 },
    { name: "자기계발", Secondcategory_id: 108 },
    { name: "교양/인문", Secondcategory_id: 108 },
    { name: "경제/경영", Secondcategory_id: 108 },
    { name: "학습/사전/참고서", Secondcategory_id: 108 },
    { name: "아동/어린이", Secondcategory_id: 108 },
    { name: "만화", Secondcategory_id: 108 },
    { name: "예술/디자인", Secondcategory_id: 108 },
    { name: "여행/취미/레저/건강", Secondcategory_id: 108 },
    { name: "사회/정치/법", Secondcategory_id: 108 },
    { name: "과학/IT", Secondcategory_id: 108 },
    { name: "간행물", Secondcategory_id: 108 },
    { name: "기타(도서)", Secondcategory_id: 108 },
    //
    { name: "학습도구/문구/필기류", Secondcategory_id: 109 },
    { name: "미술/화방용품", Secondcategory_id: 109 },
    //
    { name: "치킨/피자/햄버거", Secondcategory_id: 110 },
    { name: "베이커리/도넛/아이스크림", Secondcategory_id: 110 },
    { name: "커피(음료)", Secondcategory_id: 110 },
    { name: "편의점", Secondcategory_id: 110 },
    { name: "기타(기프티콘/쿠폰)", Secondcategory_id: 110 },
    //
    { name: "문화/도서", Secondcategory_id: 111 },
    { name: "백화점", Secondcategory_id: 111 },
    { name: "외식", Secondcategory_id: 111 },
    { name: "기타", Secondcategory_id: 111 },
    //
    { name: "뮤지컬/연극", Secondcategory_id: 112 },
    { name: "콘서트", Secondcategory_id: 112 },
    { name: "영화(예매/관람권)", Secondcategory_id: 112 },
    { name: "여행/숙박/렌트", Secondcategory_id: 112 },
    { name: "테마파크", Secondcategory_id: 112 },
    { name: "스포츠/레저", Secondcategory_id: 112 },
    { name: "공연/전시/행사", Secondcategory_id: 112 },
    { name: "기타(티켓)", Secondcategory_id: 112 },
    //
    { name: "클렌징/스크럽", Secondcategory_id: 113 },
    { name: "스킨/토너/미스트", Secondcategory_id: 113 },
    { name: "로션/에멀젼", Secondcategory_id: 113 },
    { name: "에센스/크림", Secondcategory_id: 113 },
    { name: "팩/마스크", Secondcategory_id: 113 },
    { name: "썬케어", Secondcategory_id: 113 },
    { name: "기타(스킨케어)", Secondcategory_id: 113 },
    //
    { name: "아이라이너/브로우", Secondcategory_id: 114 },
    { name: "아이섀도우", Secondcategory_id: 114 },
    { name: "마스카라", Secondcategory_id: 114 },
    { name: "립틴트", Secondcategory_id: 114 },
    { name: "립밤/립글로즈", Secondcategory_id: 114 },
    { name: "립스틱", Secondcategory_id: 114 },
    { name: "치크/블러셔", Secondcategory_id: 114 },
    { name: "기타(색조메이크업)", Secondcategory_id: 114 },
    //
    { name: "메이크업베이스", Secondcategory_id: 115 },
    { name: "BB/CC크림", Secondcategory_id: 115 },
    { name: "쿠션팩트", Secondcategory_id: 115 },
    { name: "파운데이션", Secondcategory_id: 115 },
    { name: "파우더/팩트", Secondcategory_id: 115 },
    { name: "프라이마/컨실러", Secondcategory_id: 115 },
    { name: "기타(베이스메이크업)", Secondcategory_id: 115 },
    //
    { name: "샴푸/린스", Secondcategory_id: 116 },
    { name: "헤어에센스/트리트먼트", Secondcategory_id: 116 },
    { name: "헤어스타일링", Secondcategory_id: 116 },
    { name: "헤어컬러(염색)", Secondcategory_id: 116 },
    { name: "발모제/탈모관련", Secondcategory_id: 116 },
    { name: "바디클렌져/로션", Secondcategory_id: 116 },
    { name: "핸드/풋케어", Secondcategory_id: 116 },
    { name: "기타(헤어/바디)", Secondcategory_id: 116 },
    //
    { name: "여성 향수", Secondcategory_id: 117 },
    { name: "남성 향수", Secondcategory_id: 117 },
    { name: "남여공용 향수", Secondcategory_id: 117 },
    { name: "기타(향수/아로마)", Secondcategory_id: 117 },
    //
    { name: "네일아트/스티커", Secondcategory_id: 118 },
    { name: "매니큐어/페디큐어", Secondcategory_id: 118 },
    { name: "네일케어도구", Secondcategory_id: 118 },
    { name: "네일리무버", Secondcategory_id: 118 },
    { name: "기타(네일아트/케어)", Secondcategory_id: 118 },
    //
    { name: "뷰티소품(퍼프/거울)", Secondcategory_id: 119 },
    { name: "메이크업 브러쉬", Secondcategory_id: 119 },
    { name: "화장품 파우치/정리함", Secondcategory_id: 119 },
    { name: "기타(이미용품)", Secondcategory_id: 119 },
    //
    { name: "스킨/로션", Secondcategory_id: 121 },
    { name: "클렌징/마스크", Secondcategory_id: 121 },
    { name: "에센스/크림", Secondcategory_id: 121 },
    { name: "BB크림", Secondcategory_id: 121 },
    { name: "선케어", Secondcategory_id: 121 },
    { name: "왁스", Secondcategory_id: 121 },
    { name: "올인원", Secondcategory_id: 121 },
    { name: "세트", Secondcategory_id: 121 },
    { name: "기타(남성화장품)", Secondcategory_id: 121 },
    //
    { name: "거실가구", Secondcategory_id: 122 },
    { name: "침실가구", Secondcategory_id: 122 },
    { name: "학생/서제/사무용가구", Secondcategory_id: 122 },
    { name: "선반/수납가구", Secondcategory_id: 122 },
    { name: "주방가구", Secondcategory_id: 122 },
    //
    { name: "수공예품", Secondcategory_id: 124 },
    { name: "수공예 용품/부자재", Secondcategory_id: 124 },
    //
    { name: "포스터/그림/액자", Secondcategory_id: 126 },
    { name: "디퓨저/캔들", Secondcategory_id: 126 },
    { name: "쿠션/방석", Secondcategory_id: 126 },
    { name: "탁상/벽시계", Secondcategory_id: 126 },
    { name: "식탁보/테이블 매트", Secondcategory_id: 126 },
    { name: "거울", Secondcategory_id: 126 },
    { name: "기타 인테리어 소품", Secondcategory_id: 126 },
    //
    { name: "식물/꽃", Secondcategory_id: 127 },
    { name: "원예 용품", Secondcategory_id: 127 },
    //
    { name: "그릇/홈세트", Secondcategory_id: 131 },
    { name: "잔/컵", Secondcategory_id: 131 },
    { name: "텀블러/물병", Secondcategory_id: 131 },
    { name: "수저/커트러리", Secondcategory_id: 131 },
    { name: "업소용품/기기", Secondcategory_id: 131 },
    { name: "냄비/프라이팬", Secondcategory_id: 131 },
    { name: "조리도구", Secondcategory_id: 131 },
    { name: "칼/도마", Secondcategory_id: 131 },
    { name: "보관/밀페용기", Secondcategory_id: 131 },
    { name: "주전자/티포트", Secondcategory_id: 131 },
    { name: "커피용품", Secondcategory_id: 131 },
    { name: "제과/제빵", Secondcategory_id: 131 },
    { name: "주방수납용품", Secondcategory_id: 131 },
    { name: "기타 주방용품", Secondcategory_id: 131 },
    //
    { name: "구강/면도용품", Secondcategory_id: 132 },
    { name: "샤워/목욕용품", Secondcategory_id: 132 },
    { name: "수건/타월", Secondcategory_id: 132 },
    { name: "샤워기/레드/수전용품", Secondcategory_id: 132 },
    { name: "욕실수납/정리", Secondcategory_id: 132 },
    { name: "욕조/반식욕 용품", Secondcategory_id: 132 },
    { name: "변기/비데용품", Secondcategory_id: 132 },
    { name: "기타 욕실용품", Secondcategory_id: 132 },
    //
    { name: "청소용품", Secondcategory_id: 133 },
    { name: "세탁/빨래용품", Secondcategory_id: 133 },
    { name: "세제", Secondcategory_id: 133 },
    { name: "화장지", Secondcategory_id: 133 },
    { name: "생리대", Secondcategory_id: 133 },
    { name: "기타 생활용품", Secondcategory_id: 133 },
    //
    { name: "우주복/슈트", Secondcategory_id: 152 },
    { name: "싸개/배냇저고리", Secondcategory_id: 152 },
    { name: "원피스", Secondcategory_id: 152 },
    { name: "유아상의", Secondcategory_id: 152 },
    { name: "유아하의", Secondcategory_id: 152 },
    { name: "유아내의/속옷", Secondcategory_id: 152 },
    { name: "자켓/점퍼", Secondcategory_id: 152 },
    { name: "정장/드레스", Secondcategory_id: 152 },
    { name: "베이비수영복", Secondcategory_id: 152 },
    { name: "기타 베이비의류", Secondcategory_id: 152 },
    //
    { name: "원피스", Secondcategory_id: 153 },
    { name: "상하복/세트", Secondcategory_id: 153 },
    { name: "자켓/점퍼", Secondcategory_id: 153 },
    { name: "코트/정장", Secondcategory_id: 153 },
    { name: "가디건/조끼", Secondcategory_id: 153 },
    { name: "니트/스웨터", Secondcategory_id: 153 },
    { name: "블라우스/셔츠", Secondcategory_id: 153 },
    { name: "티셔츠", Secondcategory_id: 153 },
    { name: "바지", Secondcategory_id: 153 },
    { name: "치마", Secondcategory_id: 153 },
    { name: "스포츠/테마의류", Secondcategory_id: 153 },
    { name: "속옷/잠옷", Secondcategory_id: 153 },
    { name: "기타 여아의류", Secondcategory_id: 153 },
    //

    { name: "상하복/세트", Secondcategory_id: 154 },
    { name: "자켓/점퍼", Secondcategory_id: 154 },
    { name: "코트/정장", Secondcategory_id: 154 },
    { name: "가디건/조끼", Secondcategory_id: 154 },
    { name: "니트/스웨터", Secondcategory_id: 154 },
    { name: "셔츠/남방", Secondcategory_id: 154 },
    { name: "티셔츠", Secondcategory_id: 154 },
    { name: "바지", Secondcategory_id: 154 },
    { name: "스포츠/테마의류", Secondcategory_id: 154 },
    { name: "속옷/잠옷", Secondcategory_id: 154 },
    { name: "기타 남아의류", Secondcategory_id: 154 },
    //
    { name: "원피스", Secondcategory_id: 155 },
    { name: "상하복/세트", Secondcategory_id: 155 },
    { name: "자켓/점퍼", Secondcategory_id: 155 },
    { name: "코트/정장", Secondcategory_id: 155 },
    { name: "가디건/조끼", Secondcategory_id: 155 },
    { name: "니트/스웨터", Secondcategory_id: 155 },
    { name: "블라우스/셔츠", Secondcategory_id: 155 },
    { name: "티셔츠", Secondcategory_id: 155 },
    { name: "바지", Secondcategory_id: 155 },
    { name: "치마", Secondcategory_id: 155 },
    { name: "스포츠/테마의류", Secondcategory_id: 155 },
    { name: "속옷/잠옷", Secondcategory_id: 155 },
    { name: "기타 여주니어의류", Secondcategory_id: 155 },
    //
    { name: "상하복/세트", Secondcategory_id: 156 },
    { name: "자켓/점퍼", Secondcategory_id: 156 },
    { name: "코트/정장", Secondcategory_id: 156 },
    { name: "가디건/조끼", Secondcategory_id: 156 },
    { name: "니트/스웨터", Secondcategory_id: 156 },
    { name: "셔츠/남방", Secondcategory_id: 156 },
    { name: "티셔츠", Secondcategory_id: 156 },
    { name: "바지", Secondcategory_id: 156 },
    { name: "스포츠/테마의류", Secondcategory_id: 156 },
    { name: "속옷/잠옷", Secondcategory_id: 156 },
    { name: "기타 남주니어의류", Secondcategory_id: 156 },
    //
    { name: "액세서리", Secondcategory_id: 157 },
    { name: "신발", Secondcategory_id: 157 },
    { name: "가방/지갑", Secondcategory_id: 157 },
    { name: "모자", Secondcategory_id: 157 },
    { name: "양말", Secondcategory_id: 157 },
    { name: "기타 신발/가방/잡화", Secondcategory_id: 157 },
    //
    { name: "유모차", Secondcategory_id: 158 },
    { name: "아기띠", Secondcategory_id: 158 },
    { name: "카시트", Secondcategory_id: 158 },
    { name: "보행기/쏘서", Secondcategory_id: 158 },
    { name: "기저귀", Secondcategory_id: 158 },
    { name: "가구/침대/매트", Secondcategory_id: 158 },
    { name: "이불/침구", Secondcategory_id: 158 },
    { name: "목욕/구강용품", Secondcategory_id: 158 },
    { name: "세탁/위생용품", Secondcategory_id: 158 },
    { name: "유아동 스킨케어", Secondcategory_id: 158 },
    { name: "기타 유아동용품", Secondcategory_id: 158 },
    //
    { name: "임부의류/수유복", Secondcategory_id: 159 },
    { name: "임부스킨케어", Secondcategory_id: 159 },
    { name: "기타 임부 의류/용품", Secondcategory_id: 159 },

    { name: "인형(유아용)", Secondcategory_id: 160 },
    { name: "캐릭터완구/로봇", Secondcategory_id: 160 },
    { name: "교구/CD/DVD", Secondcategory_id: 160 },
    { name: "퍼즐/블록", Secondcategory_id: 160 },
    { name: "스포츠완구", Secondcategory_id: 160 },
    { name: "신생아완구", Secondcategory_id: 160 },
    { name: "자전거/승용완구", Secondcategory_id: 160 },
    { name: "물놀이/계절용품", Secondcategory_id: 160 },
    { name: "놀이집/텐트/미끄러믈", Secondcategory_id: 160 },
    { name: "기타 교구/완구/인형", Secondcategory_id: 160 },
    //
    { name: "젖병/세정용품", Secondcategory_id: 161 },
    { name: "분유", Secondcategory_id: 161 },
    { name: "수저/식판/이유식용품", Secondcategory_id: 161 },
    { name: "기타 수유/이유용품", Secondcategory_id: 161 },
    //
    { name: "재택 기타", Secondcategory_id: 182 },
    { name: "타이핑/포스팅", Secondcategory_id: 182 },
    { name: "디자이너", Secondcategory_id: 182 },
    { name: "프로그래머", Secondcategory_id: 182 },
    //
    { name: "단기알바", Secondcategory_id: 183 },
    { name: "주말알바", Secondcategory_id: 183 },
    { name: "야간알바", Secondcategory_id: 183 },
    { name: "사무/회계", Secondcategory_id: 183 },
    { name: "강사/교육", Secondcategory_id: 183 },
    { name: "서비스/미디어", Secondcategory_id: 183 },
    { name: "상담영업", Secondcategory_id: 183 },
    { name: "서빙/주방", Secondcategory_id: 183 },
    { name: "생산/기능직", Secondcategory_id: 183 },
    { name: "매장관리", Secondcategory_id: 183 },
    { name: "기타 업종", Secondcategory_id: 183 },
    //
    { name: "외국어/어학원", Secondcategory_id: 184 },
    { name: "과외/학습지", Secondcategory_id: 184 },
    { name: "예체능", Secondcategory_id: 184 },
    { name: "IT/컴퓨터", Secondcategory_id: 184 },
    { name: "강사/교육 기타", Secondcategory_id: 184 },
    //
    { name: "모델", Secondcategory_id: 185 },
    { name: "헤어/피부/애견", Secondcategory_id: 185 },
    { name: "영화/공연/전시", Secondcategory_id: 185 },
    { name: "보조출연/방송", Secondcategory_id: 185 },
    { name: "안내데스크", Secondcategory_id: 185 },
    { name: "서비스/미디어 기타", Secondcategory_id: 185 },
    //
    { name: "프로그래머", Secondcategory_id: 186 },
    { name: "마케팅", Secondcategory_id: 186 },
    { name: "디자인", Secondcategory_id: 186 },
    { name: "사이트운영/관리", Secondcategory_id: 186 },
    { name: "IT/디자인 기타", Secondcategory_id: 186 },
    //
    { name: "배달", Secondcategory_id: 187 },
    { name: "운전/대리운전", Secondcategory_id: 187 },
    { name: "공사현장", Secondcategory_id: 187 },
    { name: "청소/미화", Secondcategory_id: 187 },
    { name: "전단배포", Secondcategory_id: 187 },
    { name: "제조가공", Secondcategory_id: 187 },
    { name: "운반이사", Secondcategory_id: 187 },
    { name: "포장조립", Secondcategory_id: 187 },
    { name: "생산/기능직 기타", Secondcategory_id: 187 },
    //
    { name: "영업/세일즈", Secondcategory_id: 188 },
    { name: "고객상담", Secondcategory_id: 188 },
    { name: "아웃바운드 TM", Secondcategory_id: 188 },
    { name: "섦문조사", Secondcategory_id: 188 },
    { name: "상담영업 기타", Secondcategory_id: 188 },
    //
    { name: "가전/휴대폰", Secondcategory_id: 189 },
    { name: "PC방/오락실", Secondcategory_id: 189 },
    { name: "스포츠/뷰티", Secondcategory_id: 189 },
    { name: "서점/문구", Secondcategory_id: 189 },
    { name: "볼링/당구장", Secondcategory_id: 189 },
    { name: "편의점/마트", Secondcategory_id: 189 },
    { name: "쇼핑몰/백화점", Secondcategory_id: 189 },
    { name: "매장관리 기타", Secondcategory_id: 189 },
    //
    { name: "사무보조/문서작성", Secondcategory_id: 190 },
    { name: "경리/회계/총무", Secondcategory_id: 190 },
    { name: "사무/회계 기타", Secondcategory_id: 190 },
    //
    { name: "음식점/레스토랑", Secondcategory_id: 191 },
    { name: "결혼/행사", Secondcategory_id: 191 },
    { name: "조리/주방보조", Secondcategory_id: 191 },
    { name: "베이커리/디저트", Secondcategory_id: 191 },
    { name: "카페/바리스타", Secondcategory_id: 191 },
    { name: "서빙/주방 기타", Secondcategory_id: 191 },
    //
    { name: "그림/디자인", Secondcategory_id: 192 },
    { name: "사진/영상제작", Secondcategory_id: 192 },
    { name: "음악/녹음", Secondcategory_id: 192 },
    { name: "기타", Secondcategory_id: 192 },
    //
    { name: "상담/노하우", Secondcategory_id: 193 },
    { name: "생활서비스", Secondcategory_id: 193 },
    { name: "대행서비스", Secondcategory_id: 193 },
    { name: "기타", Secondcategory_id: 193 },
    //
    { name: "피부/메이크업", Secondcategory_id: 194 },
    { name: "의류/헤어", Secondcategory_id: 194 },
    { name: "기타", Secondcategory_id: 194 },
    //
    { name: "포스팅/리뷰", Secondcategory_id: 195 },
    { name: "타이핑/문서", Secondcategory_id: 195 },
    { name: "번역/통역", Secondcategory_id: 195 },
    { name: "기타", Secondcategory_id: 195 },
    //
    { name: "구매 대행", Secondcategory_id: 196 },
    { name: "판매 대행", Secondcategory_id: 196 },
    { name: "기타", Secondcategory_id: 196 },
    //
    { name: "교육/과외", Secondcategory_id: 197 },
    { name: "생활서비스/지식", Secondcategory_id: 197 },
    { name: "거래대행", Secondcategory_id: 197 },
    { name: "디자인/영상/사진", Secondcategory_id: 197 },
    { name: "스타일/뷰티", Secondcategory_id: 197 },
    { name: "기타재능 구해요", Secondcategory_id: 197 },
    //
    { name: "기타재능", Secondcategory_id: 198 },
  ];

  try {
    await sequelize.sync({ force });

    if (force) {
      for (let i = 0; i < firstcate.length; i++) {
        await Firstcategory.create(firstcate[i]);
      }

      for (let i = 0; i < secondcate.length; i++) {
        await Secondcategory.create(secondcate[i]);
      }

      for (let i = 0; i < Thirdcate.length; i++) {
        await Thirdcategory.create(Thirdcate[i]);
      }

      // const First = await Firstcategory.create(firstcate);
      // const Second = First.addChildren(await Secondcategory.create(secondcate));
      // Second.addChildren(await Thirdcategory.create(Thirdcate));
    }
  } catch (err) {
    console.error(err);
  }
};

export default category;
