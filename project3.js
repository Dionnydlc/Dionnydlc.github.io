let highScore = 0;
console.log(highScore);

let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let output2 = document.getElementById("outputtext2");
let output3 = document.getElementById("outputtext3");
let question1 = document.getElementById("question1");
let box = document.getElementById("box");
let i;
let number1 = Math.floor(Math.random() * 101);
function playing(i) {
    
    btn.addEventListener('click', function () {
        let input = document.getElementById('userInput').value;
        console.log(number1);
        console.log(input);

        if (i == 1) {
            output.innerHTML = "You lost. Too many attemps.";
            output3.innerHTML = "Score:0";
        }
        else if (input < 0 || input > 100) {
            output.innerHTML = "The number must be between 0 and 100";

        }
        else if ((Number(input - 1)) !== (Number(input) - 1)) {
            output.innerHTML = "Your answer must be a number";
        }
        else if (input == number1) {
            output.innerHTML = "Thats right!";
            if (i > highScore) {
                highScore = i;
                output2.innerHTML = "High score:" + highScore;
            }
            question1.innerHTML = input + "!";
            box.style.background = 'green';

        }
        else if (input < number1) {
            output.innerHTML = "That's too low";
            i = i - 1;
            output3.innerHTML = "Score:" + (i);

        }
        else if (input > number1) {
            output.innerHTML = "That's too high";
            i = i - 1;
            output3.innerHTML = "Score:" + (i);

        }

        //playing2()
        console.log(i);
        console.log(number1);
        console.log(typeof (input))
        //output3.innerHTML = "Score:" + (i);

    })
}


playing(10);
button2.addEventListener('click', function () {
    output3.innerHTML = "Score:10";
    i = 10;
    number1 = Math.floor(Math.random() * 101);
    box.style.background = 'linear-gradient(to top right, #E43611, #1748B4)';
    output.innerHTML = "Enter number";
    question1.innerHTML = "?";
    console.log(i);
    console.log(number1);
    playing(10);
})
