function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerNum;
    let guess;
    let answer;
    let guessTheNumber;
    let upperLimit;

    
    let chooseALevel = function() {
        readline.question("Choose a level (1-10): ", chosenLevel =>{
            switch(chosenLevel) {
                case "1": guessTheNumber = "Guess the number (0-100): "
                        computerNum = Math.floor(Math.random() * 100);
                        upperLimit = 100
                        recursiveAsyncReadLine(); break;
                case "2": guessTheNumber = "Guess the number (0-200): " 
                        computerNum = Math.floor(Math.random() * 200);
                        upperLimit = 200
                        recursiveAsyncReadLine(); break;
                case "3": guessTheNumber = "Guess the number (0-300): "
                        upperLimit = 300
                        computerNum = Math.floor(Math.random() * 300);
                        recursiveAsyncReadLine(); break;
                case "4": guessTheNumber = "Guess the number (0-400): ";
                        upperLimit = 400
                        computerNum = Math.floor(Math.random() * 400);
                        recursiveAsyncReadLine(); break;
                case "5": guessTheNumber = "Guess the number (0-500): ";
                        upperLimit = 500
                        computerNum = Math.floor(Math.random() * 500);
                        recursiveAsyncReadLine(); break;
                case "6": guessTheNumber = "Guess the number (0-600): ";
                        upperLimit = 600 
                        computerNum = Math.floor(Math.random() * 600);
                        recursiveAsyncReadLine(); break;
                case "7": guessTheNumber = "Guess the number (0-700): ";
                        upperLimit = 700
                        computerNum = Math.floor(Math.random() * 700);
                        recursiveAsyncReadLine(); break;
                case "8": guessTheNumber = "Guess the number (0-800): ";
                        upperLimit = 800
                        computerNum = Math.floor(Math.random() * 9);
                        recursiveAsyncReadLine(); break;
                case "9": guessTheNumber = "Guess the number (0-900): "
                        upperLimit = 900
                        computerNum = Math.floor(Math.random() * 900);
                        recursiveAsyncReadLine(); break;
                case "10": guessTheNumber = "Guess the number (0-1000): "
                        upperLimit = 1000
                         computerNum = Math.floor(Math.random() * 1000);
                         recursiveAsyncReadLine(); break;
                default: console.log("Invalid input!"); chooseALevel()
            }
        });
    }

    chooseALevel()

    let doYouWantToContinue = function() {
        readline.question("Do you want to continue (Y/N): ", playerAnswer =>{
            answer = playerAnswer

            if(answer=="Y") {
                console.log("Let's play again!")
                computerNum = Math.floor(Math.random() * 100)
                chooseALevel()
            } else if(answer=="N") {
                console.log("See you next time!")
                return readline.close()
            }
        });
    }

    let recursiveAsyncReadLine = function() {
        readline.question(guessTheNumber , number => {
            guess = Number(number)
            if(guess <= upperLimit && guess>= 0) {
                if(guess == computerNum) {
                    console.log('You guessed it!')
                    doYouWantToContinue()
                } else if(guess > computerNum) {
                    console.log('Your number is higher than the needed number!')
                    recursiveAsyncReadLine()
                } else if(guess < computerNum) {
                    console.log("Your number is lower than the needed number!")
                    recursiveAsyncReadLine()
                } 
            }   else {
                    console.log(`Invalid input! Please choose a number (0-${upperLimit})`)
                    recursiveAsyncReadLine()
                }
        }); 
    }
    recursiveAsyncReadLine()
    
}

guessANumber()