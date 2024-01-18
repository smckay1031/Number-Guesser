let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// Generates target number for game:
const generateTarget = () => {
    let target = Math.floor(Math.random()*10);
    return target
};

// Get absolute distance 
const getAbsoluteDistance = ( guess, target) => {
    if ((guess >= 0) && ( guess <= 10)) {
            return Math.abs(guess - target);
    } else {
        return alert('User input Error! Number must be between 0-9');
        }
 };


// Compares guesses by computer and user to return if user/human == winner is true for false:
const compareGuesses = (currentHumanGuess, computerGuess, target) => {

    if (getAbsoluteDistance(computerGuess, target) == getAbsoluteDistance(currentHumanGuess, target)) {
        return true;
    }
    else if (getAbsoluteDistance(computerGuess, target) > getAbsoluteDistance(currentHumanGuess, target)) {
        return true;
    }
    else if (getAbsoluteDistance(computerGuess, target) < getAbsoluteDistance(currentHumanGuess, target)) {
            return false;
        }
};
// Updates score by taking string of winner and updating their socre variable
const updateScore = string => {
    if (string === 'human'){
        humanScore += 1
    };
    if (string === 'computer') {
        computerScore += 1
    };

};

//Advance and update round:

const advanceRound = () => {
    currentRoundNumber += 1
}; 

