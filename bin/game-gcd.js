import readlineSync from 'readline-sync';
import { name } from './games.js';

function findNod() {

function nod (x, y) {
    if (y > x) return nod(y, x);
    if (!y) return x;
    return nod(y, x % y);
}
console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i++) {
    let num1 = Math.round(Math.random()*100);
    let num2 = Math.round(Math.random()*100);
    console.log(`Question: ${num1} ${num2}`);

    const result = nod(num1, num2);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer == result) {
        console.log('Correct!')
    } else {
        return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.
        Let's try again, ${name}!`)
    }
}
return console.log(`Congratulations, ${name}!`)
}

export default findNod;



