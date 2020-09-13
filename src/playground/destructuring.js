/** OBJECT DESTRUCTURING */

// const person = {
//     name: 'Mac',
//     age: 26,
//     location: {
//         city: 'Boston',
//         temp: 92
//     }
// };

// // ES6 DESTRUCTURING
// const {
//     name = 'Spongbob',
//     age,
//     location: { city, temp }
// } = person;

// // const {city, temp: temparature} = person.location;
// console.log(`${name} is ${age}`);

// console.log(`It's ${temp} in ${city}.`);

/*
const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'self-published' } = book.publisher;
console.log(publisherName);
*/

const address = ['3 lunas mandaluyong city', 'Manila', 'NCR', '1550'];

const [, city, state = 'New wok'] = address;

console.log(`you are in ${city} ${state}`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);
