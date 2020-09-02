const express = require('express');

const app = express();

//express路由http请求

//GET POST PUT DELETE

app.get('/demo',(req,res)=>{
    res.json({
        message:'get request.'
    });
});

app.post('/demo',(req,res)=>{
    res.json({
        message:'post request.'
    });
});

app.get('/user/byname',(req,res)=>{
    res.json({
        message:'get user by name.'
    });
});

app.get('/user/byid',(req,res)=>{
    res.json({
        message:'get user by id.'
    });
});

app.all('/demo2',(req,res)=>{
    res.json({
        message:'忽略了请求的方式GET/POST/...'
    });
});

app.all('*',(req,res)=>{
    res.json({
        message:'任意请求都会触发这个方法执行.'
    });
});

app.listen(8888,()=>{
    console.log('服务器启动成功!');
});