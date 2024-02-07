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

// Write a function that will take an array as a peramiter and that array will be contain 2 element. 
// If the both element are positive manage the upper number to lower number.
// If the both element are equal than return a string "Equal".
function sortMaker(array){
    if(Array.isArray(array) == false){
        return 'Invalid input';
    }
    for(const element of array){
        if(element < 0 ){
            return 'Invalid input';
        }
    }
    if(array[0] !== array[1]){
        return array.sort(function(a,b){return b - a})
    }
    return 'Euqal';
}
const therArray = [2,3]
console.log(sortMaker(therArray));
console.log(sortMaker('shahin'));
console.log(sortMaker([4,2]));
console.log(sortMaker([4,-5]));
console.log(sortMaker([4,0]));

console.log('====================');

// write a function that will take an object as a input. and that object contain 3 property.
// return the value of the object
// If the object have any missing property then repleace the missing place using double underscore.
function findAddress(object){
    const street = object.street || '__';
    const house = object.house || '__';
    const socaity = object.socaity || '__';
    return street + ',' + house + ',' + socaity;

}
const myObject = {
    street: 10,
    // house: '15A',
    socaity: 'Earth perfect'
}
console.log(findAddress(myObject));

console.log('====================');


// write a function what will take 2 input one is array another is number.
// array input every element is a note of money.
// number input is amount of TK
// if the array sum are equal and grater the the Tk then you can buy the product and return true. or else return flase.
// ckeck is the first input array is empty or not. If empty then return a meaningfull message.
function canPay(array, number){
    if(array == []){
        return 'You dont have any money to pay.'
    }
    let total = 0;
    for(let element of array){
        total += element;
    }
    if(number <= total){
        return true;
    }
    return false;
}
const myArr = [1,2,5];
const myNumber = 10;
console.log(canPay(myArr,myNumber));
console.log(canPay([1,5,5],10));
console.log(canPay([],10));