#!/usr/bin/env node

console.log("About to route a request for grader");
var gdr = require('./grader.js');
console.log("importado");
console.log(gdr.checkHtmlFile("index.html","checks.json"));
