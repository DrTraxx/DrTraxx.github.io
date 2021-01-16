async function sendEmbed(channel, botName, embed) {
  var id, token;

  switch(channel) {
    case "ausschluesse":
      id = "795372953982074910";
      token = "1D3nHCXO6Ywy71l8ZglKU1kYIwRjYhy1fmNGx-GDjpxqFrw1Cib9nNaDym83PyzlPX63";
      break;
    case "infosLeitung":
      id = "795567229928210432";
      token = "sh03rceTjEYlVMOUTkGA9KOf7cLHJA5dj6uovkgNUmu-zoZWSsU2kOnUzWDmlYT2Fqyg";
      break;
  }
  var link = "https://discord.com/api/webhooks/"+id+"/"+token+"";
  var params = {
    username: botName,
    embeds: [ embed ]
  }

  await fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(params)
  });
}
