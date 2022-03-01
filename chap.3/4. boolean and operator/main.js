// false : 0, -0, '', null, undefined
// true : 1, -1, [], 'hello'
// let num = 9;
// if (num){
//     console.log('true!');
// }

// num && console.log(num);

let obj = {
    name: 'ddori',
    age: 7,
};

console.log(obj.name);

// obj && console.log(obj.name);
// console.log(obj.name);

// console.log(obj.name === 'ddori' ? '응' : '아니');

if (obj.name === 'none') {
    console.log('누구냐넌');
} else if (obj.name === 'ddoddo') {
    console.log('또또가 누구야!');
} else {
    console.log('나다 또리');
};

switch (obj.name) {
    case 'do':
    case 'ddoddo':
        console.log(`this isn't it`);
        break;
    case 'ddori':
        console.log(`that's it!`);
};

