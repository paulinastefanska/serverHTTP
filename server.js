const http = require("http");
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Home</h1>");
      res.end();
    } else if (req.url === "/users") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Users</h1>");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>Oops something went wrong...</h1>");
    }
  })
  .listen(port, "127.0.0.1", () => {
    console.log(port);
  });
