/**
 * Created by wangchao on 2017/3/14.
 */

// 全局变量
// console.log("hello world");
//
// setTimeout(function () {
//     console.log("3s过去了");
// },3000);
//
// var time = 0;
// var timer = setInterval(function () {
//     time += 2;
//     console.log(time + "秒已经过去了");
//     if (time > 5)
//         // 清除定时器
//         clearInterval(timer);
// },2000);
//
// // 文件路径 不包含文件名
// console.log(__dirname);
// // 文件路径 包含文件名
// console.log(__filename);
//
//
// // 正常函数
// function sayHi() {
//  console.log("hi");
// }
// sayHi();
//
// // 函数表达式
// var sthBye = function () {
//   console.log('bye');
// };
//
// // sthBye();
//
// function callFunction(func) {
//     func();
// }
//
// callFunction(sthBye);
//

/* module  模块 require() 引入模块*/

// 模块 : 每个js文件都是一个模块(包括系统提供的和自己定义的)


// 引入模块
// var sthing = require('./stuff');
// console.log(sthing(['henry','bucky','emily']));


// 事件模块

// 引入系统提供的事件模块
// var events = require('events');

// 事件实例
// element.on('click',function () {
//
// });

// 实例化事件对象
// var myEmitter= new events.EventEmitter();
// // 注册事件
// myEmitter.on('someEvent',function (msg) {
//     console.log(msg);
// });
// // 触发事件
// myEmitter.emit('someEvent',"触发事件,在注册事件的回调函数中接收参数");

/*文件系统*/
// 读写文件
// var fs = require('fs');

// 读取文件
// var readMe = fs.readFileSync('readMe.txt','utf8');

// console.log(readMe);


// 写文件
// fs.writeFileSync('writeMe.txt',readMe);

// 读取文件,异步
// fs.readFile('readMe.txt','utf8',function (err,data) {
//     if (err) throw err;
//     console.log(data);
// });
//
// console.log('====如果是异步执行,那么会先执行这句话====');
//
// // 写文件,异步
// fs.readFile('readMe.txt','utf8',function (err,data) {
//     if (err) throw err;
//     fs.writeFile('writeMe.txt',data);
// });


/*
* 创建和删除文件目录
*/
// var fs = require('fs');
//
// remove a file 删除一个文件
// fs.unlink('writeMe.txt',function () {
//     console.log('文件已经删除');
// });

// make a file 创建一个文件 如果文件已经存在就不能再次创建
// fs.mkdirSync('stuff');
// 删除文件夹 如果文件已经不存在就不能再次删除
// fs.rmdirSync('stuff');

// 异步创建一个文件夹,异步读取readMe.txt文件,将读取的文件内容写入到另一个文件中
// fs.mkdir('stuff',function () {
//    fs.readFile('readMe.txt',function (err,data) {
//        if (err) throw err;
//        fs.writeFile('./stuff/writeMe.txt',data);
//        console.log('writeMe.txt');
//    });
// });

// 如果文件夹中有文件,不能直接删除,要先删除里面的内容,再删除文件夹
// fs.unlink('./stuff/writeMe.txt',function () {
//     fs.rmdir('stuff');
// });


/*
*   读取文件流
*/

// var fs = require('fs');

// 创建读取文件流对象
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

// 创建写文件流对象
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');


// myReadStream.on('data',function (chunk) {
//    console.log('正在接受每块数据');
//
//    // 写文件流 写到指定的文件下
//    myWriteStream.write(chunk);
//
// });


// pipe (管道流) 通过pipe 写入
// myReadStream.pipe(myWriteStream);


/*
* 创建服务器
*/
// 1. 引入http模块
// var http = require('http');

// 路由: 根据指定的路径去访问页面.

// 2. 创建一个服务
// var server = http.createServer(function (req,res) {
//     if (req.url !== '/favicon.ico'){
//         console.log('客户端向服务器发送请求:'+req.url);
        // 2.1 设置响应头 参数一 响应码 参数二 对象
        // res.writeHead(200,{'Content-Type':'text/html'});
        // res.writeHead(200,{'Content-Type':'application/json'});

        // 2.2 设置反应的返回信息(响应后的内容)
        // 创建读取文件流对象
        // var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
        // myReadStream.pipe(res);


        // // 准备一个对象
        // var myObj = {
        //     name:'Henry',
        //     age:23,
        //     job:'Money',
        // };
        // // 以JSON的形式展示到界面上
        // res.end(JSON.stringify(myObj));

        // 判断路径
//         if (req.url === '/home' || req.url === '/'){
//             res.writeHead(200,{'Content-Type':'text/html'});
//             fs.createReadStream(__dirname + '/index.html').pipe(res);
//         }else if(req.url === '/contact'){
//             res.writeHead(200,{'Content-Type':'text/html'});
//             fs.createReadStream(__dirname + '/contact.html').pipe(res);
//         }else if(req.url === '/api/docs'){
//             res.writeHead(200,{'Content-Type':'application/json'});
//             // json
//             var data = [{name:"henry",age:26,sex:'男'},{name:"bucky",age:24,sex:'女'}];
//
//             res.end(JSON.stringify(data),'utf-8');
//         }else {
//             res.writeHead(200,{'Content-Type':'text/html'});
//             fs.createReadStream(__dirname + '/error.html').pipe(res);
//         }
//
//
//
//     }
// });

// 3. 监听server  参数一 端口号 参数二 自己的服务器地址
// server.listen(3000,'127.0.0.1');
//
// console.log('server is running');



/*
* NPM  node package manage
*/

// 安装package
// 1. npm init
// 2. name 要写 其它回车就行
// 3. 最后为 yes
// npm install express -- save


// express
//引入express模块
var express = require('express');

var app = express();

// 可以识别ejs
app.set('view engine','ejs');

app.get('/',function (req,res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact',function (req,res) {
    res.sendFile(__dirname + '/contact.html');
});

// 模板引擎
app.get('/profile/:name',function (req,res) {
    var data = [{age:28,job:'monkey'},{age:25,job:'nurse'}];
    // res.send("获取到用户所输入的二级路径:"+req.params.id);
    res.render('profile',{person:req.params.name,data:data});

});


app.listen(3000);

