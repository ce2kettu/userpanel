const args = process.argv;
const fs = require('fs');

if (process.argv.length <= 2) {
    process.exit(-1);
}

const count = process.argv[2];
const type = process.argv[3];

function generateId() {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};

let array = [];
for (let i = 0; i < count; i++) {
    const obj = {
        _id: generateId(),
        name: i + 1,
        type: type,
        price: 0,
        purchasable: true,
        players: []
    };
    array.push(obj);
}

const json = JSON.stringify(array);
fs.writeFile('generatedData.json', json, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Data generated!');
});

/* USAGE: 
node doc/generate.js 5 lights
-- generates 5 objects with type lights
*/