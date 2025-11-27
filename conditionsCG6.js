const prompt=require("prompt-sync")({});
const annee = Number(prompt("entrez annee: "))

if (annee%4==0 && annee%100!=0 || annee%400==0) {
     console.log("bissextile ")
}else {

 console.log("no bissextile  ")
}


