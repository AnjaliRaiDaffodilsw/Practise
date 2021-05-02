//using bind
let multiply = function(x,y) {
    console.log(x * y);
}

//closure
let multiplier = function (x) {
    return function(y) {
        console.log(x * y);
    }
}

//2.Using closure
let closeMultiply = multiplier(3);
closeMultiply(12);

//1.using Bind
let multiplyByTwo = multiply.bind(this,2 , 9);
multiplyByTwo(3);
