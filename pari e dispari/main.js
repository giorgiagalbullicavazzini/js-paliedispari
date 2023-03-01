'use strict';

////////////
// Functions
////////////

// Creation of a function able to let the user proceed with the second step of the game
function nextStep () {
    const buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.classList.add('hidden');

    const textContainer = document.querySelector('.text-container');
    textContainer.classList.remove('hidden');
}

// With a function, we can generate a random number between 1 and 5
function randomGenerator () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

// With the creation of a second function, we can then do the sum of the two numbers
function finalNumber (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// With a third function, we can finally check if the sum is odd or even
function oddEvenCheck (num) {
    if (num % 2 === 0) {
        return 0;
    } else {
        return 1;
    }
}

////////////
// Main
////////////

// Thanks to two buttons, the user can decide between odd and even
const even = document.getElementById('even');
const odd = document.getElementById('odd');

let i = 0;

even.addEventListener('click',
    function() {
        nextStep();
    })

odd.addEventListener('click',
    function() {
        i = 1;
        nextStep();
    })

// With an input type text, the user can choose a number between 1 and 5
const chooseNumber = document.getElementById('choose');

chooseNumber.addEventListener('click',
    function() {
        const userNumber = Number(document.getElementById('user-number').value);

        if (userNumber > 0 && userNumber <= 5) {
            // Recalling the functions, the result will be screen printed and the winner will be revealed
            const cpuNumber = randomGenerator();
            const resultNumber = finalNumber(userNumber, cpuNumber);
            const result = oddEvenCheck(resultNumber);

            if (result === i) {
                // User wins
                alert(`Hai scelto ${userNumber} e il computer ha scelto ${cpuNumber}. \nLa somma dei due valori è ${resultNumber}. Hai vinto!`);
            } else {
                // User loses
                alert(`Hai scelto ${userNumber} e il computer ha scelto ${cpuNumber}. \nLa somma dei due valori è ${resultNumber}. Hai perso :(`);
            }
        } else {
            alert('Scegli un numero tra 1 e 5!');
        }
    })