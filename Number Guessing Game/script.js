function startGame() {
    let inputNumber = document.querySelector('#inputNumber').value;
    let inputSection = document.querySelector('#inputSection');
    let guessSection = document.querySelector('#guessSection');

    if (inputNumber >= 1 && inputNumber <= 10) {

        guessSection.style.display = 'block';
        inputSection.style.display = 'none';
        document.querySelector('#result').innerText = '';

    } else {
        document.querySelector('#result').innerText = 'Please enter a valid number between 1 and 10.';
    }
}

let guess = 5;

function checkGuess() {
    let x = document.querySelector('#guess').value;
    let y = document.querySelector('#inputNumber').value;
    let result = document.querySelector('#result');
    let celebration = document.querySelector('#celebration');
    let counter = document.querySelector("#counter")
    
    guess--;
    // show how many attmpts  left 
    counter.innerText = "LIFE left: "+ guess + " Out of " + "5";
    

    if (guess !== -1){

        // guess and actual number comparison
        if (x == y) {
            result.innerText = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT WITH " + guess + " LIFE LEFT";
            celebration.innerHTML = '<img width="300" height="300" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Ixdjdjcm5zZjI2MnFvbXl4MTUxZ2p5bW9oYW8ydWx3Z2ltOGNoNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MViYNpI0wx69zX7j7w/giphy.gif" alt="fireworks">';
            celebration.classList.remove('hidden');
        }

        /* If guessed number is greater than actual number or samller then actual number*/
        else if (x > y) {
            // guess--;
            result.innerText = "OOPS SORRY!! Hint: TRY A SMALLER NUMBER";
        }
        else {
            // guess--;
            result.innerText = "OOPS SORRY!! Hint: TRY A GREATER NUMBER";
        }
    }
    else{
        alert("Game Over");
        window.location.reload();
    }
}
