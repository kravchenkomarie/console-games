#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Games!');
console.log('May I have your name?');

const name = readlineSync.question('Your answer: ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => Math.round(Math.random()*100);

console.log('Question: ', getRandomNumber());

// function isEven(getRandomNumber) { return getRandomNumber % 2 === 0; }


const answer = readlineSync.question('Your answer: ');

function checkTheAnswer () {
    if (getRandomNumber % 2 === 0 && answer == 'yes') {
            return 'Correct!' 
    }
    }   else if (getRandomNumber % 2 !== 0 && answer == 'yes') {
            return `'yes' is wrong answer ;(. Correct answer was 'no'.
            Let's try again, ${name}!`
        } else if (getRandomNumber % 2 !== 0 && answer == 'no') {
            return 'Correct!'
        } else {
            return 'Something went wrong! Try again <3'
        }


console.log(checkTheAnswer(answer));
