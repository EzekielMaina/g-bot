//import random from "random";

const jsonfile=require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');

const FILE_PATH='solo.json';


const DATE=moment().add(13,'d').subtract(1,'y').format();

const data={
              date:DATE
}
console.log(DATE);
    
jsonfile.writeFile(FILE_PATH, data,()=>{
    simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();
});
   



    


