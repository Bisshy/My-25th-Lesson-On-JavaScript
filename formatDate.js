
//Common JS - Using Require

// const ordinal = require("./ordinal");

// const {days, months} = require("./date-name");


// exports.formatDate = function (date, format) {
//   return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
//     if (tag == "YYYY") return date.getFullYear();
//     if (tag == "M") return date.getMonth();
//     if (tag == "MMMM") return months[date.getMonth()];
//     if (tag == "D") return date.getDate();
//     if (tag == "Do") return ordinal(date.getDate());
//     if (tag == "dddd") return days[date.getDay()];
//   });
// };

//ES Modules - Using Imports

import ordinal from './ordinal.js';

//using export {datenames}
// import {dateNames} from './date-name.js';

//USing export default
// import dateNames from './date-name.js';

// export function formatDate(date, format){
//   return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
//         if (tag == "YYYY") return date.getFullYear();
//         if (tag == "M") return date.getMonth();
//         if (tag == "MMMM") return dateNames.months[date.getMonth()];
//         if (tag == "D") return date.getDate();
//         if (tag == "Do") return ordinal(date.getDate());
//         if (tag == "dddd") return dateNames.days[date.getDay()];
//       });
// };

// import {days, months} from './date-name.js';
// export function formatDate(date, format){
//   return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
//         if (tag == "YYYY") return date.getFullYear();
//         if (tag == "M") return date.getMonth();
//         if (tag == "MMMM") return months[date.getMonth()];
//         if (tag == "D") return date.getDate();
//         if (tag == "Do") return ordinal(date.getDate());
//         if (tag == "dddd") return days[date.getDay()];
//       });
// };