#!/usr/bin/env node
import readlineSync from 'readline-sync';
import isAnswerRight from './game-even.js';
import calculation from './game-calc.js';


console.log('Welcome to the Games!');
console.log('May I have your name?');

export const name = readlineSync.question('Your answer: ');

console.log(`Hello, ${name}!`);

isAnswerRight();
calculation();
