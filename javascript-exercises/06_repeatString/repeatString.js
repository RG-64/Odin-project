const repeatString = function(str, num) {
    var final="";
    if(num<0)
    {
        return "ERROR";
    }
    for(var i=0; i<num;i++)
{
        final+=str;
}
return final;
};

// Do not edit below this line
module.exports = repeatString;
