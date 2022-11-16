const arrayUsingFrom = Array.from(Array(12), (_, index) => index + 1);
const arrayUsingFill = Array(10)
  .fill()
  .map((_, index) => index + 1);
const arrayUsingSpread = [...Array(10).keys()].map((_, index) => index + 1);
const arrayUsingApply = Array.apply(null, { length: 10 }).map(
  Number.call,
  Number
);

const createAJumbledArray = () => {
  let jumbledArray = [];
  var randomIndexArray = [];
  var notLimitReached = true;
  while (notLimitReached) {
    for (let i = 0; i < arrayUsingFill.length; i++) {
      var notValueInserted = true;

      const generateARandomNumber = (length) =>
        Math.round(Math.random() * length);

      while (notValueInserted) {
        let randomIndex = generateARandomNumber(arrayUsingFill.length - 1);
        console.log(randomIndex);
        if (randomIndexArray.indexOf(randomIndex) === -1) {
          randomIndexArray.push(randomIndex);
          jumbledArray[randomIndex] = arrayUsingFill[i];
          if (jumbledArray.length === arrayUsingFill.length) {
            notLimitReached = false;
          }
          notValueInserted = false;
        }
      }
    }
  }
  console.log("jumbledArray", jumbledArray);
  console.log("randomindexarray", randomIndexArray);
};

createAJumbledArray();

// console.log(Math.floor(Math.random() * arrayUsingFill.length + 1));
// console.log(arrayUsingFrom);
// console.log(arrayUsingFill)
// console.log(arrayUsingSpread);
// console.log(arrayUsingApply);
