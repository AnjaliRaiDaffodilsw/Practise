// const getRollNo = () => {
//     setTimeout(() => {
//         console.log('Hello anjali');
//         let roll_no = [1,2,3,4,5];
//         console.log(roll_no);
//     setTimeout( (rollno) => {
//         const biodata = {
//             name : 'Anjali',
//             age : 23,
//             salary : '20k'
//         }
//         console.log(`My roll no is ${rollno} My name is ${biodata.name} and I am ${biodata.age} years old`);

//     setTimeout( (salary) => {
//         biodata.gender = 'Female';
//         console.log(`My salary is ${biodata.salary} and my gender is ${biodata.gender}`);

//         },2000,biodata.salary)
//     },2000,roll_no[1]);

    
    
//     },2000);

// }

// getRollNo();

const getDetails = () => {
    console.log('The details of the user is as follows');
    setTimeout( () => {
        let rollcall = [1,2,3,4,5];
        console.log('Hello everyone');

        setTimeout( (rollno) => {
            let User = {
                name : 'Anjali',
                age : '24',
                salary : '20K'
            }
            console.log(`My name is ${User.name} , my roll no is ${rollno} and my age is ${User.age}`);

            setTimeout ( (salary) => {
                User.gender = 'Female';
                console.log(`My salary is ${salary} and I am ${User.gender}`);
            },2000,User.salary)

        },2000,rollcall[2]);

    },2000);
}

getDetails();
