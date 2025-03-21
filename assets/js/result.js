function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    try {
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            case 'power':
                result = power(num1, num2);
                break;
            case 'factorial':
                result = factorial(num1);
                break;
            default:
                result = 'Неизвестная операция';
        }
        document.getElementById('result').innerText =  `Результат: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = `Ошибка: ${error.message}`;
    }
}