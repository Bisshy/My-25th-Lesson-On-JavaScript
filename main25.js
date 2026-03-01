//Modules as Building Blocks

//Improvised Modules
//IIFE - Immediately invoked function expression
// const weekDay = function(){
//     const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return{
//         name(number){return names[number];},
//         number(name){return names.indexOf(name);}
//     };
// }();

// console.log(weekDay.name(weekDay.number("Sunday")));

//Evaluation Data as Code

// const x =1;
// function evalAndReturnX(code){
//     eval(code);
//     return x;
// }
// console.log(evalAndReturnX("var x = 2"));
// console.log(x);

// let plusOne = Function("n", "return n + 1;");
// console.log(plusOne(4));

//Common Js
// require exports

// const {formatDate} = require('./formatDate');

//console.log(formatDate(new Date(2019, 8, 13), "dddd the Do"));

// const seasonName = require('./seasonname.js');

// console.log(seasonName[0]);



//How does require work

//set cache as a property of an object, cache will be used to store data

// require.cache = Object.create(null);
// function require(name){
//     if(!(name in require.cache)){
//         let code = readFile(name);
//         let module = {exports:{}};
//         require.cache[name] = module;
//         let wrapper = Function("require, exports,module", code);
//         wrapper(require, module.exports, module);
//     }
//     return require.cache[name].exports;
// }

// const {parse} = require('./ini');
// console.log(parse("x = 10\ny =20"));

//ECMAScript Modules
// import {formatDate} from './formatDate.js';

// console.log(formatDate(new Date(2019, 8, 13), "dddd the Do"));

// import {dayName, dayNumber} from './dayname.js';
 
// console.log(dayName(4));

// console.log(dayNumber("Sunday"));

// import seasonname from './seasonname.js';

// console.log(seasonname[0]);

//renaming imported bindings using word as

// import {days as dayNames} from './date-names';
// console.log(dayNames.length);

//Building and Bundling

//Module Design


const roadGraph = require("./graph.js")
const {find_path} = require("./dijkstrajs.js");

let graph = {};
for(let node of Object.keys(roadGraph)){
    let edges = graph[node] = {};
    for(let dest of roadGraph[node]){
        edges[dest] = 1;
    }
}

console.log(find_path(graph, "Post Office", "Cabin"));
