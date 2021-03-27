var http = require('http');
var url = require('url');
var cal = require('./cal');
var fs = require('fs');
//
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type' :  'text/html'});
    var tong = cal.tinhTong(3,5);
    var url = req.url;
    if(url == '/'){
        fs.readFile('index.html',function (error,data){
            if(error == null){
                res.write(data);
                res.end();
            }else {
                res.end(error);
            }
        });
    }else if(url == '/insert'){
        fs.appendFile('text.txt','\nghi vao file',function (error){
            if(error == null){
                res.end('Ghi thanh cong')
            }else{
                res.end(error);
            }
        });
    }else if(url == '/append'){
        fs.writeFile('text.txt','ghi vao file lan 2',function (error){
            if(error == null){
                res.end('Ghi thanh cong')
            }else{
                res.end(error);
            }
        });
    }else if(url == '/unlink'){
        fs.unlink('text.txt',function (error){
            if(error == null){
                res.end('Xoa thanh cong')
            }else{
                res.end(error);
            }
        });
    }else if(url == '/rename'){
        fs.rename('text.txt','text2.txt',function (error){
            if(error == null){
                res.end('Rename thanh cong')
            }else{
                res.end(error);
            }
        });
    }

}).listen(process.env.PORT || '3000');


// var port = normalizePort(process.PORT || '3000');
// app.set('port',port);
//
// var server = http.createServer(app);
//
// server.listen(port);
// server.on('error',onerror);
// server.on('listening',onListening);