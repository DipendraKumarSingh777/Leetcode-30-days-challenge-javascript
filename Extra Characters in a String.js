var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = dp[i + 1] + 1;  // Initialize to remove one character
        for (const word of dictionary) {
            if (s.startsWith(word, i)) {
                dp[i] = Math.min(dp[i], dp[i + word.length]);  // Check if word can be used from index i
            }
        }
    }
    
    return dp[0];
};
