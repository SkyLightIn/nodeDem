let http = require("http");
let server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Helle node\n");
});
server.listen(3000);
console.log("server is running at http://localhost:3000");
