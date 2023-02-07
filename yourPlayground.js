
const introducer = (name, role) => {

    const person = {
        name: name,
        role: role
    }

    const intro = `Hi, my name is ${person.name} and I am ${person.role} at Ennova Research SRL`;
    return intro
}

console.log(introducer("Miraze", "Head of Design"))
