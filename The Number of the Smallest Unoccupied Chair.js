/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    const leavingQueue = new MinPriorityQueue({ priority: (point) => point.leaving });
    const chairQueue = new MinPriorityQueue();
    times = times.map((time, i) => {
        chairQueue.enqueue(i);
        return [...time, i];
    }).sort((a, b) => b[0] - a[0]);

    while (times.length) {
        const [arrival, leaving, index] = times.pop();

        while (leavingQueue.front()?.element?.leaving <= arrival) {
            chairQueue.enqueue(leavingQueue.dequeue()?.element?.chair);
        }

        if (index === targetFriend) return chairQueue.front()?.element;
        leavingQueue.enqueue({ leaving, chair: chairQueue.dequeue()?.element });
    }
};