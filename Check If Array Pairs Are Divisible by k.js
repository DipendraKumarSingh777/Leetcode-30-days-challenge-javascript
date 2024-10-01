function canArrange(arr, k) {
    let remainderMap = new Array(k).fill(0);

    // Step 1: Count the frequency of remainders
    for (let num of arr) {
        let remainder = ((num % k) + k) % k;  // Handle negative numbers
        remainderMap[remainder]++;
    }

    // Step 2: Check for valid pairs
    if (remainderMap[0] % 2 !== 0) return false;  // Elements with remainder 0 should be even

    for (let i = 1; i < k; i++) {
        if (remainderMap[i] !== remainderMap[k - i]) {
            return false;
        }
    }

    return true;
}
