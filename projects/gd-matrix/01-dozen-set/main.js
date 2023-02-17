
let addedNumbers = []; // array to store added numbers
let spins = 0;
let input = document.getElementById("number-input");

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

    if (number <= 12 && number >= 1) {
        dozen1Count.innerHTML++;
    } else if (number <= 24 && number >= 12) {
        dozen2Count.innerHTML++;
    } else {
        dozen3Count.innerHTML++;
    }
    spins++;

    if (spins === 3) {
        spins = 0;
        let table = document.getElementById("dozen-table");
        let row = table.insertRow();
        let dozen1 = row.insertCell(0);
        let dozen2 = row.insertCell(1);
        let dozen3 = row.insertCell(2);
        dozen1.innerHTML = dozen1Count.innerHTML;
        dozen2.innerHTML = dozen2Count.innerHTML;
        dozen3.innerHTML = dozen3Count.innerHTML;
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