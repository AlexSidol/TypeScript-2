const buttonDeBug = document.querySelector('#buttonID')!;

if (buttonDeBug) {
  buttonDeBug.addEventListener('click', () => {
    console.log('Click');
  });
}