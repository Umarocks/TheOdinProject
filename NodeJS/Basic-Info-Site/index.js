const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("index.html");
const about = fs.readFileSync("about.html");
const contact = fs.readFileSync("contact-me.html");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var url = req.url;
  console.log(url);
  url === "/"
    ? res.end(home)
    : url === "/index"
      ? res.end(home)
      : url === "/about"
        ? res.end(about)
        : url === "/contact"
          ? res.end(contact)
          : res.end("<h1>404</h1>");
});

server.listen(5500, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:80");
});
