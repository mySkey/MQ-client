# Socket后台服务



### 解决nginx转发websocket报400错误

```nginx
server{
    listen       80;
    server_name  school.godotdotdot.com;
    location / {           
        proxy_pass http://127.0.0.1:3000;      
        proxy_http_version 1.1;             
        proxy_set_header Upgrade $http_upgrade;            
        proxy_set_header Connection "upgrade";  
    }
}
```

其中就是下面三行解决了错误

```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

其中第一行是告诉nginx使用HTTP/1.1通信协议，这是websoket必须要使用的协议。

第二行和第三行告诉nginx，当它想要使用WebSocket时，响应http升级请求。

* <a href="https://blog.godotdotdot.com/2017/12/04/%E8%A7%A3%E5%86%B3nginx%E8%BD%AC%E5%8F%91websocket%E6%8A%A5400%E9%94%99%E8%AF%AF/" target="_blank">参考文献</a>