const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
if (value === '=') {
    try{
        result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
        } catch {
            display.value = 'Error';
            currentInput = '';
        }

} else {
    currentInput += value;
    display.value = currentInput;
}
    });

});