var minBitFlips = function(start, goal) {
    // XOR the two numbers to find differing bits
    let xorResult = start ^ goal;
    
    // Count the number of set bits (1's) in the xorResult
    let count = 0;
    while (xorResult > 0) {
        count += xorResult & 1;  // Check if the last bit is 1
        xorResult >>= 1;         // Shift right to check the next bit
    }
    
    return count;
};

// Example usage:
let start = 10;
let goal = 7;
console.log(minBitFlips(start, goal));  // Output: 3
