if (confirm("Do you want to play the guessing game?")) {
let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let usernumber;

do {
    usernumber = prompt("Guess a number between 1 and 100 :");

    if (usernumber === null) {
        alert("You canceled the game. Goodbye!");
        break;  // Exit the loop if the user cancels.
    }

    usernumber = parseInt(usernumber);  // Convert input to a number.

    if (isNaN(usernumber) || usernumber < 1 || usernumber > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;  // Skip the rest of the loop if input is invalid.
    }

    chances += 1;

    if (usernumber < number) {
        alert("The required number is greater than your number. Try again!");
    } else if (usernumber > number) {
        alert("The required number is less than your number. Try again!");
    }
} while (usernumber !== number);

if (usernumber === number) {
    alert("Congrats! You guessed the number correctly.");
    alert("The number of guesses tried: " + chances);
    alert("Your score is: " + (100 - chances) + "%");
}

} else {
    alert("Maybe next time!")
}