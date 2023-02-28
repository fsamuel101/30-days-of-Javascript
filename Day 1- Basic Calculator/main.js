const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const display3 = document.querySelector('.display3');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clear-all');

//* dis means display

let dis1 = '';
let dis2 = '';
let dis3 = '';
let lastOperation = '';
let haveDot = false;

// *It adds the number into the primary display
// *The dot can be only press once here 

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2 += e.target.innerText;
        display2.innerText = dis2;
    })
})

operations.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        //* if there is no number in display 2 return nothing when clicked
        if (!dis2) return;

        haveDot = false; //* to add a new number in second input

        const operationName = e.target.innerText;

        if (dis1 && dis2 && lastOperation) {
            mathOperation();

        } else {
            dis3 = parseFloat(dis2);
        }
        clearVar(operationName)
        lastOperation = operationName
    });
});

function clearVar(name = '') {
    dis1 += dis2 + ' ' + name + ' ';
    display1.innerText = dis1;
    dis2 = ''
    display2.innerText = dis2;
    display3.innerText = dis3;
}

function mathOperation() {
    if (lastOperation === '+') {
        dis3 = parseFloat(dis3) + parseFloat(dis2);
    } else if (lastOperation === '-') {
        dis3 = parseFloat(dis3) - parseFloat(dis2);
    } else if (lastOperation === 'X') {
        dis3 = parseFloat(dis3) * parseFloat(dis2);
    } else if (lastOperation === '/') {
        dis3 = parseFloat(dis3) / parseFloat(dis2);
    } else if (lastOperation === '%') {
        dis3 = parseFloat(dis3) % parseFloat(dis2);
    }
}

equal.addEventListener('click', (e) => {

    if (!dis1 || !dis2 || !lastOperation) return;
    mathOperation();
    clearVar();
    dis2 = dis3;
    display2.innerText = dis2;

})