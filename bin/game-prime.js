import startGames from './src/index.js';
import readlineSync from 'readline-sync';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function isNumberPrime (number) {
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return num > i
}

const question = Math.round(Math.random()*100);
