const express = require('express');

const app = express();

const memberRouter = require('./member.router');
const itemRouter = require('./item.router');

app.use('/member',memberRouter);  // /member/list
app.use('/item',itemRouter);      // /item/list

app.listen(8888,()=>{
    console.log('服务启动成功.');
});
