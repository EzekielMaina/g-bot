const moment = require("moment");
const jsonfile=require('jsonfile');
const simpleGit=require('simple-git');

const FILE_PATH='data.json';


const startDate = moment("2022-11-10");
const endDate = moment("2022-12-31");

let currentDate = startDate.clone();

while (currentDate.isSameOrBefore(endDate)) {
  const formattedDate = currentDate.format("DD MMMM YYYY");
  console.log(formattedDate);
  const data={
    date:formattedDate
}
  jsonfile.writeFile(FILE_PATH, data,()=>{
    simpleGit().add([FILE_PATH]).commit(formattedDate,{'--date':formattedDate}).push();// Recursive call with decremented n
});
  currentDate.add(1, "day"); // Add 1 day to the current date
}
