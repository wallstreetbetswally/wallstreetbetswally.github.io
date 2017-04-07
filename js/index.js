// global count var
var count = 0;

function launchTicker() {
  // defin
  var tickers = ["$SNAP", "$JNUG", "$TWTR", "$FIT", "$GPRO"];
  var ticker;

  // program process
  if (count === 0) {
    ticker = tickers[0]; // always take snap on first click
    count++;
  } else {
    ticker = tickers[Math.floor(Math.random()*tickers.length)];
  }
  $(".container").append("<div class=\"ticker\">" +  ticker + "</div>");
  new Audio("mp3/" + ticker.substr(1) + ".mp3").play();
}
