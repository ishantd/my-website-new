$(".txtb").on("keyup", function(e) {
  //13  means enter button
  if (e.keyCode == 13 && $(".txtb").val() != "") {
    let jsondata = [];
    const url = "https://uselessfacts.jsph.pl/random.json?language=en";

    fetch(url)
      .then(response => response.json())
      .then(result => jsondata.push(result.text));

    var quote = jsondata;
    console.log(quote[0]);
    var task = $("<div class='task'></div>").text(
      'Oh hey, "' + $(".txtb").val() + '" BYE! '
    );
    var del = $("<i class='fas fa-trash-alt'></i>").click(function() {
      var p = $(this).parent();
      p.fadeOut(function() {
        p.remove();
      });
    });

    var check = $("<i class='fas fa-check'></i>").click(function() {
      var p = $(this).parent();
      p.fadeOut(function() {
        $(".comp").append(p);
        p.fadeIn();
      });
      $(this).remove();
    });

    task.append(del, check);
    $(".notcomp").append(task);
    //to clear the input
    $(".txtb").val("");
  }
});
