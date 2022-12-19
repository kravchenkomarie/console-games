import readlineSync from 'readline-sync';
import { name } from './games.js';

function calculation () {

    for (let i = 0; i < 3; i++) {
     console.log('What is the result of the expression?');

     let firstNum = Math.round(Math.random()*100);
     let secondNum = Math.round(Math.random()*100);
     let signs = ['+', '-', '*'];
     let sign = Math.floor(Math.random() * signs.length);
     let operation = `${firstNum} ${signs[sign]} ${secondNum}`;
     let result = eval(operation);

     console.log(`Question: ${operation}`);

     let userAnswer = readlineSync.question('Your answer: ');
    
     if (userAnswer == result) {
        console.log('Correct!');
     } else {
        return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}. \nLet's try again, ${name}!`)
     }
    }
return console.log(`Congratulations, ${name}!`)

}

export default calculation;