'use strict';

////////////
// Functions
////////////

// With a function, we can compare the results of the two loops
function compare (array1, array2) {
    // IF these two are equal, the word is a palindrome one
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return alert('La parola NON è palindroma.');
        }
    }

    return alert('La parola è palindroma.');
}

////////////
// Main
////////////

// Thanks to an input type text, the user can type a word
const button = document.querySelector('button');

button.addEventListener ('click',
    function() {
        const input = document.getElementById('word').value;

        if (input.length < 2) {
            console.log(input);
            alert('La parola deve contenere almeno 2 caratteri.');
        } else {
            // The word will be saved in JS into an empty array
            const word = [];
            const drow = [];

            // With a `for` loop, we can check all the letters contained in the given word
            for (let i = 0; i < input.length; i++) {
                word.push(input[i]);
            }

            // At the same time, we can also check all the letters from the end to the beginning
            for (let i = input.length - 1; i >= 0; i--) {
                drow.push(input[i]);
            }

            compare(word, drow);
        }
    })