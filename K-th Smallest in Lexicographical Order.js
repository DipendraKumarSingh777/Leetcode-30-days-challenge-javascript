var findKthNumber = function(n, k) {
    const countSteps = (curr, n) => {
        let steps = 0;
        let first = curr, last = curr;
        while (first <= n) {
            steps += Math.min(n + 1, last + 1) - first;
            first *= 10;
            last = last * 10 + 9;
        }
        return steps;
    };

    let curr = 1;
    k--;
    while (k > 0) {
        let steps = countSteps(curr, n);
        if (steps <= k) {
            k -= steps;
            curr++;
        } else {
            curr *= 10;
            k--;
        }
    }

    return curr;
};
