const http = require('http');
const fetch = require('node-fetch');

http.createServer(function (req, res) {
    
    res.write(req);
    res.end();
}).listen(process.env.PORT || 3000);
