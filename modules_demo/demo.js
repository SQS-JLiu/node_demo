// 1.全局模块(对象)，何时何地都能访问，不需要引用.  例如：process
console.log(process.env);
console.log(process.argv);

// 2. 系统模块，需要require()，但不需要单独下载. 例如：path
let path = require('path');
console.log(path.dirname('F:/node_demo/demo.js'));
console.log(path.resolve(__dirname,'demo.js'));

let fs = require('fs');
fs.readFile('./demo.js',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        //console.log(data.toString());
    }
});

//追加写入文件
fs.writeFile('./test.txt','月薪3元',{flag:'a'},(err)=>{
    if(err){
        console.log(err);
    }
});
// 同步写入文件： fs.writeFileSync('./test.txt')

// 3.自定义的模块, 引入自定义的模块
// require 如果有路径，就去路径里去找，没有的话就去node_modules里找
// 还没有就会去node的安装目录里去找
const mod = require('./mod');

console.log("mod1.a:"+ mod.b);
