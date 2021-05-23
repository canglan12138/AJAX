//1.引入express
const express = require('express')

//2.创建对象
const app = express()

//3.创建路由规则
app.get('/server',(request,response) => {
  //设置响应头，允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')

  //json 字符串
  const data = {
    name : 'lg',
    age : 21
  }

  let str = JSON.stringify(data)
  //设置响应体
  response.send(str)
})

app.post('/server',(request,response) => {
  //设置响应头
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  response.send('hello,express,post')
})

//网络超时
app.get('/delay',(request,response) => {
  //设置响应头
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  setTimeout(function () {
    response.send('delay')
  },3000)

})

//jquery
app.all('/jquery',(request,response) => {
  //设置响应头
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  let data = {
    name : 'lg'
  }
    response.send(JSON.stringify(data))

})

//axios
app.all('/axios',(request,response) => {
  //设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  //设置响应体
  let data = {
    name : 'lg'
  }
  response.send(JSON.stringify(data))

})

//4.监听端口启动
app.listen(8000,() => {
  console.log('服务器已启动');
})
