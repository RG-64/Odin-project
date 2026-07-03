const removeFromArray = function(arr,...args) {
   return arr.filter(obj=>!args.includes(obj));
};

// Do not edit below this line
module.exports = removeFromArray;
