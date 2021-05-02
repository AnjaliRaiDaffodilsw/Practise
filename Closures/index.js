//One way of writing closures
// function outer () {
//     const a = 10;
//     function inner () {
//         console.log(a);
//     }
//     return inner;
// }

// const output = outer();
// output();

//Second way of writing
// function outest(a) {
//     const b = 20;
//          function inner (c) {
//              console.log(a , b , c);
//         }
//         return inner;
// }

// const ans = outest(10);
// ans(30);

//Third of writing
// function outer () {
//     const a = 10;
//     return function inner () {
//         console.log(a);
//     }
// }

// const output = outer();
// output();


//Fourth way of writing
function outer () {
    const a = 10;
     function inner () {
        console.log(a);
    }
    inner();
}

 outer();
