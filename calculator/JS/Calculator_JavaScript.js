
/*document.addEventListener('DOMContentLoaded', (event) => {
    //creats an object tokeep track of values
    const calculator = {
        display_value: '0',
        first_operand: null,
        wait_second_operand: false,
        operator: null,
        new_input: false,

    }

    const numberButtons = document.querySelectorAll('button');

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            input_digit(button.textContent);
        });
    });

    const operandButtons = document.querySelectorAll('.operand');
    operandButtons.forEach(button => {
        button.addEventListener('click', () => {
            handle_operator(button.textContent);
        });
    });
    // 更新显示的值
    function update_display() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.display_value;
    }


    function input_digit(digit) {
        const { display_value, wait_second_operand, new_input } = calculator;
        if (wait_second_operand) {
            calculator.display_value = digit;
            calculator.wait_second_operand = false;
            calculator.new_input = true;
        } else {
            calculator.display_value = new_input ? digit : display_value + digit;
            calculator.new_input = false;
        }
        update_display(); // 更新显示 }
    }

    //this section handles decimal points
    function input_decimal(dot) {
        if (calculator.wait_second_operand) return;
        if (!calculator.display_value.includes(dot)) {
            calculator.display_value += dot;
        }
        update_display(); 
    }

    //this section handles operands
    function handle_operator(next_operator) {
        const { first_operand, display_value, operator } = calculator;
        const value_of_input = parseFloat(display_value);
        //checks if an operator exists and if wait_second_operand is true
        //then updates the operator and exits the function
        if (operator && calculator.wait_second_operand) {
            calculator.operator = next_operator;
            return;
        }
        if (first_operand == null) {
            calculator.first_operand = value_of_input;
        } else if (operator) {
            const value_now = first_operand || 0;
            let result = perform_calculation[operator];
            result = Number(result).toFixed(9);
            //this will remove any trailing 0s
            result = (result * 1).toString();
            calculator.display_value = result;
            calculator.first_operand = result;
        }
        calculator.operator = next_operator; // 更新运算符
        calculator.wait_second_operand = true; // 设置等待第二个操作数
        update_display(); // 更新显示
    }
    //handles theactual calculations
    const perform_calculation = {
        '/': (first_operand, second_operand) => first_operand / second_operand,
        '*': (first_operand, second_operand) => first_operand * second_operand,
        '+': (first_operand, second_operand) => first_operand + second_operand,
        '-': (first_operand, second_operand) => first_operand - second_operand,
        '=': (first_operand, second_operand) => {
            calculator.first_operand = perform_calculation[calculator.operator](first_operand, second_operand);
            calculator.wait_second_operand = false; calculator.new_input = true; return calculator.first_operand;
        },
    };
    
    //resets the calculator when the AC button is clicked
    function calculator_reset() {
        calculator.display_value = '0';
        calculator.first_operand = null;
        calculator.wait_second_operand = false;
        calculator.operator = null;
        update_display(); 
    }

   });

*/
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-screen');
let operator;
let operand1;
let operand2;

keys.addEventListener('click', function (event) {
    const target = event.target;
    const value = target.value;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            operator = value;
            operand1 = parseFloat(display.value);
            display.value = '0';
            break;
        case '=':
            operand2 = parseFloat(display.value);
            calculate();
            break;
        case 'all-clear':
            display.value = '0';
            break;
        default:
            if (display.value === '0') {
                display.value = value;
            } else {
                display.value += value;
            }
            break;
    }
});

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                result = 'Error';
            }
            break;
        default:
            return;
    }
    display.value = result;
}
  
 

