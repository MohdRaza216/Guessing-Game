🎲 Number Guessing Game
A simple number guessing game built using JavaScript! In this game, the user tries to guess a randomly generated number between 1 and 100.
After each attempt, the game provides hints on whether the guessed number is too low or too high. The goal is to guess the correct number in as few tries as possible.

🚀 Features
Generates a random number between 1 and 100.
Provides hints to help the user guess correctly.
Displays the number of attempts made and calculates a score.
Handles invalid inputs and cancellation gracefully.

🛠️ Technologies Used
HTML (for structure, if needed)
JavaScript (for game logic)

📋 How to Run the Project Locally
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/number-guessing-game.git
Navigate to the project directory:

bash
Copy code
cd number-guessing-game
Open the HTML file (if present) or create one:
You can create a simple index.html file if you don’t have one:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
Run the code:
Open the index.html file in your browser or use Live Server in VSCode:

Option 1: Right-click on the HTML file and select Open with Live Server.
Option 2: Open the HTML file directly in a web browser.

🎮 How to Play
A random number between 1 and 100 is generated at the start of the game.
The user is prompted to guess the number.
After each attempt:
If the guess is too low, the game will display:
"The required number is greater than your number. Try again!"
If the guess is too high, the game will display:
"The required number is less than your number. Try again!"
If the user clicks Cancel, the game will exit.
Upon guessing the correct number:
The game will display the number of guesses made.
A score will be calculated: Score = (100 - chances) %.

📝 Code Snippet
Here’s the core logic of the game:

javascript
Copy code
let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let usernumber;

do {
    usernumber = prompt("Guess a number between 1 and 100 :");

    if (usernumber === null) {
        alert("You canceled the game. Goodbye!");
        break;
    }

    usernumber = parseInt(usernumber);

    if (isNaN(usernumber) || usernumber < 1 || usernumber > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
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

📂 Project Structure
bash
Copy code
number-guessing-game/
│
├── index.html         # (Optional) HTML file to launch the game
├── script.js          # JavaScript code with game logic
└── README.md          # Project documentation

🏆 Future Improvements
Add a graphical user interface (GUI) to replace the prompt() dialogs.
Implement difficulty levels (easy, medium, hard).
Track high scores using local storage or a database.
Provide a restart option at the end of the game.

🤝 Contribution
Feel free to fork this repository, make changes, and submit a pull request! All contributions are welcome.

📜 License
This project is licensed under the MIT License.

📧 Contact
For any questions or suggestions, reach out to:
Your Name – Your Email

Feel free to replace placeholders (like Your Name or your-username) with your information.

This README.md will guide users on how to set up and run your project while also encouraging contributions.
