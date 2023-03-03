const { rawListeners } = require("node:process");
const readline = require("node:readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let secretNumber;

let askGuess = function() { r1.question("Enter a guess...", enteredNum => {
    if (checkGuess(Number(enteredNum))) {
        console.log("You win!")
    }
    else return askGuess();
    r1.close();
})
}


let checkGuess = function(number) {
    if ( number > secretNumber) {
        console.log ("Too high")
        return false;
    }
    if ( number < secretNumber) {
        console.log ("Too low")
        return false;
    }
    if ( number === secretNumber) {
        console.log ("Correct!")
        return true;
    }
}

let randomInRange = (min, max) => {
    return Math.floor((Math.random() * max) + min);
}


let askRange = function() {
    r1.question("What is your minimum number? ", minimum => {
        let min = Number(minimum);
        r1.question("What is your maximum number? ", maximum => {
        let max = Number(maximum);
        console.log("Your range is between " + min + " and " + max + ".")
        secretNumber = randomInRange();
        r1.close();
        });
    });

}

randomInRange();
