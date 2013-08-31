#!/usr/bin/env node
var fs = require('fs');
var outputFile = "hello.txt"
var out = "A startup is a business built to grow rapidly. \n";
fs.writeFileSync(outputFile, out);
console.log ("Script: "+ __filename + "Wrote: \n"+  out + "to " + outputFile);
