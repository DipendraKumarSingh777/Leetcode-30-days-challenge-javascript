function areSentencesSimilar(sentence1, sentence2) {
    // Split sentences into arrays of words
    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');
    
    // Define pointers for both sentences
    let i = 0;
    let j = 0;
    
    // Compare from the start
    while (i < words1.length && i < words2.length && words1[i] === words2[i]) {
        i++;
    }
    
    // Compare from the end
    while (j < words1.length - i && j < words2.length - i && words1[words1.length - 1 - j] === words2[words2.length - 1 - j]) {
        j++;
    }
    
    // If the total number of matched words equals the length of one of the sentences, they are similar
    return i + j === Math.min(words1.length, words2.length);
}
