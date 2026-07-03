const fibonacci = function(input) {
    place=Number(input);
    if(place<0){
        return "OOPS";
    }
    var nums= new Array(place);
    nums[0]=0;
    nums[1]=1;
    for(let i=2;i<=place;i++){
        nums[i]=nums[i-1]+nums[i-2];
    }
    return nums[place];
};

// Do not edit below this line
module.exports = fibonacci;
