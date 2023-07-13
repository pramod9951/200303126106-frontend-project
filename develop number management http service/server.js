var ht = require('http');
var t = require('./file.js');
const serv =ht.createServer(function(req,res){
    res.write("<html><head></head><body><h1>Question 1</h1><h2>Number Management HTTP Mini service</h2><h3>Server Running ....</h3></body></html>");
    if(req.url=="/number")
    {
        res.write("{number :[1,2,5,8,13]}");
        res.end();
    }

    else if(req.url=="/number/rand"){
        res.write("{number :[2,9,5,1,6,22]}");
        res.end();
    }

    else if(req.url=="/number/even"){
        res.write("{number :[0,2,4,6,8,10,12,14,16,18,20,22,24]}");
        res.end();
    }

    else if(req.url=="/number/odd"){
        res.write("{number :[1,3,5,7,9,11,13,15,17,19,21,23]}");
        res.end();
    }

    else if(req.url=="/number/prime"){
        res.write("{number :[2,3,5,7,11,13,17,19,23,29]}");
        res.end();
    }

    else if(req.url=="/number/fib"){
        res.write("{number :[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]}");
        res.end();
    }


    else{
        res.write("try different url");
    }
});

serv.listen(8008);
console.log("server running at port 8008");