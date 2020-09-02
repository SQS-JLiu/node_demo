// HTTP模块 创建服务器
let http = require('http')
let url = require('url');
const { get } = require('jquery');

http.createServer((request,response)=>{
    console.log('我来了。。。');
    console.log(url.parse(request.url));
   
    if(request.method == 'GET'){
        let {pathname,query} = url.parse(request.url,  true);
        path = pathname;
        getParam = query;
        console.log('path:'+path+' getParam'+JSON.stringify(getParam));
    }else if(request.method == 'POST'){
        let result=[];
        request.on('data',buffer=>{ //处理post的body数据
            result.push(buffer);
        });
        request.on('end',()=>{
            let data=Buffer.concat(result);
            console.log(data.toString()); // 打印body数据
        });
    }
    response.write("index");
    response.end();
}).listen(8888);