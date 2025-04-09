// Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.


const names = "Charles";
const age = 30;
const nationality = "Nigerian";

const introduceMe =`My name is ${names},I am ${age} years old and i am a ${nationality} `
console.log(introduceMe);


// 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.


const favouriteQuote = "The only limit to our realization of tomorrow is our doubts of today.";
const change = favouriteQuote.toUpperCase();
console.log(change);

const favouriteQuote2 = "The only limit to our realization of tomorrow is our doubts of today.";
const change2 = favouriteQuote.toLowerCase();
console.log(change2);

// 3.Take a word and rearrange it in reverse order, then log the reversed word.
const word = "JavaScript";
const reversedWord = word.split("").reverse().join("");
console.log(`The reversed word is: ${reversedWord}`);





// 4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
const price1 = 10;
const price2 = 20;
const price3 = 30;
const totalPrice = price1 + price2 + price3;
console.log(`The total price is: ${totalPrice}`);


// 5.Find the average of 5 test scores stored in variables. Display the average with a message.
const score1 = 85;
const score2 = 90;
const score3 = 78;
const score4 = 88;
const score5 = 92;
const averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log(`The average score is: ${averageScore}`);

// 6.Create an array of your 5 favorite foods. Display the first and last items in the array.
const favouriteFoods = ["Pizza", "Burger", "Pasta", "Sushi", "Ice Cream"];
console.log(`The first food is: ${favouriteFoods[0]}`);
console.log(`The last food is: ${favouriteFoods[favouriteFoods.length - 1]}`);


// 7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.
favouriteFoods.unshift("Salad");
favouriteFoods.push("Tacos");
console.log("Updated favourite foods:", favouriteFoods);


// Create three arrays:


// 8.jssOne
const jssOne = ["John", "Jane", "Jack", "Jill", "James", "Jenny", "Jordan", "Jessica", "Jasmine", "Jared"];

// 9.jssTwo
const jssTwo = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ian", "Judy"];


// 10.jssThree
const jssThree = ["Liam", "Mia", "Noah", "Olivia", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Evelyn"]; 

// Each array must contain 10 student names as string values.

console.log("jssOne:", jssOne);
console.log("jssTwo:", jssTwo);
console.log("jssThree:", jssThree);



