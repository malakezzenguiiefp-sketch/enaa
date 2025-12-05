const prompt=require("prompt-sync")();
let number= Number(prompt("entre un nombre"));
let inverse= number.toString().split('').reverse().join('');
console.log (inverse);
