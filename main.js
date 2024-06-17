import './style.css';
import getRandomWord from './src/randomWord';
import setSharkImage from './src/sharkImage';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

setSharkImage(document.querySelector('#shark-img'), numWrong);

function initSharkwords() {
  let numWrong = 0;
  const word = getRandomWord();

  setSharkImage(element, imageIdx)

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
