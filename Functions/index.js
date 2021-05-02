//Normal function Calling
function calAge() {
    return 1;
}
calAge();


//function expression
const names = function(val) {
    return val;
}


console.log(names(2));

//arrow function

const nt = (age) => {
     return age;
}

console.log(nt(3));