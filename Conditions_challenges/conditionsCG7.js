const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const prompt=require("prompt-sync")({});
const mp = prompt("entrez mp: ")
if (mp.length<6){
    console.log("Faible");
}
else if (mp.length>6 && mp.includes("0123")){
    console.log("Moyen");
}
else if (mp.length>=8 && passwordRegex.test(mp)){
    
    console.log("fort");
}