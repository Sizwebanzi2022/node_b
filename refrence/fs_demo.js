const fs = require('fs');
const path = require('path')

// create folder

// fs.mkdir(path.join(__dirname,'/test'),{},(err) =>{
//     if(err) throw err;
//     console.log("file created.....")
// })

// create and write to file

// fs.writeFile(path.join
//     (__dirname,'/test','hello.txt'),'hello world',(err) =>{
//     if(err) throw err;
//     console.log("file written to.....")
// // file append
//     fs.appendFile(path.join
//         (__dirname,'/test','hello.txt'),'I love node',(err) =>{
//         if(err) throw err;
//         console.log("file written to.....")
//     })
// })


//  read file params path , char enncoding and call back with err and data as argument

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})

// rename file

fs.rename(path.join(__dirname,'/test','hello.txt' ),path.join
(__dirname,'/test','helloworld.txt'),(err) =>{
        if(err) throw err;
        console.log("file renamed.....")
    })