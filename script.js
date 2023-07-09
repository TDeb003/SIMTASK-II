document.addEventListener('DOMContentLoaded', function() {
  var shortenButton = document.getElementById("shortenButton");
  shortenButton.addEventListener('click', shortenUrl);
});

function shortenUrl() {
  var originalUrlInput = document.getElementById("originalUrlInput");
  var shortUrlOutput = document.getElementById("shortUrlOutput");

  var originalUrl = originalUrlInput.value;
  var shortUrl = generateShortUrl();

  var shortenedUrl = "https://yourdomain.com/" + shortUrl;
  shortUrlOutput.innerText = shortenedUrl;

  // You can send the short URL to the server for storage and retrieval.
  // Example: sendToServer(shortUrl, originalUrl);
}

function generateShortUrl() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var shortUrl = "";

  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    shortUrl += characters.charAt(randomIndex);
  }

  return shortUrl;
}
