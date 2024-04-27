function bank(name, size, ranking) {
    return {
        name: name,
        size: size,
        ranking: ranking,
    };
}
var banklist = [
    bank("BAHL", "Large", 5),
    bank("HBL", "Large", 1),
    bank("NBP", "Large", 2),
    bank("Soneri", "Medium", 13),
];
var invalidIndex = 10;
console.log("Bank at Index ".concat(invalidIndex, ":"), banklist[invalidIndex]); // Fixed the variable name
banklist.forEach(function (bank) {
    console.log("Name: ".concat(bank.name, ", Size: ").concat(bank.size, ", Ranking: ").concat(bank.ranking));
});
