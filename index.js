const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    // to check the request url 
    console.log(req.url)
//     if(req.url === '/'){
// // we use fs readfile method and path module to readfile using 

// fs.readFile(path.join(__dirname,'public','index.html'),(err,content) =>{
//     if (err) throw err
//      // to write content type use res write head compulsory it takes in
// // http status code the curly brackets content type

//         res.writeHead(200,{'content-Type' :'text/html'})
// res.end(content)
// })
  
//     }

//     if(req.url === '/about'){
//         fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
//             if (err) throw err
//             res.writeHead(200,{'content-Type':'text/html'})
//             res.end(content)
//         })
//     }
// //  for Json
//     if(req.url === '/api/users'){
//        const users = [
//         {name: 'BOB Smith',age:40},
//         {name: 'John Doe',age:30}
//        ];
//        res.writeHead(200,{'content-Type':'application/json'});
//        res.end(JSON.stringify(users))

//     }

// stnadard method

// 1st build file
// how to build file path for / , tneary operator if url.req -- / then open
// index.html else open req.url
let filepath = path.join(__dirname,'public',req.url ==='/' ?
'index.html': req.url);

//get  exxtension of file using path.exxtname and passing file path

let extName = path.extname(filepath)

// set intital content type
let contentType = 'text/html'
// use switchstament to check the extension and set content type

switch(extName){
    case '.js':
        contentType = 'text/javascript';
        break
            case '.css':
        contentType = 'text/css';
        break
        case '.json':
        contentType = 'application/json';
        break
        case '.png':
        contentType = 'img/png';
        break
        case '.jpg':
        contentType = 'img/jpg';
        break
       
}

// read file
fs.readFile(filepath,(err,content)=>{
    // we use nested if statement to check fir erros 
    if(err){
        if(err.code === 'ENOENT'){
            // PAGE NOT FOUND
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{

res.writeHead(200,{'content-Type' :'text/html'})
res.end(content,'utf8')
            })
        }
        else{
            // some server error if not enont

            res.writeHead(500)
            res.end(`server error: ${err.code}`)
        }
        

    }else{
        // succesful response  statust code and set content to  the  variable

res.writeHead(200,{'content-Type' : contentType})
res.end(content)
    }
})

});


// ports may not always be run on 5000 so process.env checks the port first 
const PORT = process.env.PORT || 5000
server.listen(PORT,()=>{console.log(`server running on : ${PORT}`)})