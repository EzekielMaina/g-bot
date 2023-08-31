const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git'); // Import the simple-git package

const FILE_PATH = 'multi.json';

for (let i = 0; i < 3; i++) {
  (function (DATE) { // IIFE to capture DATE for this iteration
    const data = {
      date: DATE
    };
    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, () => {
      // Use simpleGit().add().commit().push() pattern
      simpleGit()
        .add([FILE_PATH])
        .commit(DATE, { '--date': DATE })
        .push(() => {
          console.log(`Pushed commit with date: ${DATE}`);
        });
    });
  })( // Pass DATE into the IIFE
    moment().subtract(17+i, 'd').subtract(1, 'y').add(3, 'months').format()
  );
}
