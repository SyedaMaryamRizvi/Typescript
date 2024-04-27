var guestlist = ["Ali Mehdi", "Zeeshan", "Mutahir", "Ali Raza", "Hasan Abbas"];
console.log(guestlist);
var indextoreplace = guestlist.indexOf("Zeeshani");
console.log("Zeeshan is found at", indextoreplace);
// Check if the name exists in the array
if (indextoreplace !== -1) {
    // Replace the name at the found index
    guestlist[indextoreplace] = "New Name";
    console.log("Name replaced successfully!");
}
else {
    console.log("Name not found in the array.");
}
