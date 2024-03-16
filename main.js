var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of Countries and Print its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);
// Print a Array in Alphabetical Order without modifing the Actual Array List
console.log("Alphabetical Order :", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its Orginl Order
console.log("Still in Orginal Order:", countriesToVisit);
// Printe a Array in Reversed Order without modifing the Actual Array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its Orginl Order
console.log("Still in Orginal Order :", countriesToVisit);
// We have Changed the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
// Print the Array to show that it's back to its Orginal Order
console.log("Back to Orginal Order:", countriesToVisit.reverse());
// Print the Array to show that its Orderd has been changed in Alphabital Order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have changed again the Orginal Array Order Now in reverse Order again
console.log("Orginal Array Reversed again:", countriesToVisit.reverse());
