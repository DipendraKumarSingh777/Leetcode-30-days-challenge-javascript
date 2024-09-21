var lexicalOrder = function(n) {
    let result = [];

    function dfs(curr) {
        if (curr > n) return;
        result.push(curr);
        for (let i = 0; i <= 9; i++) {
            if (curr * 10 + i > n) return;
            dfs(curr * 10 + i);
        }
    }

    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }

    return result;
};
