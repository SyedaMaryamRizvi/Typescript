var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Original array of places
var placesToVisit = [
    "Turkey",
    "Paris",
    "London",
    "Australia",
    "Singapore"
];
//Print Original array
console.log("My Original Country List \n", (placesToVisit));
// Print the array in alphabetical order without changing the original list thru sort method 
console.log("\nAlphabetical order using Sort() Method:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the original array is still in its original order
console.log("\nOriginal Country List order after sorting:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order using first Sort() and then reverse()");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that the original array is still in its original order
console.log("\nOriginal country List after sorting in reverse alphabetical order:");
console.log(placesToVisit);
// Reverse the order of the original list
console.log("\nReversed order: using reverse method only on original list");
///////////////////////////placesToVisit.reverse();
console.log(__spreadArray([], placesToVisit, true).reverse());
// Reverse the order of the list again to bring it back to its original order
console.log("\nReversed again to original order:");
//placesToVisit.reverse();
console.log(placesToVisit);
// Sort the array in alphabetical order
console.log("\nSorted in alphabetical order:");
placesToVisit.sort();
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
placesToVisit.sort().reverse();
console.log("Reverse Alphabeticasl order:\n", placesToVisit);
