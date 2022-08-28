const http = require('http');
const fs = require('fs')
const qs = require('querystring')
const url = require('url')
function template(list , title , script){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>웹 서버 실행</title>
    </head>
    <body>
        <h1> <a href="/"> ${title}</a> </h1>
        <ul>
           ${list}
        </ul>
        <p>${script} </p>
        <form action = "http://localhost/create" accept-charset="utf-8" method="post">
        <p>파일 명 <input type = "text" name="filename"> </p>
        <p>파일 안에 데이터 <input type = "text" name="filedata"> </p>
        <button> 새로운 파일 만들기 </button>
    </form> 
    </body>
    </html>
    `
}

var app = http.createServer(function(request , response){
    _url = url.parse(request.url, true)
    if(_url.path != '/favicon.ico'){
        var list = fs.readdirSync('./data')
        var list_data = ""
        list.forEach(a => {
            list_data +=  `<li> <a href="/?id=${a}"> ${a} html </a>  </li>`
            
        })
        var title = _url.query.id
        if(_url.path == "/") {
            var title = "web"
            var script = '파일에 대한 설명'
        }
        else if(fs.existsSync(`./data/${title}`)){
            var script = fs.readFileSync(`./data/${title}`)
        }
        else if(_url.path == '/create'){
            console.log("데이터 받기")
            var body = ""
            request.on("data", function(data){
                body += data
                console.log(body)
            })
            request.on("end" ,function(){
                var post = qs.parse(body)
                filename = post.filename
                filedata = post.filedata
                fs.writeFileSync(`./data/${filename}` , filedata)
                console.log(filename , filedata)
            })
        }
        response.writeHead(200);
        response.end(template(list_data , title , script));
    }
})

app.listen(80)