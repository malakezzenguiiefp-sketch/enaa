const prompt = require("prompt-sync")();

let username = prompt("entrer nom de utilisateur : ");
let password = Number (prompt("entre le password : "));

switch (true){
case (username === "admin" && password === 1234 ):
    console.log('Bienvenue Admin');
    break;
     
case (username === "admin" && password !== 1234 ):
console.log("Mot de passe incorrect");
break;
 default:
    console.log ("Utilisateur introuvable")

    









}