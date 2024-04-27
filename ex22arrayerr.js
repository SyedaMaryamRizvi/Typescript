var myArray = [1, 2, 3, 4, 5];
// Intentional Error: Trying to access an element at an index that doesn't exist
var indexError = myArray[1]; // This will produce an index error
// Correcting the error by checking if the index is within the bounds of the array
if (indexError !== undefined) {
    console.log("Element at index :", indexError);
}
else {
    console.log("Index is out of bounds.");
}
