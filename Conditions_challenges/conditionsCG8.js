// const prompt=require("prompt-sync")({});
// const input = prompt("entrez colore ")
// if (input=="rouge"){
//     console.log ("Arret")
// }
// else if (input=="jaune"){
//     console.log ("Préparez-vous")
// }
// else if (input=="vert"){
//     console.log ("allez")
// }



const prompt = require('prompt-sync')();
    let feu = String(prompt('Enter un Feu tricolore entre ceux-là : rouge , jaune , vert :'));

    switch(true) {
        case (feu === "rouge") :
            console.log('Arret');
    break;
        case (feu === "jaune") :
            console.log('Préparez-vous');
    break;
        case (feu === "vert") :
            console.log("allez");
    break;

    default :
            console.log("error");

            
            
            
            
    }
