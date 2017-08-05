
$(document).ready(function () {
  var today = new Date();
  var d = today.getDate();
  var m = today.getMonth() + 1; //January is 0!
  var y = today.getFullYear();
  console.log("test");
  $.get("/"+m+"%20"+d+",%20"+y, function (data) {
    var html = '';
    html += '<p>Natural: ' + data.Natural + '</p>';
    html += '<p>Unix: ' + data.Unix + '</p>';
    $(".lead").html(html);
    console.log("Foo function:", data.Unix);
  });
});

