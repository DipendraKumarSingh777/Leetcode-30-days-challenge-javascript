var findMinDifference = function(timePoints) {
    // Convert time to minutes
    let minutes = timePoints.map(time => {
        let [hours, mins] = time.split(':').map(Number);
        return hours * 60 + mins;
    });

    // Sort the array of minutes
    minutes.sort((a, b) => a - b);

    // Add the first time point + 1440 (for circular day)
    minutes.push(minutes[0] + 1440);

    let minDiff = Infinity;

    // Find the minimum difference
    for (let i = 1; i < minutes.length; i++) {
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }

    return minDiff;
};
