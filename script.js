let lucasHeight;
let lucasMass;
let lucasBMI;
let johnHeight;
let johnMass;
let johnBMI;

lucasHeight = 1.88;
lucasMass = 95;
lucasBMI = lucasMass / lucasHeight ** 2;

johnHeight = 1.76;
johnMass = 85;
johnBMI = johnMass / johnHeight ** 2;

let lucasHigherBMI = Boolean(lucasBMI > johnBMI);


console.log("Lucas and John are friends, Lucas is " + lucasHeight + "m tall and John is " + johnHeight + "m tall. So John has higher BMi than Lucas, that is " + lucasHigherBMI);
