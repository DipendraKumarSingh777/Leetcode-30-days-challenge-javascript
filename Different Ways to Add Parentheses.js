function diffWaysToCompute(input) {
    const result = [];

    // Helper function to calculate the result based on the operator
    const calculate = (left, right, operator) => {
        if (operator === '+') return left + right;
        if (operator === '-') return left - right;
        if (operator === '*') return left * right;
    };

    // Split the input by operators
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === '+' || char === '-' || char === '*') {
            const left = diffWaysToCompute(input.substring(0, i));
            const right = diffWaysToCompute(input.substring(i + 1));

            // Combine the results
            for (let l of left) {
                for (let r of right) {
                    result.push(calculate(l, r, char));
                }
            }
        }
    }

    // If no operators were found, convert the string to a number
    if (result.length === 0) {
        result.push(parseInt(input, 10));
    }

    return result;
}
