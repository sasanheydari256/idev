var net = require("http");

var fs = require("fs");
net.createServer(function(request,response){

	response.writeHead(200,{'Content-Type' : 'text/html'});
	response.writeHead(200,{'Server' : 'nodeJs/Server'});
	fs.readFile('t.txt',function(err,content){
	if(err){
		return console.error(err);
	}
// console.log("he"); 
response.end(content.toString());
});
// var strT = "this is test from strT Varibale.!!!"
// fs.writeFile("t.txt",strT,function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 		return console.error("weite success \n");
// });
	
 
}).listen(2020);
 





// console.log(content.toString()); 
