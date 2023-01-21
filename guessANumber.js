function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerNum = Math.floor(Math.random() * 100) 
    let guess;

    let recursiveAsyncReadLine = function() {
        readline.question('Guess the number (0-100): ' , number => {
            guess = Number(number)
            if(guess <= 100 && guess>= 0) {
                if(guess == computerNum) {
                    console.log('You guessed it!')
                    return readline.close()
                } else if(guess > computerNum) {
                    console.log('Your number is higher than the needed number!')
                    recursiveAsyncReadLine()
                } else if(guess < computerNum) {
                    console.log("Your number is lower than the needed number!")
                    recursiveAsyncReadLine()
                } 
            }   else {
                    console.log("Invalid input! Please choose a number (0-100)")
                    recursiveAsyncReadLine()
                }
        }); 
    }
    recursiveAsyncReadLine()
    
}

guessANumber()