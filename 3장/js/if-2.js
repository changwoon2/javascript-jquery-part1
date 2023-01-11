var value = window.prompt("숫자를 입력해주세요.");
// alert(typeof value);
value = parseInt(value);
// alert(typeof value);

// if (value % 2 == 0 && value % 3 == 0) {
//   alert("짝수입니다.");
// } else {
//   alert("홀수입니다.");
// }
if (value % 2 == 0 || value % 3 == 0) {
  alert("짝수입니다.");
} else {
  alert("홀수입니다.");
}
