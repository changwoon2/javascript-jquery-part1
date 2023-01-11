var rank = window.prompt("직급을 입력하시오. 1부장 2과장 3차장 4대리 5사원");
switch (rank) {
  case "1":
    document.write("<p>부장의 급여는 <strong>700만원입니다</strong>");
    break;
  case "2":
    document.write("<p>과장의 급여는 <strong>600만원입니다</strong>");
    break;
  case "3":
    document.write("<p>차장의 급여는 <strong>500만원입니다</strong>");
    break;
  case "4":
    document.write("<p>대리의 급여는 <strong>400만원입니다</strong>");
    break;
  case "5":
    document.write("<p>사원의 급여는 <strong>350만원입니다</strong>");
    break;
  default:
    alert("잘못 입력하셨습니다.");
}
