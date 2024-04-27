let examresult = {
    name: "Hamd Fatima",
    age: 10,
    class: 4,
    Section: "S",
    Percentage: 90
};

// Define the type of examresult
type ExamResult = typeof examresult;

// Declare finalresults as an array of ExamResult type
let finalresults: Array<ExamResult | {
    name: string;
    age: number;
    ['class']: number | string;
    Section: string;
    Percentage: number;
}> = [];

// Pushing data of examresult into finalresults array
finalresults.push(examresult);
console.log(finalresults);
finalresults.push({
    name: "Hasan Abbas",
    age: 7,
    ['class']: 2,
    Section: "E",
    Percentage: 90
});

finalresults.push({
    name: "Ali Raza",
    age: 5,
    ['class']: "KG-II",
    Section: "B",
    Percentage: 100
});

function displayfinalresults(finalresults: Array<ExamResult | {
    name: string;
    age: number;
    ['class']: number | string;
    Section: string;
    Percentage: number;
}>) {
    for (let i of finalresults) {
        console.log(
            `Student: ${i.name}
            Age: ${i.age}
            Class: ${i.class}
            Section: ${i.Section}
            Percentage: ${i.Percentage} \n`);
    }
}

displayfinalresults(finalresults);
