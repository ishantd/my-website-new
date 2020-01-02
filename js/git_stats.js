$.getJSON("../scripts/data/result.json", function(data) {
  const files = data[0];
  const lines = data[1];
  const languages = data[2];
  $(.loc).attr("data-to",lines)
});
