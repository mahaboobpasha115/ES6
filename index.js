// let & const

console.log("LET & CONST");
let variable = "var";
console.log(variable);

// ✅null 

variable = "Another value";
console.log(variable);

const maxMarks = 200;
console.log(maxMarks);
// maxMarks = 199; // Won't work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const subNumbers = function (number1,number2){
    return number1 - number2;
};
console.log(subNumbers(10,5));

const divideNumbers = (number1,number2) => number1 / number2;
console.log(divideNumbers(12, 3));

const greet = () => {
    console.log("Hello world!");
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Pasha");

const addNumbers = addition => console.log(addition) ;
addNumbers(5+8);

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start = 15) => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [10, 15, 9, -8];
console.log(Math.max(105,80, 10, -3));
console.log(Math.max(...numbers));

function makeArray(name, ...args) {
    return args;
}
console.log(makeArray("PASHA", 10,15,8));

//Destructuring

//Destructuring -Array

const myHobbies = ['cycling','Sports'];
console.log(myHobbies[0],myHobbies[1]);

const myHobby1 = myHobbies[0];
const myHobby2 = myHobbies[1];

console.log(myHobby1,myHobby2);

//ES6

 const [hobby1,hobby2] = myHobbies;
 console.log(hobby1,hobby2)


//Destructuring - Objects
const userData = {username: "Pasha",age:22}
const myName = userData.username;
const age = userData.age;
console.log(myName,age);

//ES6
const userData2 = {username2: "Pasha",age2:22}
 const {username2,age2} = userData2;
 console.log(username2,age2)


//Alias

const userData3 = {username3: "Pasha",age3:22}
 const {username3:myName2,age3:myAge2} = userData3;
 console.log(myName2,myAge2);

//Template Literals

const myFriendName = 'Yediyurappa';
const greeting = "Happy Birthday " + myFriendName + ", Have a Great year ahead.";
console.log(greeting);

//ES6

const greeting2 = `Happy birthday ${myFriendName}
Have a great Life ahead, be cool as always
`;
console.log(greeting2);