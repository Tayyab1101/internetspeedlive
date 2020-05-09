setInterval(() => {
  document.querySelector("div > span > span").innerHTML =
    navigator.connection.downlink;
}, 200);
