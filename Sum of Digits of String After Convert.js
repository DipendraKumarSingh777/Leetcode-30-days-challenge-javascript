function getLucky(s, k) {
    // Step 1: Convert the string to a number based on alphabet positions
    let numStr = '';
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1).toString();
    }
    
    // Step 2: Sum the digits repeatedly k times
    for (let i = 0; i < k; i++) {
        let sum = 0;
        for (let digit of numStr) {
            sum += parseInt(digit);
        }
        numStr = sum.toString();
    }
    
    return parseInt(numStr);
}

// Example usage:
let s = "zbax";
let k = 2;
console.log(getLucky(s, k)); // Output: 8
