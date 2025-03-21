function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    try {
        if (b===0){
            throw new Error("Деление на ноль невозможно.")
        } else {
            return (a/b).toFixed(7)
        }
    
        
    }
    catch(error) {
        return error.message
    }
}

function power(a, b) {
    return Math.pow(a, b);
}

function factorial(n) {
    try {
        if (n < 0) {
            throw new Error("Факториал отрицательного числа не определен.")
        } else if (n==0) {
            throw new Error("Факториал нуля не определен.")
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
        }
        return result;
        }
        
        }

    catch(error) {
        return error.message
    }
}


