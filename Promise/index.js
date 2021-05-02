// const probj1 = new Promise( (resolve,reject) => {

//     setTimeout( () =>{
//         let roll_no = [1,2,3,4,5];
//         resolve(roll_no);
//         reject(`Error while communincating ${Error}`);
//     },1000)

// })

// const bioData = (idxRollno) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout( (idxParams) =>{
//             const bioInfo = {
//                 name : 'anjali',
//                 age : 23
//             }
//             console.log(`My name is ${bioInfo.name}, roll no is ${idxParams} and age is ${bioInfo.age}`);

//         },1000,idxRollno)
//     })
// }
// probj1.then( (rollno) => {
//     console.log(rollno);
//     return bioData(rollno[3]);
// }).then((content) =>{
//     console.log(content);
// }).catch((params) =>{
//     console.log(params);
// })


const obj = new Promise((resolve,reject) =>{ 
    let roll_no = [1,2,3,4,5];
    setTimeout( () => {
        resolve(roll_no);
        reject(`${Error}`);
    });
})

const bioData = function(rollno) {
    return new Promise ((resolve,reject) => {
        setTimeout((rollno) => {
            let data = {
                name : 'Anjali',
                age : 23
            }
        console.log(`My name is ${data.name} , roll no is ${rollno} and age is ${data.age}`);
        },1000,rollno)
    })
}
obj.then((rollno) =>{
    console.log(rollno);
    return bioData(rollno[3])
}).then( (data) => {
    console.log(data)
}).catch((Error) => {
    console.log(Error)
})
