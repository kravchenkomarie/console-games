// #!/usr/bin/env node
// import readlineSync from 'readline-sync';

// const count = 3;

// const startGames = (gameQuestion, generateRound) => {
//   console.log('Welcome to the Brain Games!');
//   const name = readlineSync.question('May I have your name? : ');
//   console.log(`Hello ${name}!`);
//   console.log(gameQuestion);
//   for (let i = 1; i <= count; i += 1) {
//     const { answer, question } = generateRound();
//     console.log(question);
//     const userAnswer = readlineSync.question('Your answer: ');
//     if (answer === userAnswer) {
//       console.log('Correct!');
//     } else {
//       console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}" .`);
//       console.log(`Let's try again, ${name}!`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${name}!`);
// };

// export default startGames;