class MyCalendar {
    constructor() {
        this.calendar = [];
    }

    book(start, end) {
        for (let [s, e] of this.calendar) {
            if (Math.max(s, start) < Math.min(e, end)) {
                return false;
            }
        }
        this.calendar.push([start, end]);
        return true;
    }
}
