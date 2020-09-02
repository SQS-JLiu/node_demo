const express =require('express');
const app = express();

app.get('/demo',(req,res)=>{

    throw new Error('测试异常功能')
});

function error_handler_middleware(err,req,res,next){
    if(err){
        res.status(500);
        res.json({
            message:'服务器异常.'
        });
    }else{
        //
    }
}
//3.异常处理 路由. 应该在最低端, 当所有路由都无法处理时，
//便调用异常处理方法. 异常处理一定是收口的.
app.use(error_handler_middleware);

app.listen(8888,()=>{
    console.log('服务启动成功.');
});