const http = require('http');
const fetch = require('node-fetch');

http.createServer(async function (req, res) {
    console.log(req.query);
    res.write(JSON.stringify({result: 1}));
    res.end();
}).listen(process.env.PORT || 3000);
