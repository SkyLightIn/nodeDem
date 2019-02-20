// let http = require("http");
// let server = http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Helle node\n");
// });
// server.listen(3000);
// console.log("server is running at http://localhost:3000");

let http = require("http");
let fs = require("fs");
let server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("./3.png").pipe(res);
});
server.listen(3000);
console.log("server is listen http://0.0.0.0:3000");