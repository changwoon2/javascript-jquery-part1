var dan = prompt("몇 단을 출력할까요?");
dan = parseInt(dan);
for (var i = 1; i <= 9; i++) {
  document.write(dan + "*" + i + "=" + dan * i + "<br>");
}