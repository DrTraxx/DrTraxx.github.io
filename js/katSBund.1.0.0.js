var katSBund = {};

$.get("/alliance_posts/1725151/edit", function(data) {
  katSBund = JSON.parse($("#alliance_post_content", data).text());
});
