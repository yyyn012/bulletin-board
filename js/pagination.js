// pagination

let totalPage = 100;
let pageNum = 5;
let blockNum = 5;
let totalBlock = totalPage % 5 == 0 ? totalPage / 5 : totalPage / 5 + 1;
let currentBlock = 1;

// 페이지에 맞게 게시글 데이터 출력하는 함수
// function pagePrint(block) {
//   tbody.remove();
// }

let data = new Array();

//    게시글 데이터를 담고 있는 객체를 1000개 추가한다.
for (let i = 1; i <= totalPage; i++) {
  data[i] = {
    notice_num: i,
    title: "제목" + i,
    writer: "작성자" + i,
    date_created: "2022-10-07",
    Lookkup_num: i,
    like: i,
  };
}
// 게시글 데이터 출력하기
// 매개변수 : 선택 블럭
function pagePrint(block) {
  // 초기화
  // 게시글 title 제외하고 모두 제거
  let postList = document.querySelectorAll(".data_row");
  postList.forEach(function (item) {
    item.remove();
  });

  // 게시글 출력 공간
  let noticeBoard = document.querySelector(".notice_board");
  // 출력 첫 페이지 번호
  let start = totalPage - pageNum * (block - 1);
  for (let i = start; i >= 1 && i > start - pageNum; i--) {
    // 게시글 데이터 가져와서 게시글 요소 생성 및 추가
    // 번호, 제목, 작성자, 작성일, 조회수, 좋아요
    // data[i].notice_num data[i].title data[i].writer data[i].date_created data[i].Lookkup_num data[i].like

    let post = document.createElement("ul");
    post.className = "board_row";
    post.className = "data_row";

    let classname = ["w70", "w500", "w120", "w100", "w100", "w100"];

    let post_data = [
      data[i].notice_num,
      data[i].title,
      data[i].writer,
      data[i].date_created,
      data[i].Lookkup_num,
      data[i].like,
    ];

    //게시글 생성
    for (let j = 0; j < classname.length; j++) {
      let li = document.createElement("li");
      li.className = classname[j];
      li.textContent = post_data[j];
      post.appendChild(li);
    }

    // 게시글 추가
    noticeBoard.appendChild(post);
  }
}

// 블럭 출력하기
// 매개변수 : 가장 앞에 오는 블럭
function blockPrint(frontBlock) {
  currentBlock = frontBlock;
  const beforeBtn = document.querySelector(".before_move");
  const nextBtn = document.querySelector(".next_move");

  if (frontBlock <= 1) {
    beforeBtn.style.visibility = "hidden";
  } else {
    beforeBtn.style.visibility = "visible";
  }

  // 다음으로 갈 블럭이 없으면
  if (frontBlock + blockNum >= totalBlock) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }

  // 블럭을 추가할 공간
  let blockBox = document.querySelector(".block");
  // 기존 블럭 모두 삭제
  blockBox.replaceChildren();

  console.log("remove");

  //front_block부터 total_block 또는 block_num까지 생성 및 추가
  for (let i = frontBlock; i <= totalBlock && i < frontBlock + blockNum; i++) {
    console.log("add element");

    // 버튼을 생성한다.s
    let pageButton = document.createElement("button");
    pageButton.textContent = i;
    // 버튼을 클릭하면 게시글이 변경되는 이벤트 추가
    pageButton.addEventListener("click", function (event) {
      pagePrint(i);
    });
    // 블럭에 추가한다.
    blockBox.appendChild(pageButton);
  }
}

function before() {
  blockPrint(currentBlock - blockNum);
  console.log("이전");
}

function next() {
  blockPrint(currentBlock + blockNum);
  console.log("다음");
}
// 화면 로드 시 실행되는 이벤트
window.onload = function () {
  pagePrint(1);
  blockPrint(1);
};
