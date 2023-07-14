function calculator(num1, num2, operator) {

    switch (operator) {

        case '+':
            console.log(num1 + num2);
            break;

        case '-':
            console.log(num1 - num2);
            break;

        case '*':
            console.log(num1 * num2);
            break;
        
        case '/':
            console.log(num1 / num2);
            break;

        default:
            console.log("An error occured! Please enter the operator correctly");
    }
}

calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message