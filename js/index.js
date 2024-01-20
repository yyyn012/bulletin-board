const boardForm = document.querySelector("#board-form");

function onSubmitHandler() {
  if (boardForm.title.value == "") {
    alert("제목을 입력해주세요");
    document.boardForm.title.focus();
    return false;
  }
  if (boardForm.content.value == "") {
    alert("내용을 입력해주세요.");
    document.boardForm.content.focus();
    return false;
  }
  if (boardForm.password.value == "") {
    alert("암호를 입력해주세요.");
    document.boardForm.password.focus();
    return false;
  }
  document.boardForm.submit();
}

// boardForm.addEventListener("submit", onSubmitHandler);
