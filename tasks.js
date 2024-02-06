// create a function that take a number as a peramiter and return the cube of the number 
function cubeNumber(x){
    if(typeof x !== 'number'){
        return 'You must have to enter a valid number'
    }
    // return x**3;
    return Math.pow(x,3)
}
console.log(cubeNumber(4));
console.log(cubeNumber(3));
console.log(cubeNumber('3'));

console.log('=======================');

// diclear a function that takes two peramiter as a string. 2nd paramitarer puro ongso jodi 1st peramitarer jekono ongsor sathe dompurno mile jay tahole ture return korbe onnothay false return korbe.
function matchFinder(x, y){
    if(typeof x !== 'string' || typeof y !== 'string'){
        return 'Please provide a valid string'
    }
    if(x.includes(y)){
        return true;
    }
    return false;
}
const str1 = 'John Doe';
const str2 = 'ohn';
console.log(matchFinder(str1,str2));
console.log(matchFinder('Javascript','code'));

console.log('==================');