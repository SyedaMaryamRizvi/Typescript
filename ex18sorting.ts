// Original array of places

//Print Original array
let placesToVisit:Array<String> = [
    "Turkey",
    "Paris",
    "London",
    "Australia",
    "Singapore"
];

console.log("My Original Country List \n", (placesToVisit)); 

// Print the array in alphabetical order without changing the original list thru sort method 
console.log("\nAlphabetical order using Sort() Method:");
console.log([...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("\nOriginal Country List order after sorting:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order using first Sort() and then reverse()");
console.log([...placesToVisit].sort().reverse());

// Show that the original array is still in its original order
console.log("\nOriginal country List after sorting in reverse alphabetical order:");
console.log(placesToVisit);

// Reverse the order of the original list
console.log("\nReversed order: using reverse method only on original list");
///////////////////////////placesToVisit.reverse();
console.log([...placesToVisit].reverse());

// Reverse the order of the list again to bring it back to its original order
console.log("\nReversed again to original order:");
//placesToVisit.reverse();
console.log(placesToVisit);

// Sort the array in alphabetical order
console.log("\nSorted in alphabetical order:");
placesToVisit.sort();
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse Alphabeticasl order:\n" ,placesToVisit);

