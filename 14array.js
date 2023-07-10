var countries=["india","japan","china","russia"];
var states=new Array("maharashtra","madhyapradesh","gujrat");

console.log(states.length);
console.log(countries);

states[1]="goa";
console.log(states);

var user=["Tauseef","pateltauseef413@gmail.com",3,true];
console.log(user);

user.pop();
console.log(user);
user.unshift("new value");
console.log(user);
user.shift();
console.log(user);

console.log(Array.from("Tauseef"));
