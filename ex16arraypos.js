var names = ["Ali Mehdi", "Zeeshan", "Abbas", "Ali Raza"];
for (var kk = 0; kk < names.length; kk++) {
    console.log("Dear ".concat(names[kk], " We have got a bigger table"));
}
var newguestatstart = "Syed Hasan Abbas";
names.unshift(newguestatstart);
console.log(names);
var middleman = "Beech ka banda";
//let midno: number = Math.floor(names.length/2);
var midno = Math.floor(names.length / 2);
names.splice(midno, 0, middleman); //adding syed hasan abbas at mid position thruy splice
console.log(names);
console.log("Guest add in middle of guest list is ", middleman);
var newguest = "Naya Guest";
console.log("\n\n\n 3rd task is to add naya guest in array");
names.push(newguest);
console.log(names);
for (var mm = 0; mm < names.length; mm++) {
    console.log("Dear ".concat(names[mm], " , we have got a bigger table Dinner per Ajaoo"));
}
