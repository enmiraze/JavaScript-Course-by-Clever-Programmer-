
// Objects

const myIntro = (name, role, company) => {
    const person = {
        name: name,
        role: role,
        company: company,
        assets: 130000,
        liabilites: 50000,
        netWorth: function () {
            return this.assets - this.liabilites;
        }
    }
    const intro = `Hi, my name is ${person.name} and I am ${person.role} at ${person.company}. My net worth is $${person.netWorth()}`;
    return intro
}
// console.log(myIntro("Miraze", "Head of Design", "Ennova Research SRL"))

const frutta = ['🍏','🍐','🍉','🍓','🍌','🍇'];

// for (let i = 0; i < frutta.length; i++ ) {
//     console.log(i, frutta[i]);
// }

for (const frut of frutta) {
    // console.log(frut);
}



const numeri = [1, 2, 3, 4, 5, 6]

let numerix2 = [];

for (const numero of numeri) {
    numerix2.push(numero ** 2);
}

// console.log(numerix2);


