var uncommonFromSentences = function(s1, s2) {
    let wordCount = {};
    
    // Split both sentences into words and count their occurrences
    let words = s1.split(' ').concat(s2.split(' '));
    
    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    // Return words that appear only once
    return Object.keys(wordCount).filter(word => wordCount[word] === 1);
};
