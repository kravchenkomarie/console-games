import readlineSync from 'readline-sync';
import { name } from './games.js';

    function findProgression () {

   for (let i = 0; i < 3; i++) {
    console.log('What number is missing in the progression?');

    const progressionLength = 10;
    const randomNumber = Math.round(Math.random()*100);
    const randomLostNumber = Math.floor(Math.random() * 10);
    const progression = [];
    
    for (let i = 1; i <= progressionLength; i += 1) {
    const current = randomNumber * i;
    progression.push(current);
    }

    const lostNumber = progression[randomLostNumber];
    progression[randomLostNumber] = '..';
    const progressionString = progression.join(' ')
    console.log(`Question: ${progressionString}`);


    const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer == randomLostNumber) {
        console.log('Correct!');
     } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${lostNumber}. \nLet's try again, ${name}!`)
     }
    }
return console.log(`Congratulations, ${name}!`)
}


export default findProgression;

