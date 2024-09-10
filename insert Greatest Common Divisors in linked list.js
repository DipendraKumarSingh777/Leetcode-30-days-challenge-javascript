var insertGreatestCommonDivisors = function(head) {
    let current = head;
    
    while (current && current.next) {
        let gcdValue = gcd(current.val, current.next.val);
        let newNode = new ListNode(gcdValue);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
    }
    
    return head;
};

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
