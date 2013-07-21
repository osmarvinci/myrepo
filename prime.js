#!/usr/bin/env node

var i = 0;
var j = 0;
var k = 0;
var qtd = 0;
var primes;
var fs = require('fs');
var outfile = "primes.txt";



for (i=2;qtd<=100;i++){
	for (j=1; j<=i;j++){
		if((i%j)==0)k++;
	}
	if (k<=2){
	primes = primes +","+ i;
	qtd++
	}
	k=0;
}
console.log(primes);
fs.writeFileSync(outfile,primes);
