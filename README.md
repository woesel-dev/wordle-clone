# Build a Wordle Clone with JavaScript

---

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_elssq75n)

## Project Overview

### Goals and motivation

In this step, I downloaded an extension called live server which allows me to view the changes in my file when they are saved immediately which means i get instant feedback of my website. I used terminal and used commands like mkdir to make a directory or a folder and then entered that folder using cd, then i used touch to create the required html, css and js files. I then wrote a code for my index.html file and DOCTYPE is to tell the serrver that we are using the modern HTML5 standards and meta charset to ensure special characters display correctly. Then after opening the html file with the live server, it showed a blank page in my browser.


![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_xkxxe408)

## Building the Game Board

### Structuring the HTML and CSS

In this step, I'm mainly building the css of the website. I also added more information in the html.file, even linking the style.css file to the html file. I added a div method with other div methods in them like message, board which are later going to be added in the javascript file. I linked the script.js file to the html.file as well using <script src="script.js"></script>
Moving onto the css file, * resets all the margins and padding so that every browser starts from the same baseline. We used flex box on the body to keep it centered horizontally and vertically. We even added tile classes which have a flip animation using transform in transition and as well as a reveal class for the actual rotating animation.

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_k3yof9b8)

### CSS Grid layout and tile dimensions

I'm using CSS Grid to create a grid of 5 columns and 6 rows in the #board and the tiles are 62x62px in dimensions(width, height).

## Handling Keyboard Input

### Capturing and processing key events

In this step, I'm setting up a visual feedback for the user when they type in their keyboard and they see the instant feedback on the screen and create the tile grid in script.js file so that the tiles can be visible and have the animation on it.

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_wyzowik1)

### Input validation logic

When I press Enter with fewer than 5 letters, I noticed in the console log that there was an error that said can't find variable checkGuess

## Checking Guesses and Revealing Colors

### Comparing letters and applying color classes

In this step, We are going to work on the core logic of the game. First, I'm going to create a list of 50 five letter words. And a random word is selected from the list. We have a checkGuess() function that uses two pass algorithm to check whether a letter is in the correct tile or whether it exists in the target word but in a different tile. We handle duplicate letters by marking the first letter that is checked in order as null in the target array. So, when another duplicate letter is encountered, the check fails. We then add a flip animation which is timed to 300ms each tile starting from 0 for the first tile. We call the css function reveal for this animation as well. We also have a setTimeout that waits for the animation and goes to the next row and resets the currentTile to 0.


![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_8zry36am)

### Two-pass algorithm for duplicate letter handling

The first loop checks for the exact matches of position between the guess word and the target word. It is only checking for green tiles. The second loop then goes on to check for tiles that may be present in the target word but in a different position. If a guessed letter exists in the target word but is in a different postion, it is marked as present in the array and its value set to "present". If no such letter is present in the target word(or array), it is marked as absent and its value is set to "absent".

## Win/Lose Detection and Game Over

### Detecting outcomes and displaying messages

In this step, I'm setting up the win/lose detection after each guess is revealed. This is handled inside the setTimeOut inside the reveal function. And the play button is revealed after the the game is won or lost which restarts the webpage to reset the state of script.js

![Image](https://learn.nextwork.org/heartfelt_red_happy_emblica/uploads/c82674b0-0fc3-4ad8-a0aa-fab819883043_1qaug9on)

### Preventing input after game over

After the game ends, pressing keys does nothing because gameOver is set to true and it goes to handleKeyPress which handles the key presses, every future key press is ignored automatically.


## Adding a Virtual Keyboard

### Priority system for letter status tracking

In this project extension, I used a priority system, 3 for correct, 2 for present, 1 for absent,  that checks whether the current letter's priority is higher or lower than the new status priority. If the new staus is lower than the current priority, it doesn't change the priority and the color remains the same.

## Reflections and Takeaways

### Key tools and concepts learned

The key tools I used include html, css, javascript. Key concepts I learnt include capturing the keyboard input with visual feedabck on the screen as they type or delete a letter. The main algorithm is the two pass algorithm we used to check whether the guess matches with the target word using two loops. We then had a win/lose detection function which was embedded inside already defined as setTimeOut in the reveal function. I learnt about how javascript code can be connected to the css file as well.

### Time and challenges

This project took me approximately. 2 days to complete. The most challenging part was the two pass algorithm. It took a while for me to understand how it worked step by step.

### Personal learning goals

I did this project today to learn Javascript and some of its concepts. I also watned to refresh my knowledge on HTML and CSS. Another skill I want to learn is using APIs with the web browser.

---


