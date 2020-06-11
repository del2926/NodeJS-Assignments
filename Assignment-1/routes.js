const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><h1>Welcome To My Page</h1></body>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><h1>List Of Users</h1></body>");
    res.write(
      "<body><ul><li>Max</li><li>Anna</li><li>James</li><li>Ashley</li><li>Kyle</li></ul></body>"
    );
    res.write("</html");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requestHandler;
