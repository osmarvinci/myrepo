#!/usr/bin/env node

console.log("About to route a request for grader");
var fs = require('fs');
var gdr = require('./grader.js');
var program = require ('commander');
var sys = require ('util');
var rest = require('restler');

/*Console.log("importado");
console.log(gdr.checkHtmlFile("index.html","checks.json"));
*/


/*Parametros aceitos pelo SSJS*/
program
.option('-u --url <url_Addres>', 'URL as parameter')
.option('-f --file <file_name>', 'File as parameter')
.option('-c --checks <checks_name>', 'Check as parameter')
.parse(process.argv);

console.log('You requested the checks with ');
if (program.url) { /*Se foi preenchido a .option URL*/
console.log ('URL %s', program.url);

/*faz o donwload da pagina, escreve em temp.html e chama o metodo checkhtmlfile*/

rest.get(program.url).on('complete', function (result){fs.writeFileSync("temp.html", result);});


console.log(gdr.checkHtmlFile("temp.html", "checks.json"));

}
if (program.file) console.log (' file %s', program.file);
