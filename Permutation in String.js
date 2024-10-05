var checkInclusion = function(s1, s2) {
    // Create two arrays to track character counts
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    
    // If s1 is longer than s2, no permutation is possible
    if (s1.length > s2.length) return false;

    // Populate s1Count and s2Count with initial character counts for the first window
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    let matches = 0;
    // Count how many character frequencies match initially
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) matches++;
    }

    // Sliding window starts
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches === 26) return true;

        // Slide the window to the right
        let rightIndex = s2.charCodeAt(i + s1.length) - 97;
        let leftIndex = s2.charCodeAt(i) - 97;

        // Add new character from the right
        s2Count[rightIndex]++;
        if (s2Count[rightIndex] === s1Count[rightIndex]) {
            matches++;
        } else if (s2Count[rightIndex] - 1 === s1Count[rightIndex]) {
            matches--;
        }

        // Remove character from the left
        s2Count[leftIndex]--;
        if (s2Count[leftIndex] === s1Count[leftIndex]) {
            matches++;
        } else if (s2Count[leftIndex] + 1 === s1Count[leftIndex]) {
            matches--;
        }
    }

    return matches === 26;
};
