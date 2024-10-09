/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let leftNeeded = 0;  // Number of '(' needed
    let rightNeeded = 0; // Number of ')' needed

    for (let char of s) {
        if (char === '(') {
            rightNeeded++; // We need one more ')' to balance this '('
        } else if (char === ')') {
            if (rightNeeded > 0) {
                rightNeeded--; // We can balance with a previous '('
            } else {
                leftNeeded++; // We need one more '(' to balance this ')'
            }
        }
    }

    return leftNeeded + rightNeeded;
};