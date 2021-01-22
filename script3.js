let nets1 = 97;
let nets2 = 112;
let nets3 = 101;
let avgNets = (nets1 + nets2 + nets3) / 3;

let knicks1 = 109;
let knicks2 = 95;
let knicks3 = 106;
let avgKnicks = (knicks1 + knicks2 + knicks3) / 3;

if (avgKnicks > avgNets && avgKnicks >= 100) {
    console.log("Knicks win!");
}

else if (avgKnicks < avgNets && avgNets >= 100) {
    console.log("Nets Win!")
}

else if (avgKnicks == avgNets && (avgKnicks && avgNets) >= 100) {
    console.log("There's a draw!")
}

else {
    console.log("There's no winner")
}

//Part 2

let bill = 430;
let tip;
let totalCost = bill + tip;

switch (true) {
    case ((bill >= 30) && (bill <= 300)):
        tip = bill * 0.15;
        totalCost = bill + tip;
        console.log("Bill:" + bill + " tip:" + tip + " Total cost:" + totalCost);
        break;

    case ((bill < 30) || (bill > 300)):
        tip = bill * 0.2;
        totalCost = bill + tip;
        console.log("Bill:" + bill + " tip:" + tip + " Total cost:" + totalCost);
        break;
}

//part 3

let temp;
let temp2;

function celsiusToFahrenheit(temp) {
    let newTemp = (1.8 * temp) + 32;
    return (newTemp)
    console.log(newTemp);
}

function fahrenheitToCelsius(temp2) {
    let newTemp2 = (temp2 - 32) * (5 / 9);
    return (newTemp2)
    console.log(newTemp2);
}

celsiusToFahrenheit(100);

fahrenheitToCelsius(50);

