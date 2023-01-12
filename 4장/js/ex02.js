$(document).ready(function () {
  var $gigu = $("#gigu");
  $("#btnstart").click(function () {
    $gigu.animate(
      {
        left: "480px",
      },
      5000
    );
  });
});
