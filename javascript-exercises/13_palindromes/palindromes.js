const palindromes = function (phrase) 
{
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var sentence = phrase
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
   .join('');

    for(let i=0;i<sentence.length;i++){
        if(sentence[i]!==sentence[sentence.length-i-1]){
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
