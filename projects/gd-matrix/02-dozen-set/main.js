let addedNumbers = []; // array to store added numbers
let spins = 0;
let input = document.getElementById("number-input");

// Arrays to track dozens
let dozen1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let dozen2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let dozen3 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

function addNumber() {

    // Number Input
    let number = input.value;
    if (!number) {
        alert("Please enter a number between 1 and 36.");
        return;
    }

    addedNumbers.unshift(number); // add number to the beginning of the array
    input.value = "";
    updateAddedNumbers();

    let dozen1Count = document.getElementById("dozen1-count");
    let dozen2Count = document.getElementById("dozen2-count");
    let dozen3Count = document.getElementById("dozen3-count");

    // Check which dozen the number belongs to
    if (dozen1.includes(parseInt(number))) {
        dozen1Count.innerHTML++;
    } else if (dozen2.includes(parseInt(number))) {
        dozen2Count.innerHTML++;
    } else {
        dozen3Count.innerHTML++;
    }
    spins++;

    if (spins === 3) {
        spins = 0;
        let table = document.getElementById("dozen-table");
        let row = table.insertRow();
        let dozen1Cell = row.insertCell(0);
        let dozen2Cell = row.insertCell(1);
        let dozen3Cell = row.insertCell(2);
        dozen1Cell.innerHTML = dozen1Count.innerHTML;
        dozen2Cell.innerHTML = dozen2Count.innerHTML;
        dozen3Cell.innerHTML = dozen3Count.innerHTML;
        dozen1Count.innerHTML = 0;
        dozen2Count.innerHTML = 0;
        dozen3Count.innerHTML = 0;
    }

}

// Insert numbers by pressing 'Enter'
input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        addNumber(e);
    }
});

// Last numbers
function updateAddedNumbers() {
    let addedNumbersElem = document.getElementById("added-numbers");
    addedNumbersElem.innerHTML = addedNumbers.join(", "); // join array with commas
}
