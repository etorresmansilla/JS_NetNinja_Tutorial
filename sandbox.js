/*
let age = 25;
let year = 2019;
console.log(age, year);

age = 30;

const points = 100;
points = 50;
console.log(points);



// ! strings
console.log('hello, world');
let email = 'whatever@gmail.com';
console.log(email);

// ! string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';
let fullName = firstName + ' ' + lastName;
console.log(fullName)

// ! getting characters
console.log(fullName[0]);
console.log(fullName[2]);

// ! string length
console.log(fullName.length);

// ! string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);



// ! common string methods
let email = 'mario@thenetninja.co.uk';
// let result = email.lastIndexOf('n');
// let result = email.slice(0,5);
// let result = email.substring(4,10);
// let result = email.replace('m', 'w');
let result = email.replace('n', 'w');
console.log(result);



// ! numbers

let radius = 10;
const pi = 3.14;
// console.log(radius, pi);

// math operators +, -, *, /, **, %
console.log(10/2);
// let result = radius %3;
// let result = pi*radius**2;

// order of operation B I D M A S
// let result = 5*(10-3)**2;

let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes = likes + 10;
// likes += 10;
// likes -= 5;
// likes *= 2;
likes /= 2;

console.log(likes);


// ! NaN - not a number
console.log(5/'hello');


// ! number concatenation
let likes = 10;
let result = 'the blog has ' + likes + ' likes';
console.log(result);



// ! template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// ! concatenation way
// let result = 'the blog called ' + title + ' by ' + author + likes + ' likes';

// ! template string way (also template literal)
// let result = `The blog called ${title} by ${author} has ${likes} likes`


// ! creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
//console.log(html);



// ! Arrays

// let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// console.log(ninjas.length);

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// result = ninjas.pop();
// console.log(result);

// null and undefined
// let age = null;

// console.log(age, age + 3, `the age is ${age}`);


// ! Booleans and comparisons
console.log(true,false, "true", "false");

// ! Methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');  // this will return true, because the character IS in the string
// let result = names.includes('luigi'); // also will return true, luigi is inside the array


console.log(result);


// ! Comparison operators
// let age = 25;

// console.log(age==25); // == will evaluate if the condition is true, in this case if age is indeed 25, which is true
// console.log(age==30); // will return false because age is not 30
// console.log(age!=30); // will return true because != checks for the opposite, so a different value will check as true
// console.log(age>20); // true
// console.log(age<20); // false
// console.log(age<=25); // true
// console.log(age>=25); // false

// let name = 'shaun';

// console.log(name == 'shaun'); // will return true because the strings match
// console.log(name == 'Shaun'); // will return false because letter casing is accounted for
// console.log(name > 'crystal'); // will return true because the first letter is in a lower order according to alphabet
// console.log(name > 'Shaun'); // will return true because lowercase has higher hierarchy over uppercase


let age = 25;

// ! loose comparison (different types can still be equal)
// console.log(age == 25); // true
// console.log(age == '25'); // true because JS is "translating" the string to a number and comparing
// console.log(age != 25);
// console.log(age != '25');

// ! strict comparison (different types cannot be equal)
// console.log(age === 25); // true, === is strict comparison
// console.log(age === '25'); // false, this time it will check the type also
// console.log(age !== 25); // false, because the value is not different to the number 25
// console.log(age !== 25); // true, because since now its checking for types, the string '25' IS different from the # 25


// ! type conversion
// let score = '100';
// console.log(score + 1); // here we're getting a concat for the string, so result would be 1001
// score = Number(score); // converting the string to a number
// console.log(score + 1); // now we're getting 101, because now the value is not a string
// console.log(typeof score);

// let result = Number('hello'); // returns NaN, because the string cannot be converted to a number
// let result = String(50); // numbers can be converted to strings
// let result = Boolean(100); // positive numbers are "true", 0 is "false", strings are all true except for null ''
// console.log(result, typeof result);


// ! loops
// ! for loops
// loop (initialization; conditional; iteration)
// for (let i = 0; i < 5; i++){ 
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// names.length in this case will count the length of the array, meaning the number of items inside it (3), so this loop will execute 3 times
// for(let i = 0; i < names.length; i++){
    // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`; // back ticks are the html template indicators
//     console.log(html); // this will print the 3 names with the html tag in them 
// }

// ! while loops
// for the while loop, we only need the conditional, the variable declaration is defined outside the loop, and the iteration will be defined inside the curly brackets

// let i = 0;
// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// ! do while loops
// curly b's are the same but under do, not while
// let i = 5;
// do
// {
//     console.log('val of i is: ', i);
//     i++;
// }
// while(i < 5);


// ! if statements

// const age =  25;

// if(age > 20){
//     console.log('you are over 20 yrs old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = 'p@ssword';

// if(password.length >= 8){
//     console.log('that password is long enough!');
// }


// ! if else statements
// const password = 'p@ss';

// if(password.length >= 8){
//     console.log('that password is long enough!');
// }
// else{
//     console.log('password is not long enough');
// }



// ! logical operators - OR || and AND &&

// const password = 'p@ss';
// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }
// else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('that password is strong enough!');
// }
// else {
//     console.log('password is not strong enough');
// }



// ! logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);


// ! break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     if (scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);
//     if(scores[i] === 100){
//         console.log('congrats, you got the high score!');
//         break;
//     }
// }


// ! switch statements

// const grade = 'P';
// switch uses strict equality, so same type always
// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got a B!');
//         break;
//     case 'C':
//         console.log('you got a C!');
//         break;
//     case 'D':
//         console.log('you got a D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
//         break;
// }

// ! variables and block scope
// same rules for scope apply to const
// let age = 30; // global scope

// if(true){
//     let age =40; // local scope
//     let name = 'shaun'; // local scope
//     console.log('inside 1st code block: ', age, name);
//     if(true){
//         console.log('inside 2nd code block: ', age); // it will print the closest "upward" version of the variable
//     }
// }

// console.log('outside code block: ', age, name);
*/