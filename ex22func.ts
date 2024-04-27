function bank(name: string, size: string, ranking: number) {
    return {
        name,
        size,
        ranking,
    };
}

const banklist = [
    bank("BAHL", "Large", 5),
    bank("HBL", "Large", 1),
    bank("NBP", "Large", 2),
    bank("Soneri", "Medium", 13),
];

const invalidIndex = 10;
console.log(`Bank at Index ${invalidIndex}:`, banklist[invalidIndex]); // Fixed the variable name

banklist.forEach((bank) => { // Fixed the syntax
    console.log(`Name: ${bank.name}, Size: ${bank.size}, Ranking: ${bank.ranking}`);
});
export{};
