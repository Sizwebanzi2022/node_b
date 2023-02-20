const http = require('http')

// create server object takes http create server method, two paramenters for request. response , listen to listen on a port and a call back function
http.createServer((req,res)=>{
    res.write('hello world');
    res.end()
}).listen(5000,()=> console.log('sever runnning'))