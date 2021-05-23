//1.引入express
const express = require('express')

//2.创建对象
const app = express()

//3.创建路由规则
app.get('/server',(request,response) => {
  //设置响应头
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

//4.监听端口启动
app.listen(8000,() => {
  console.log('服务器已启动');
})
