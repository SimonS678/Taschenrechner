const one = document.querySelector('#number1')
const two = document.querySelector('#number2')
const three = document.querySelector('#number3')
const four = document.querySelector('#number4')
const five = document.querySelector('#number5')
const six = document.querySelector('#number6')
const seven = document.querySelector('#number7')
const eight = document.querySelector('#number8')
const nine = document.querySelector('#number9')
const zero = document.querySelector('#number0')
const plus = document.querySelector('#plussign')
const minus = document.querySelector('#minussign')
const equals = document.querySelector('footer')
const multiply = document.querySelector('#multiplysign')
const divide = document.querySelector('#dividesign')
const clearscreen = document.querySelector('#clear')
const showNumber = document.querySelector('.screen')


one.addEventListener('click', function() {
    addnumber(1);
});
two.addEventListener('click', function() {
    addnumber(2);
});
three.addEventListener('click', function() {
    addnumber(3);
});
four.addEventListener('click', function() {
    addnumber(4);
});
five.addEventListener('click', function() {
    addnumber(5);
});
six.addEventListener('click', function() {
    addnumber(6);
});
seven.addEventListener('click', function() {
    addnumber(7);
});
eight.addEventListener('click', function() {
    addnumber(8);
});
nine.addEventListener('click', function() {
    addnumber(9);
});
zero.addEventListener('click', function() {
    addnumber(0);
});
plus.addEventListener('click', function() {
    addnumber('+');
});
minus.addEventListener('click', function() {
    addnumber('-');
});
multiply.addEventListener('click', function() {
    addnumber('*');
});
divide.addEventListener('click', function() {
    addnumber('/');
});
equals.addEventListener('click', calculate);

clearscreen.addEventListener('click', clearall);

function addnumber(newNumber) {
    showNumber.innerHTML = showNumber.innerHTML + newNumber
}

function calculate(){
    const result = eval(showNumber.innerHTML)
    showNumber.innerHTML = result
}

function clearall() {
    showNumber.innerHTML = ''
}
