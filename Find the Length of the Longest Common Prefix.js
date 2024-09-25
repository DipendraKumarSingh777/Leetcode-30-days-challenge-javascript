class TrieNode {
    constructor() {
        this.children = {};
        this.score = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.score++; // increment score for each prefix
        }
    }

    getPrefixScore(word) {
        let node = this.root;
        let totalScore = 0;
        for (const char of word) {
            node = node.children[char];
            totalScore += node.score;
        }
        return totalScore;
    }
}

var sumPrefixScores = function(words) {
    const trie = new Trie();

    // Insert all words into the Trie
    for (const word of words) {
        trie.insert(word);
    }

    // Calculate the prefix score for each word
    const result = [];
    for (const word of words) {
        result.push(trie.getPrefixScore(word));
    }

    return result;
};
