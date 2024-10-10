var maxWidthRamp = function(nums) {
    let n = nums.length;
    let stack = [];

    // Step 1: Create a decreasing stack
    for (let i = 0; i < n; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    let maxRamp = 0;

    // Step 2: Traverse from right to left to find the max ramp width
    for (let j = n - 1; j >= 0; j--) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[j]) {
            maxRamp = Math.max(maxRamp, j - stack.pop());
        }
    }

    return maxRamp;
};
