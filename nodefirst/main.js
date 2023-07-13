var http = require('http');
//http 모듈을 사용하겠다.
var fs = require('fs');
//fs 모듈을 사용하겠다.
var app = http.createServer(function(request,response){
    //사용자가 접속하면 실행되는 함수
    var url = request.url;
    //사용자가 요청한 url을 저장한다.
    if(request.url == '/'){
        //사용자가 요청한 url이 / 이면
      url = '/index.html';
      //url을 /index.html로 바꾼다.
    }
    if(request.url == '/favicon.ico'){
        //사용자가 요청한 url이 /favicon.ico 이면
        response.writeHead(404);
        //404 에러를 보낸다.
        response.end();
        //응답을 종료한다.
        return;
        
    }
    response.writeHead(200);
    //200 : 파일을 성공적으로 전송했다.
    response.end(fs.readFileSync(__dirname + url));
    //사용자에게 보여줄 파일을 읽어서 보여준다.
    //__dirname : 현재 디렉토리
    //__dirname + url : 현재 디렉토리 + url
    //__dirname + '/index.html' : 현재 디렉토리 + /index.html
    //__dirname + '/main.js' : 현재 디렉토리 + /main.js
    
 
});
app.listen(3000);
//3000번 포트를 사용한다.