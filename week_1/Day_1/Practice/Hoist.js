console.log(hello);                                   
var hello = 'world';                                 

//var hello 
//console.log(hello); // logs undefined
// var hello = 'world'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle 
// var needle='haystack'
// test();
// function test(){
//     var needle
//     var needle='magnet'
//     console.log(needle) // logs magnet
// }

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// var brendan 
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); // logs super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food 
// var food = 'chicken';
// console.log(food); // logs chicken
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food); // half/chicken
//     var food
//     var food = 'gone';
// }







