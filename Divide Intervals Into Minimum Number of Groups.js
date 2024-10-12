function minGroups(intervals) {
    let events = [];

    // Separate the start and end of each interval as two different events
    for (let [start, end] of intervals) {
        events.push([start, 1]);   // +1 for starting an interval
        events.push([end + 1, -1]); // -1 for ending an interval (end + 1 to avoid overlap)
    }

    // Sort events by time; if times are the same, sort by event type (start before end)
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let maxGroups = 0;
    let currentGroups = 0;

    // Traverse through events
    for (let [time, event] of events) {
        currentGroups += event;
        maxGroups = Math.max(maxGroups, currentGroups);
    }

    return maxGroups;
}