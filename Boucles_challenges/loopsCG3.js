const prompt=require("prompt-sync")();


let somme=0;
while(true){

    let n =Number(prompt("entre le nomber : "))
    if (n==0){
        break
    } 
   if (n<100){
    somme+=n
   }
    

}
console.log (somme)



