// function
var greet = function(name, message) {
    return message +' '+ name;
}
console.log(greet('surutn','hansume'));

// arrow function
var arrowGreet = (name, message)=> {
    return message +' '+ name;
}
console.log(arrowGreet('surutn','hansume'));

// short arrow function
var arrowGreet2 = (name, message)=> message +' '+ name;
console.log(arrowGreet2('surutn','hansume'));

// short arrow function
var arrowGreet3 = message => message;
console.log(arrowGreet3('hansume'));

// short arrow function
var arrowGreet4 = x => x * x;
console.log(arrowGreet4(2));

