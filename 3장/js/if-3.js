var userID = window.prompt("아이디를 입력하세요.");
var userPW = window.prompt("패스워드를 입력하세요.");
if (userID == "Shin" && userPW == "1111") {
  alert(userID + "님이 로그인 하셨습니다.");
} else if (userID == "Shin") {
  alert("패스워드가 잘못되었습니다.");
} else {
  alert("아이디가 잘못되었습니다.");
}