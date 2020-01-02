var json = (function() {
  var json = null;
  $.ajax({
    async: false,
    global: false,
    url: "../data/repos.json",
    dataType: "json",
    success: function(data) {
      json = data;
    }
  });
  return json;
})();

var repo_names = new Array(json.length);

var i = 0;

json.forEach(({ full_name }) => {
  repo_names[i] = "https://api.codetabs.com/v1/loc?github=" + full_name;
  i = i + 1;
});

// $.getJSON("https://api.codetabs.com/v1/loc?github=jolav/betazone", function(
//   data
// ) {
//   console.log(data);
// });

for (var j = 0; j < json.length; j++) {
  $.getJSON(repo_names[j], function(data) {
    console.log(data);
  });
}
// console.log(repo_names);
