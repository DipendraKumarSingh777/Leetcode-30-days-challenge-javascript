var smallestRange = function(nums) {
    const minHeap = new MinPriorityQueue({ compare: (a, b) => nums[a.listIdx][a.elementIdx] - nums[b.listIdx][b.elementIdx] });
    let max = -Infinity;
    let range = [-Infinity, Infinity];
    
    // Initialize the heap
    for (let i = 0; i < nums.length; i++) {
        minHeap.enqueue({ listIdx: i, elementIdx: 0 });
        max = Math.max(max, nums[i][0]);
    }

    while (minHeap.size()) {
        const { listIdx, elementIdx } = minHeap.dequeue();
        const min = nums[listIdx][elementIdx];
        
        // Check if we found a smaller range
        if (max - min < range[1] - range[0]) {
            range = [min, max];
        }
        
        // Move to the next element in the current list
        if (elementIdx + 1 < nums[listIdx].length) {
            minHeap.enqueue({ listIdx, elementIdx: elementIdx + 1 });
            max = Math.max(max, nums[listIdx][elementIdx + 1]);
        } else {
            break; // We've reached the end of one of the lists
        }
    }
    
    return range;
};
