// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push (name);
}

function destructivelyPrependCat(name) {
    cats.unshift (name);
}

function destructivelyRemoveLastCat() {
    cats.pop ();
}

function destructivelyRemoveFirstCat() {
    cats.shift ();
}

const copyOfCats =[...cats];



function appendCat(name) {
    copyOfCats.push(name);
    return copyOfCats;
}

describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
});


function  prependCat(name) {
    const copyOfCats = [name,...cats];
    return copyOfCats;
}
console.log (prependCat('Arnold'));

describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
});



function  removeLastCat() {
    const copyOfCats = cats.slice (0, 2);
    return copyOfCats;
}


describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
});


function removeFirstCat() {
    const copyOfCats =  cats.slice (1);
    return copyOfCats;
}
