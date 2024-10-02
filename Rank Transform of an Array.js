var arrayRankTransform = function(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b); // Sort the array
    let rankMap = new Map(); // Map to store the rank for each element
    let rank = 1; // Rank starts from 1
    
    for (let num of sortedArr) {
        if (!rankMap.has(num)) {
            rankMap.set(num, rank); // Assign rank to the element if it hasn't been assigned
            rank++;
        }
    }

    return arr.map(num => rankMap.get(num)); // Return the ranks for the original array
};
