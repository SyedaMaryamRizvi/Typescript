var _a, _b;
var examresult = {
    name: "Hamd Fatima",
    age: 10,
    class: 4,
    Section: "S",
    Percentage: 90
};
// Declare finalresults as an array of ExamResult type
var finalresults = [];
// Pushing data of examresult into finalresults array
finalresults.push(examresult);
console.log(finalresults);
finalresults.push((_a = {
        name: "Hasan Abbas",
        age: 7
    },
    _a['class'] = 2,
    _a.Section = "E",
    _a.Percentage = 90,
    _a));
finalresults.push((_b = {
        name: "Ali Raza",
        age: 5
    },
    _b['class'] = "KG-II",
    _b.Section = "B",
    _b.Percentage = 100,
    _b));
function displayfinalresults(finalresults) {
    for (var _i = 0, finalresults_1 = finalresults; _i < finalresults_1.length; _i++) {
        var i = finalresults_1[_i];
        console.log("Student: ".concat(i.name, "\n            Age: ").concat(i.age, "\n            Class: ").concat(i.class, "\n            Section: ").concat(i.Section, "\n            Percentage: ").concat(i.Percentage, " \n"));
    }
}
displayfinalresults(finalresults);
