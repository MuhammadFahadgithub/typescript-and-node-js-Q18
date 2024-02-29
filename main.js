var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Task 18
// store the location in a arry, Make sure the arry is not in alphabetical order.
var places = ['Singapore', 'Dubai', 'London', 'Paris', 'Istanbul'];
// print your arry in its original order.
console.log('orignal ' + places);
// Print your arry in alphabetical orderwithout modifying the actual list.
console.log('copy ' + __spreadArray([], places, true).sort());
//show that your arry is still in itsoriginal order by printing it.
console.log('orignal ' + places);
// Print your arry in reverse alphabetical order without chaning the order
//  of the original list.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// show that your arry is still in it's original order again.
console.log('orignal ' + places);
//  Reverse the order of your list again. Show that it's order has changed. 
console.log('orignal ' + places.reverse());
// Reverse the order of your list again. Print the list to show it's back 
// to its original original order.
console.log('orignal ' + places.reverse());
// Sort your arry so it's stored in alphabetical order. Print the arry to 
// show that its order has been Changed.
console.log('orignal ' + places.sort());
// Sort to change your arry so it's stored in reverse alphabetical order.
// Print the list to show that it's order has changed.
console.log('orignal ' + places.sort().reverse());
