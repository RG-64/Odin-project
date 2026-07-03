const sumAll = function(a,b) {
    var sum=0;
    small=a<b?a:b;
    large=a>b?a:b;
    var number=typeof(1);
    if(typeof(a)!=number||typeof(b)!=number||a<0||b<0||2*a%2==1||2*b%2==1)
    {
        return "ERROR";
    }
    for(var i=small;i<=large;i++)
    {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
