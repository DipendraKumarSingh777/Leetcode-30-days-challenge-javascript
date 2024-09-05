/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    const totalSum = mean * (m + n);
    const currentSum = rolls.reduce((sum, roll) => sum + roll, 0);
    const missingSum = totalSum - currentSum;

    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }

    const result = new Array(n).fill(1);
    let remainingSum = missingSum - n;

    for (let i = 0; i < n && remainingSum > 0; i++) {
        const add = Math.min(5, remainingSum);
        result[i] += add;
        remainingSum -= add;
    }

    return result;
};
