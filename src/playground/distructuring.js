// object destructuring


// const person = {
//     name: 'Nazar',
//     age: 24,
//     location: {
//         city: 'Lviv',
//         temp: 22
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;


// console.log(`${firstname} is ${age}`);

// const {city, temp: temperature } = person.location;

// if (city && temperature){
//     console.log(`Its ${temperature} degrees in ${city}`);
// }


// const book = {
//     tittle: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// array destructuring


const adress = ['1299 S Junior Str', 'Philadelphia', 'Pensylvania', '1488'];

const [, city, state = 'Lviv', zip] = adress;

console.log(`you are in ${city}  ${state}`);


const item = ['Cofee', '2', '3', '4'];

const [cofee, ,mediumPrice] = item;

console.log(`A medium ${cofee} costs ${mediumPrice}`);