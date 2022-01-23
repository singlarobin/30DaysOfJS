const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello!');

// Interpolated
console.log('Hello, I am a %s String', 'njnj');

// Styled
console.log('%c Text Text Text', 'font-size:40px; background: red; text-shadow: 5px 5px 0px blue;');

// warning!
console.warn('Warning!!');

// Error :|
console.error('Error!!!!');

// Info
console.info('Some Information!');

// Testing
console.assert(1 === 1, 'That is Wrong!');
console.assert(1 === 2, 'That is Wrong!');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    // console.group(`${dog}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`Dog Name is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`)
    console.groupEnd(`${dog.name}`);
})

// counting
console.count('john');
console.count('steve');
console.count('steve');
console.count('john');
console.count('john');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('john');
console.count('john');
console.count('john');
console.count('john');
console.count('steve');

// timing
console.time('Fetching Data');
fetch('https://api.github.com/users/singlarobin')
    .then(respnse => respnse.json())
    .then(data => {
        console.timeEnd('Fetching Data');
        console.log(data);
    })

//table
console.table(dogs);