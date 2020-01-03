$.getJSON("../scripts/data/result.json", function(data) {
  const files = data[0];
  const lines = data[1];
  let languages = data[2];
  const repos = data[3];
  var l = document.getElementById("loc");
  l.setAttribute("data-to", lines);
  var f = document.getElementById("files");
  f.setAttribute("data-to", files);
  var lang = document.getElementById("languages");
  lang.setAttribute("data-to", languages - 3);
  var repo = document.getElementById("repos");
  repo.setAttribute("data-to", repos);
});
