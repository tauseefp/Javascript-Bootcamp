
//Fuction decalred and scanned are made available
//variables declare and scanned are undefined
tip("80");

function tip(a){
    let bill=parseInt(a);
    console.log(bill+5);
}

function bigtip(a) {
    let bill=parseInt(a);
    console.log(bill+15);
}

//Below code will not work as variable declared are undefined

let bigtipr=function (a) {
    let bill=parseInt(a);
    console.log(bill+1);
    
 }
 bigtipr("200");


console.log(name);
let name="tauseef";


