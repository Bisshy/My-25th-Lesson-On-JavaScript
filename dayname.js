//Common Js method using module.exports

const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];
    
  //  function dayName (number) {
  //     return names[number];
  //   }
  //  function dayNumber(name) {
  //     return names.indexOf(name);
  //   }
    
  //   module.exports = {dayName, dayNumber}


//ES Module method using exports

// export const dayName = function (number) {
//     return names[number];
//   }
// export const dayNumber = function(name) {
//     return names.indexOf(name);
//   }

//This also works

//  const dayName = function (number) {
//     return names[number];
//   }
//  const dayNumber = function(name) {
//     return names.indexOf(name);
//   }

//   export {dayName, dayNumber};

//Also working

// function dayName(number) {
//     return names[number];
//   }
// function dayNumber(name) {
//     return names.indexOf(name);
//   }
//  export {dayName, dayNumber};