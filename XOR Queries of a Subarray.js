var xorQueries = function(arr, queries) {
    let prefixXOR = new Array(arr.length + 1).fill(0);

    // Compute the prefix XOR
    for (let i = 0; i < arr.length; i++) {
        prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
    }

    let result = [];
    for (let [left, right] of queries) {
        result.push(prefixXOR[right + 1] ^ prefixXOR[left]);
    }

    return result;
};
