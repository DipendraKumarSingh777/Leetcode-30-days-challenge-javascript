var minSubarray = function(nums, p) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const remainder = totalSum % p;
    
    if (remainder === 0) return 0; // Already divisible by p

    const remainderMap = new Map();
    remainderMap.set(0, -1); // Initialize with prefix sum remainder 0
    let prefixSum = 0;
    let minLen = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        let target = (prefixSum - remainder + p) % p;
        
        if (remainderMap.has(target)) {
            minLen = Math.min(minLen, i - remainderMap.get(target));
        }
        
        remainderMap.set(prefixSum, i);
    }
    
    return minLen === nums.length ? -1 : minLen;
};
