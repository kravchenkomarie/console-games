import startGames from '../src/index.js';

const gameQuestion = 'What number is missing in the progression?';
const progressionLength = 10;

export const generateRound = () => {
    const randomNumber = Math.round(Math.random()*100);
    const progression = [];
    
    for (let i = 1; i <= progressionLength; i += 1) {
    const current = randomNumber * i;
    progression.push(current);
    }

    const lostNumber = randomNumber(0, progressionLength - 1);
    const answer = String(progression[lostNumber]);
    progression[lostNumber] = '..';
    const question = progression.join('  ');
    return { answer, question };
    }

export default () => startGames(gameQuestion, generateRound);
