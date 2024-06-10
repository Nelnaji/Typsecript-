const userName = "Max";

let age = 30

age = 31;

// default arguments are not passed over, so always set default in the last parameters
const add = (a: number, b: number = 2) => a + b;

console.log(add(3,4));


const printOutput:(output: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button){
button.addEventListener('click', event => console.log(event))

}

add(5);
