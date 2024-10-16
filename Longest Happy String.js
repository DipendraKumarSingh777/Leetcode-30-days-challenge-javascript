const longestDiverseString = function(a, b, c) {
    let result = '';
    
    // Create an array to store character counts along with the corresponding character
    let heap = [
        [a, 'a'],
        [b, 'b'],
        [c, 'c']
    ];

    // Continue while there are characters left to add
    while (true) {
        // Sort by count in descending order (greedy approach)
        heap.sort((x, y) => y[0] - x[0]);

        // If the most frequent character has no more occurrences left, we're done
        if (heap[0][0] === 0) break;

        // Check if the last two characters in result are the same as the most frequent character
        if (result.length >= 2 && result[result.length - 1] === heap[0][1] && result[result.length - 2] === heap[0][1]) {
            // If so, try the second most frequent character
            if (heap[1][0] === 0) break; // If the second most frequent character is also empty, we cannot proceed
            
            // Append the second most frequent character
            result += heap[1][1];
            heap[1][0]--;
        } else {
            // Otherwise, append the most frequent character
            result += heap[0][1];
            heap[0][0]--;
        }
    }

    return result;
};

// Example usage:
console.log(longestDiverseString(1, 1, 7)); // Output: "ccbccacc"
