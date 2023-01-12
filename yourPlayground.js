function sum(a, b) {
    return a + b;
}

function calculateFoodTotal (food, tip){
    const tipPercentage = tip / 100;
    const tipAmount = food * tipPercentage;
    const total = sum(food, tipAmount);

    return total;
}

// console.log(calculateFoodTotal(300, 20));

// Arrays






