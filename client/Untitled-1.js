// const myFavouriteAuthors = [
//   'Neal Stephenson',
//   'Arthur Clarke',
//   'Isaac Asimov',
//   'Robert Heinlein'
// ];

// let indexToIterate = 0
// while(indexToIterate<myFavouriteAuthors.length){
//   console.log(myFavouriteAuthors[indexToIterate])
//   indexToIterate++
// }

const arr = new Array(5);
arr.fill('x', 0);
console.log(arr);

function* testGenerator() {
    yield 'a';
}

const iter = testGenerator();
