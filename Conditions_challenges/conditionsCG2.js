const prompt = require("prompt-sync")();
    let n = Number (prompt("entre un nombre : "));
        if (n > 0 ){
            console.log("nombre est positif");
            
        }
        else if (n < 0){
            console.log("nombre est negatif");
            
        }
        else{
            console.log("nul");
            
        }