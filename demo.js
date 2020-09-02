// 获取系统的CPU信息
const os = require('os');

const cpus = os.cpus(); //获取系统的cpu核数

console.log(cpus.length);

// 获取内存信息

const total = os.totalmem();

console.log(total/1024/1024/1024); //GB

// web服务
// ajax ==> api ==> web server(node.js)
const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('hello');
});
server.listen('8888','127.0.0.1',()=>{
    console.log('服务启动成功');
});