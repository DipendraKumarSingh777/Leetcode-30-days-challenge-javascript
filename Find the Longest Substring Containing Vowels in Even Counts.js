var findTheLongestSubstring = function(s) {
    let vowels = 'aeiou';
    let state = 0;
    let maxLen = 0;
    let map = new Map();
    map.set(0, -1); // Initial state

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let index = vowels.indexOf(char);
        
        // Toggle the corresponding bit for vowel characters
        if (index !== -1) {
            state ^= (1 << index);
        }
        
        // If the state has been seen before, calculate the max length
        if (map.has(state)) {
            maxLen = Math.max(maxLen, i - map.get(state));
        } else {
            map.set(state, i);
        }
    }
    
    return maxLen;
};
