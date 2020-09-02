const express =require('express');
const app = express();

function log_middleware(req,res,next){//1.app级别中间件
    console.log('请求来了...');
    next();
}
app.use(log_middleware);

//2.路由内部使用，router 级别 [x,x,x],可以多个中间件
app.get('/test1',[valid_name_middlewware/**middleware */],(req,res)=>{
        res.json({
            message:'test1'
        });
});


//加载一个static的中间件,可以访问静态资源文件
app.use(express.static('static',{
    extensions:['html','htm']
}));



//中间件 结构
//1.是一个函数
//2.err,req,res,next-->function

function demo_middleware(err,req,res,next){
   // 1.异常处理
   // 2.处理下业务功能, 然后转交控制权next
   // 3.响应请求---结束响应-->当做路由的处理函数
}

// test?name=123
function valid_name_middlewware(req,res,next){
    let {name} = req.query;
    if(!name || !name.length){
        res.json({
                message:'确少name参数.'
            }
        );
    }else{
        next();
    }
}

app.all('*',valid_name_middlewware);

app.get('/test',(req,res)=>{
    res.json({
        message:'test'
    });
});


app.listen(8888,()=>{
    console.log('服务启动成功.');
});