var minSwaps = function(s) {
    let mismatch = 0, open = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            open++;
        } else {
            if (open > 0) {
                open--; // Match this closing bracket with an opening one.
            } else {
                mismatch++; // No opening bracket to match, count as mismatch.
            }
        }
    }
    
    // Each swap can fix two mismatches
    return Math.ceil(mismatch / 2);
};
