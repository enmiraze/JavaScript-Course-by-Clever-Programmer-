const letterFrequency2 = (phrase) => {
    // letterFrequency ('haha') 👉 {'h': 2, 'a': 2}

    // console.log(phrase)

    // make a 'frequency' object {}
    let frequency = {}

    for (const letter of phrase) {
       // check if letter exists in frequency
       if (letter in frequency) {
            frequency[letter] += 1
       } else {
            frequency[letter] = 1
       }
       // increment the value by +1 
       // otherwise, set the value to 1
    }

    return frequency;
}

// console.log(letterFrequency2('lhhh'));

// incremental operators
// ++, --, +=, +=


const wordFrequency2 = (phrase) => {
    let frequency = {}
    let words = phrase.split('');


    console.log(words);
    return frequency;
}

console.log(wordFrequency2('lol what lol'));