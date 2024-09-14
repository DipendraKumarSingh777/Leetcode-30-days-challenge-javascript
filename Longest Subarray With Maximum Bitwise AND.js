var longestSubarray = function(nums) {
    let maxNum = Math.max(...nums);  // Find the maximum number in the array
    let maxLen = 0, currLen = 0;     // Initialize maxLen and currLen

    for (let num of nums) {
        if (num === maxNum) {        // If current number equals maxNum
            currLen++;               // Increment currLen
            maxLen = Math.max(maxLen, currLen);  // Update maxLen if currLen is larger
        } else {
            currLen = 0;             // Reset currLen if the number is not maxNum
        }
    }

    return maxLen;                   // Return the length of the longest subarray
};
