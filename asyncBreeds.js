// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  let data = fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callback(data, breed);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printData = (data, breed) => {
  console.log("");
  console.log(`${breed}: ${data}`);
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', printData);
console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!