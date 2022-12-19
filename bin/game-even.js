import readlineSync from 'readline-sync';
import { name } from './games.js';

function isAnswerRight () {

    for (let i = 0; i < 3; i++) {
     console.log('Answer "yes" if the number is even, otherwise answer "no".');
     let getRandomNumber = Math.round(Math.random()*100);
     console.log(`Question: ${getRandomNumber}`);
     let userAnswer = readlineSync.question('Your answer: ');
 
     if (userAnswer === 'yes' && getRandomNumber % 2 === 0) {
         console.log('Correct!');
 
     } else if (userAnswer === 'yes' && getRandomNumber % 2 !== 0) {
         console.log(`'yes' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
        
     } else if (userAnswer === 'no' && getRandomNumber % 2 !== 0) {
         console.log('Correct!')
       
     } else if (userAnswer === 'no' && getRandomNumber % 2 === 0) {
        return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`)
      
     } else {
        return console.log('Something went wrong! Try again, please <3')
     }
     }
return console.log(`Congratulations, ${name}!`)
}
 
export default isAnswerRight;