// const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];

// for (let dragon of dragons) {
//     console.log(dragon);
// }

// function* gen(){
//   yield 1
//   yield 2
// }

// const iter = gen()
// // for(let val of iter){
// //   console.log(val)
// // }

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

function* newGenerator() {
    yield 'something';
    const final = yield 'give me value';
    return final;
}

const newIter = newGenerator();

console.log(newIter.next());
console.log(newIter.next());
console.log(newIter.next());
