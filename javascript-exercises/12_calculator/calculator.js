const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((prev,curr)=>(curr+prev),0);
};

const multiply = function(array) {
  return array.reduce((total, current)=>total*current,1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  var total=1;
	for(let i=1;i<=a;i++)
  {
    total*=i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
