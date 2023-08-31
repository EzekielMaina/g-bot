//import random from "random";

const jsonfile=require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');
//const Random = require('random');
//const ra = (...args) => import('random').then(({default: fetch}) => fetch(...args));
const FILE_PATH='data.json';

//const rand = new random();
// const r=Math.random();
// console.log(r);

function getRandomInt(min, max) {
    min = Math.ceil(min);   // Round up the minimum value
    max = Math.floor(max);  // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

// const mc = n => {
//       if (n===0) return console.log('End');
//       const x = getRandomInt(0, 30);
//       console.log("Random integer x:", x);
//       const y = getRandomInt(0, 6);
//       console.log("Random integer y:", y);
//       mc.bind(n-1);
//   }
  
//   mc(5);  



  const mc = n => {
    if (n <= 0) {
        return; // Base case: Stop recursion when n is zero or negative
      }
    const x = getRandomInt(0, 8);
    console.log("Random integer x:", x);
    const y = getRandomInt(0, 6);
    console.log("Random integer y:", y);
    const DATE=moment().add(3,'months').subtract(1,'years')
                .add(x,'w').add(y,'d').format();
    const data={
              date:DATE
    }
    console.log(DATE);
    
    jsonfile.writeFile(FILE_PATH, data,()=>{
        simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();// Recursive call with decremented n
    });
    mc(n-1);
}
  
mc(10);


// const mc=n=>{
            
//             const x = getRandomInt(0, 30);
//             console.log("Random integer x:", x);
//             const y = getRandomInt(0, 6);
//             console.log("Random integer y:", y);
// }
// mc(5);
// const mc=n=>{
//     if (n===0) return simpleGit.push();
//     const x= random.int(0,30)
//     const y= random.int(0,6)
//     const DATE=moment().subtract(28,'days').subtract(7,'months')
//                 .add(x,'w').add(y,'d').format();
//     const data={
//               date:DATE
//     }
//     console.log(DATE); 
//     jsonfile.writeFile(FILE_PATH, data,()=>{
//     simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE},
//     mc.bind(this,--n));
//     });
// }
// //simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE});
// mc(100);


// const DATE=moment().subtract(28,'days').subtract(7,'months').format();
//     const data={
//         date:DATE
//     }
    
// jsonfile.writeFile(FILE_PATH, data,()=>{
// simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();
//     });
    
    //simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE});
    