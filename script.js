const emojis = ['😀','🐱','🌟','🍕','🎉','🚀','🎮','⚽️'];
let cards = [...emojis, ...emojis];
cards.sort(() => Math.random() - 0.5);

const grid = document.getElementById('gameGrid');
let first, second;
let lock = false;

cards.forEach(emoji => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerText = emoji;

  card.addEventListener('click', () => {
    if (lock || card.classList.contains('matched') || card === first) return;

    card.classList.add('flipped');
    if (!first) {
      first = card;
    } else {
      second = card;
      lock = true;

      if (first.innerText === second.innerText) {
        first.classList.add('matched');
        second.classList.add('matched');
        reset();
      } else {
        setTimeout(() => {
          first.classList.remove('flipped');
          second.classList.remove('flipped');
          reset();
        }, 800);
      }
    }
  });

  grid.appendChild(card);
});

function reset() {
  [first, second] = [null, null];
  lock = false;
}
