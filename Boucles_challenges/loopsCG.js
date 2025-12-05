const prompt=require("prompt-sync")({})

let number = prompt("entrer un nombre : ");

let isprime = true;

if (number <= 1){
    isprime = false;
}

for(let i = 2 ;i <= number ;i++){
    if (number % i === 0 ){
        isprime = false;
        break;
    }
}
console.log(isprime); 