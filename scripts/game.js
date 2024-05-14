function handelKeyboardButtonPress(event) {
    const playerPress = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if (playerPress === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        const currentLife = getTextElementValueById('current-life')
        const newLife = currentLife - 1;
        if (newLife === 0){
            gameOver();
        }else{
            setTextElementValueById('current-life', newLife);
            
        }
        

    }
}
document.addEventListener('keyup', handelKeyboardButtonPress);

function continueGame() {
    const alphabet = generateRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}