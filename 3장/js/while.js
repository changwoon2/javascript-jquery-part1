// var sum = 0;
// var i = 1;

// while (i <= 100) {
//   sum += i;
//   document.write(sum + "," + i + "<br>");
//   i++;
// }
// document.write("1~" + (i - 1) + "까지의합" + sum);
var sum = 0;
var i = 1;
var dex = confirm("작업을 진행할까요?");
do {
  if (dex == true) {
    sum += i;
    document.write(sum + "," + i + "<br>");
    i++;
  } else {
    break;
  }
} while (i <= 100);
document.write("1~" + (i - 1) + "까지의합" + sum);
