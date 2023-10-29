# PRODIGY_WD_03
# Tic-Tac-Toe Web Application

This is a classic Tic-Tac-Toe game web application built using HTML, CSS, and JavaScript. Users can play against each other or against an AI opponent, aiming to get three markers in a row to win the game.

![Tic-Tac-Toe Web Application](tic-tac-toe-demo.gif)

## Table of Contents

1. [Demo](#demo)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Customization](#customization)
6. [License](#license)

## Demo

You can see a live demo of this Tic-Tac-Toe web application here: [Tic-Tac-Toe Demo](https://prodtictactoe.netlify.app/)

## Features

- **Player vs. Player:** Two players can take turns to play against each other.
- **Player vs. AI:** Users can play against an AI opponent with adjustable difficulty.
- **Winning Conditions:** The game checks for winning conditions (three markers in a row) and declares a winner.
- **Responsive Design:** The application is responsive and works well on various screen sizes and devices.

## Installation

To use this Tic-Tac-Toe web application in your project, follow these steps:

1. Clone the repository to your local machine or download the ZIP file.

```bash
git clone <repository-url>
```

2. Include the necessary HTML, CSS, and JavaScript files in your project.

```html
<!-- Add this to your HTML file -->
<link rel="stylesheet" type="text/css" href="style.css">
<script src="script.js"></script>
```

3. Copy the HTML structure from the provided `index.html` file and paste it into your own HTML file where you want the Tic-Tac-Toe game to appear.

## Usage

The Tic-Tac-Toe web application is easy to integrate into any HTML-based project. Here's how to get started:

1. Include the necessary HTML, CSS, and JavaScript files in your project as described in the installation section.

2. Place the Tic-Tac-Toe HTML structure in your HTML file where you want the game to appear.

```html
<div class="tic-tac-toe">
  <div class="board">
    <!-- The game board will be generated here -->
  </div>
  <div class="status" id="status">Player X's turn</div>
  <button class="restart-button" id="restartButton" onclick="restartGame()">Restart Game</button>
</div>
```

3. Customize the styles in the `style.css` file to match your project's design.

4. Customize the JavaScript behavior in the `script.js` file to suit your preferences, such as adjusting the AI difficulty or adding additional functionality.

## Customization

You can customize various aspects of the Tic-Tac-Toe web application to fit your project's requirements:

- **Styling:** Adjust the styles (colors, fonts, sizes, etc.) in the `style.css` file to match your project's design.

- **AI Difficulty:** Modify the JavaScript in the `script.js` file to adjust the AI difficulty level or add different AI strategies.

- **Additional Features:** Extend the game with additional features, such as keeping a score, adding animations, or implementing a timer.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to use and modify this Tic-Tac-Toe web application in your projects. If you have any questions or encounter issues, please open an issue on GitHub or contact the project contributors.

Enjoy your Tic-Tac-Toe game!
