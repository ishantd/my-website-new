function postToGoogle() {
  var field1 = $("#nameField").val();
  var field2 = $("#emailField").val();
  var field3 = $("#msgField").val();

  $.ajax({
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLSfKmie1skpbTgRAb4-AjRQIkTxCt4KNqIJEaOWrXZ74o-rABw/formResponse?",
    data: {
      "entry.1382740838": field1,
      "entry.254102568": field2,
      "entry.1283874259": field3
    },
    type: "POST",
    dataType: "xml",
    success: function(d) {},
    error: function(x, y, z) {
      $("#success-msg").show();
      $("#form").hide();
    }
  });
  return false;
}
