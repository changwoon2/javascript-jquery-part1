function showPrice() {
  let oPrice = document.querySelector("#origin").value;
  let rate = document.querySelector("#rate").value;
  if (oPrice > 0 && rate > 0) {
    var savedPrice = oPrice * (rate / 100);
    var resultPrice = oPrice - savedPrice;
  }
  document.querySelector("#showResult").innerHTML =
    "상품의 원래 가격은" +
    oPrice +
    "원이고, 할인율은" +
    rate +
    "% 입니다" +
    savedPrice +
    "원을" +
    "절약한" +
    resultPrice +
    "원에 살 수 있습니다.";
}
