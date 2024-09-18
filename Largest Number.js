var largestNumber = function(nums) {
    nums.sort((a, b) => ('' + b + a) - ('' + a + b));
    let result = nums.join('');
    return result[0] === '0' ? '0' : result;
};
