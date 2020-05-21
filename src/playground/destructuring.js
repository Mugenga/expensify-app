// Object Destructuring
    //Example 1
const person  = {
    name: "yves",
    age: 22,
    location: {
        city: 'Kigali',
        temp: 24
    }
};

const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location

if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
}

    //Example 2
const book = {
    book: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self Published'} = book.publisher;
console.log(publisherName);

// Array Destructuring

    // Example 1
const address = ['KG 7 AVE', 'Kigali', 'Kigali City', '250'];

const [street, city2, state, zip] = address;
console.log(`You are in ${city2}, ${state}`);

    //Example 2
const item = ['coffee (hot)', '$2.00', '$3.00', '$4.00'];
const [coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price}`);