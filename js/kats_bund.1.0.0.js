//katSBund
async function getKatSBund() {
  if(!localStorage.katSBund || JSON.parse(localStorage.katSBund).lastUpdate < (new Date().getTime() - 5 * 1000 * 60)) {
    await $.get("/alliance_posts/1725151/edit", function(data) {
      localStorage.setItem("katSBund", JSON.stringify(lastUpdate: new Date().getTime(), value: JSON.parse($("#alliance_post_content", data).text().trim()));
    });
  }
  return JSON.parse(localStorage.katSBund).value;
}
