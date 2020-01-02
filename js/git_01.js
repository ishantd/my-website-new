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
  repo_names[i] = full_name;
  i = i + 1;
});

console.log(repo_names);
