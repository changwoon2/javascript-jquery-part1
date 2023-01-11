var score = window.prompt("점수를 입력해주세요.");
score = parseInt(score);
if (score >= 90 && score <= 100) {
  document.write(score + "A 학점");
} else if (score >= 80 && score <= 89) {
  document.write(score + "B 학점");
} else if (score >= 70 && score <= 79) {
  document.write(score + "C 학점");
} else if (score >= 60 && score <= 69) {
  document.write(score + "D 학점");
} else {
  document.write(score + "F 학점");
}