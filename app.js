const express = require('express');

const app = express(); // 创建一个express实例

// app.use((req,res)=>{
//     res.json({
//         name:"张三"
//     });
// });

app.get('/name',(req,res)=>{
    res.send('tom');
});

app.post('/name2',(req,res)=>{
    res.send('tom post');
});

app.post('/test',(req,res)=>{
    let {age} = req.params;
    res.json({
        name:'tom',
        age
    });
});

app.listen(8888,()=>{
    console.log('启动成功!');
})