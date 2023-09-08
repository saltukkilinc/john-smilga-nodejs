const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is home page");
  } else if (req.url === "/about") {
    res.end("This is the about page");
  } else {
    res.end(`
  <h1>oops! There is no such an URL!</h1>
  <a href="/">Go back the home page!</a>
  `);
  }
});

server.listen(5000);
