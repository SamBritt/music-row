const labels = [
    {
        labelName: "JumpStop Records",
        genre: ["Funk", "Rap"],
        signee: []
    },
    {
        labelName: "Chatten Records",
        genre: ["Country", "Bluegrass"],
        signee: []
    },
    {
        labelName: "Polar Records",
        genre: ["Pop"],
        signee: []
    }
]

// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

let createArtist = (name, genre, age) => ({
    name: name,
    genre: genre,
    age: age,
    intro() {
        console.log(`${name} is a ${genre} artist and is ${age} years old`)
    }
})

labels[1].signee.push(createArtist("Bruce Atikins", "Country", 23))
labels[2].signee.push(createArtist("Jensen Brown", "Pop", 20))
labels[0].signee.push(createArtist("Dre Funkz", "Funk", 25))
labels[0].signee.push(createArtist("Dusta Grimes", "Rap", 21))
labels[1].signee.push(createArtist("Bartholomew Danielson", "Bluegrass", 23))
labels[1].signee.push(createArtist("Avilee Dallas", "Country", 19))
labels[2].signee.push(createArtist("Austin Kinkaid", "Pop", 22))
labels[0].signee.push(createArtist("Loyoncé Branis", "Rap", 27))

console.log(labels[0].signee)




