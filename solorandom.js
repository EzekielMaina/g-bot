//import random from "random";

const jsonfile=require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');

const FILE_PATH='solor.json';

function getRandomInt(min, max) {
    min = Math.ceil(min);   // Round up the minimum value
    max = Math.floor(max);  // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const day=getRandomInt(20,15);
console.log(day);
//const DATE=moment().add(day,'d').subtract(1,'y').format();
//const DATE=moment().add(day,'d').subtract(7,'months').format();
//const DATE=moment().add(184,'d').subtract(7,'months').format();
const DATE=moment().subtract(0,'d').subtract(1,'months').format();

const data={
              date:DATE
}
console.log(DATE);
    
jsonfile.writeFile(FILE_PATH, data,()=>{
    simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();
});
   



    


