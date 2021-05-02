const findRoll = new Promise((resolve,reject) => {
    let roll_no = [1,2,3,4,5];
    setTimeout(() => {
       resolve(roll_no);
       reject(Error);
    }, 1000);
})
const bioData = function(getroll) {
    return new Promise((resolve,reject) => {
        setTimeout((getroll) => {
            let obj = {
                name : "Anjali",
                gender : "Female"
            }
            resolve(`My name is ${obj.name} , roll no is ${getroll} and gender is ${obj.gender}`);
        }, 1000,getroll);
    })
}
async function getResult() {
 try {
    let det =  await findRoll;
    console.log(det[0])
    let val = await bioData(det[4]);
    console.log(valss);
 
    return val;
 } catch (Error) {
     console.log(`The error is ${Error}`)
 }
}
// let anj = getResult();
// console.log(anj);
let anj = getResult().then((name) => {
    console.log(name);
})
// findRoll.then((rollno) => {
//     console.log(rollno);
//     return bioData(rollno[3]);
// }).then((comp)=>{
//     console.log(comp);
// }).catch((Error) => {
//     console.log(Error);
// })

// async function getData () {
//     const rollnoData = await findRoll;
//     console.log(rollnoData);

//     const bio = await bioData(rollnoData[2]);
//     console.log(bio);
// }

// getData();