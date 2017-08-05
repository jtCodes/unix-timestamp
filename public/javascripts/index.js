
$(document).ready(function () {
  console.log("test");
  $.get("/8%204,%202012", function (data) {
    var html ='';
    html += '<p>Natural: ' + data.Date +'</p>';
    html += '<p>Unix: ' +data.Unix +'</p>';
    $(".lead").html(html);
    console.log("Foo function:", data.Unix);
  });
});

