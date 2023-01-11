var inputString = null;
alert("메시지를 입력하세요.");
alert("프로그램을 종료하려면 q를 입력하세요.");
do {
  inputString = prompt("메시지를 입력하세요.");
  document.write(inputString + "<br>");
} while (!(inputString == "q"));
document.write("프로그램종료!!");
