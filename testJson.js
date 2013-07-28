#!/usr/bin/env node                                                            
var fs = require('fs');
var http = require('http');

/*
'var cherrio = require ();

var cheerioFile = function(file){

    return cheerio.load(fs.readFileSync(file));

};
*/


var s = http.createServer(function (req, res){

    res.writeHead(200, {'content-type': 'text/plain'});


    res.write("Recebendo request via curl \n");
    
    var contact = JSON.parse(fs.readFileSync("testJson.json"));                     

    res.write(contact.surname + ", " + contact.firstname);
    
    res.end("m\n");

    console.log("Escrevendo no log: " + contact.surname + ", " + contact.firstname + " \n" + contact.phone);       


});

s.listen(8000);
