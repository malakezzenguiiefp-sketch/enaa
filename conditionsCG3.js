const prompt=require("prompt-sync")({});

let age = Number(prompt("entre votre age:")) 
if(isNaN(age)) {
console.log("age non valide")
}else if (age>=18){console.log("eligible au votre");}
else{console.log("non eligible");}
