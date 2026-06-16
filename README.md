# Build a Wordle Clone with JavaScript

---

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_elssq75n)

## Project Overview

### Goals and motivation

In this step, I downloaded an extension called Live Server which lets me view the changes in my file when they are saved immediately, which means I get instant feedback on my website. I used the terminal and commands like mkdir to make a folder, then entered that folder using cd, and used touch to create the required HTML, CSS, and JS files. I then wrote the code for my index.html file. DOCTYPE is to tell the browser that we are using modern HTML5 standards and meta charset ensures special characters display correctly. Then after opening the HTML file with Live Server, it showed a blank page in my browser.

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_xkxxe408)

## Building the Game Board

### Structuring the HTML and CSS

In this step, I'm mainly building the CSS of the website. I also added more to the HTML file, including linking the style.css file to it. I added a div with other divs inside it like message and board, which are later going to be referenced in the JavaScript file. I linked the script.js file to the HTML file as well using <script src="script.js"></script>. Moving onto the CSS file, * resets all the margins and padding so that every browser starts from the same baseline. I used flexbox on the body to keep everything centered horizontally and vertically. I also added tile classes which have a flip animation using transform and transition, as well as a reveal class for the actual rotating animation.

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_k3yof9b8)

### CSS Grid layout and tile dimensions

I'm using CSS Grid to create a grid of 5 columns and 6 rows in the #board and the tiles are 62x62px in dimensions (width, height).

## Handling Keyboard Input

### Capturing and processing key events

In this step, I'm setting up visual feedback for the user when they type on their keyboard — they see instant feedback on the screen. I also created the tile grid in script.js so that the tiles are visible and have the animation on them.

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_wyzowik1)

### Input validation logic

When I pressed Enter with fewer than 5 letters, I noticed in the console that there was an error saying checkGuess is not defined.

## Checking Guesses and Revealing Colors

### Comparing letters and applying color classes

In this step, we are working on the core logic of the game. First, I created a list of 50 five-letter words and a random word is selected from the list. The checkGuess() function uses a two-pass algorithm to check whether a letter is in the correct position or whether it exists in the target word but in a different position. We handle duplicate letters by marking the first matched letter as null in the target array, so when another duplicate letter is encountered, the check fails. We then add a flip animation timed at 300ms per tile, starting from 0 for the first tile. We call the CSS reveal class for this animation as well. We also have a setTimeout that waits for the animation to finish before moving to the next row and resetting currentTile to 0.


![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_8zry36am)

### Two-pass algorithm for duplicate letter handling

The first loop checks for exact position matches between the guess word and the target word — it is only looking for green tiles. The second loop then checks for letters that may exist in the target word but in a different position. If a guessed letter exists in the target word but is in a different position, it is marked as present in the array and its value set to "present". If no such letter is present in the target word (or array), it is marked as absent and its value is set to "absent".

## Win/Lose Detection and Game Over

### Detecting outcomes and displaying messages

In this step, I'm setting up the win/lose detection after each guess is revealed. This is handled inside the setTimeout inside the reveal function. The play again button is revealed after the game is won or lost, which restarts the webpage to reset the state of script.js.

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_1qaug9on)

### Preventing input after game over

After the game ends, pressing keys does nothing because gameOver is set to true. It goes to handleKeyPress which handles the key presses, and every future key press is ignored automatically.


## Adding a Virtual Keyboard

### Priority system for letter status tracking

In this project extension, I used a priority system — 3 for correct, 2 for present, 1 for absent — that checks whether the current letter's priority is higher or lower than the new status priority. If the new status is lower than the current priority, it doesn't update and the color stays the same.

## Reflections and Takeaways

### Key tools and concepts learned

The key tools I used include HTML, CSS, and JavaScript. Key concepts I learned include capturing keyboard input with visual feedback on the screen as the user types or deletes a letter. The main algorithm is the two-pass algorithm we used to check whether the guess matches the target word using two loops. We also had a win/lose detection function embedded inside the setTimeout in the reveal function. I also learned how JavaScript can interact with and manipulate CSS.

### Time and challenges

This project took me approximately 2 days to complete. The most challenging part was the two-pass algorithm. It took a while to understand how it worked step by step.

### Personal learning goals

I did this project to learn JavaScript and some of its core concepts. I also wanted to refresh my knowledge of HTML and CSS. Another skill I want to learn next is using APIs with the browser.

---


