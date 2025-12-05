// const prompt=require("prompt-sync")({});

// let n=Number(prompt("Entrez un nombre:"));
// if(isNaN(n)){console.log("valeur non valide");}
// else{if(n%2===0)console.log(n+"est pair");
// else console.log(n+" est impair")};

const prompt = require("prompt-sync")();

let n = parseInt(prompt("entrez un nombre n : "));
 if (n % 2 === 0){
    console.log("le nombre est pair");
}
else{
    console.log("le nombre est impair");
}
