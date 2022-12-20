import readlineSync from 'readline-sync';
import { name } from './games.js';

function isNumberPrime () {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

   for (let i = 0; i < 3; i++) {
    const randomNumber = Math.round(Math.random()*100);
    console.log(`Question: ${randomNumber}`);
    let userAnswer = readlineSync.question('Your answer: ');

    let isPrime = randomNumber => {
        for (let i = 2; i < randomNumber; i++) {
            if(randomNumber % i === 0) {
            return false;
            }
        }
        return randomNumber > 1;
    }

      if (isPrime === false && userAnswer === 'no') {
        console.log('Correct!')
      } else if(isPrime == true && userAnswer === 'yes') {
        console.log('Correct!')
      } else if(isPrime === true && userAnswer === 'no' || isPrime === false && userAnswer == 'yes') {
        return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isPrime(randomNumber)}.
        Let's try again, ${name}!`)
      }
    }
return console.log(`Congratulations, ${name}!`)
}

export default isNumberPrime;
