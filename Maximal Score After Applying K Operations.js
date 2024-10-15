/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    // Use a max-heap to store the elements of nums
    let maxHeap = new MaxPriorityQueue();
    
    // Add all the elements to the max heap
    for (let num of nums) {
        maxHeap.enqueue(num);
    }

    let score = 0;

    // Perform K operations
    for (let i = 0; i < k; i++) {
        // Extract the maximum element from the heap
        let maxVal = maxHeap.dequeue().element;
        
        // Add the maximum value to the score
        score += maxVal;

        // Apply the operation: maxVal is replaced with Math.ceil(maxVal / 3)
        maxHeap.enqueue(Math.ceil(maxVal / 3));
    }

    return score;
};
