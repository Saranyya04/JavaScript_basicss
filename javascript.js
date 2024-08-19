
//Simple Calculator
function simpleCalculator(num1, num2, operator) {
    var isValidOperation = true;
    let result;
    const validOperators = ['+', '-', '*', '/'];

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Error: Both inputs must be numbers!";
    }

    if (!validOperators.includes(operator)) {
        isValidOperation = false;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
            break;
        default:
            return "Error: Invalid operator!";
    }

    if (isValidOperation && result !== undefined) {
        return `Result: ${result}`;
    } else {
        return "Error: Invalid operation!";
    }
}

console.log(simpleCalculator(10, 5, '+'));
console.log(simpleCalculator(10, 0, '/'));
console.log(simpleCalculator(10, '5', '*'));
console.log(simpleCalculator(10, 5, '%'));



//Array Operations and Loops
function sumOfEvenNumbers(array) {
    var sum = 0;
    let isArrayValid = true;
    const evenNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            isArrayValid = false;
            break;
        }
    }

    if (isArrayValid) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                sum += array[i];
                evenNumbers.push(array[i]);
            }
        }
    } else {
        return "Error: Array should contain only numbers!";
    }

    return `Sum of even numbers: ${sum}`;
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumOfEvenNumbers([7, 11, 15]));
console.log(sumOfEvenNumbers([7, '11', 15]));


//Object manupulation
const Person = {
    firstName: 'Saranyya',
    lastName: 'Chimata',
    age: 20,
    
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    incrementAge: () => {
        let updatedAge = Person.age + 1;
        Person.age = updatedAge;
    }
};

console.log(Person.getFullName());
Person.incrementAge();
console.log(Person.age);
