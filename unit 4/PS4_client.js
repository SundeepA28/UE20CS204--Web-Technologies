var http = require('http');
var url = require('url');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var murl = "mongodb://localhost:27017/WebTech";


var server = http.createServer(function (req, res) {
    if(req.method=="GET"){
        let urlQuery =url.parse(req.url, true).query;
        const params = new URLSearchParams(urlQuery);
        
        for(var param of params.keys()) {
            if(param=='eid'){
                for(var value of params.values()){
                    MongoClient.connect(murl, function (err, db) {
                        if (err) console.log(err);
                        var dbo = db.db("WebTech");
                        dbo.collection('Employee_Data').find({emp_id:value}).toArray(function(err, result) {
                            if (err) {
                            console.log(err)
                            db.close();}
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            for(var i=0;i<result.length;i++){
                                res.write('<div><h2>'+' Employee Id : ' + JSON.stringify(result[i].emp_id) + '   Employee Name : ' + JSON.stringify(result[i].emp_name)+'</div></h2>');
                                
                            }
                            res.end();
                            db.close();
                        });
                    });
                    break;
                }
            }
            
            else if(param=='dept'){
                for(var value of params.values()){
                    MongoClient.connect(murl, function (err, db) {
                        if (err) console.log(err);
                        var dbo = db.db("WebTech");
                        dbo.collection('Employee_Data').find({emp_dept:value}).toArray(function(err, result) {
                            if (err) {
                            console.log(err)
                            db.close();}
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            for(var i=0;i<result.length;i++){
                                res.write('<div><h2>'+' Employee Id : ' + JSON.stringify(result[i].emp_id) + '   Employee Name : ' + JSON.stringify(result[i].emp_name)+'</div></h2>'); 
                            }
                            res.end();
                            db.close();
                        });
                    });
                    break;
                }
            }
            break;
        }
        
    
    }
});

server.listen(8081);
console.log('server running at the link http://localhost/8081');