//Split Linked List in Parts
// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var splitListToParts = function(head, k) {
    let length = 0;
    let node = head;
    
    // Calculate the length of the linked list
    while (node) {
    length++;
    node = node.next;
    }
    
    // Determine the size of each part
    let partSize = Math.floor(length / k);
    let extraNodes = length % k;
    
    const result = [];
    node = head;
    
    for (let i = 0; i < k; i++) {
    let partHead = node;
    let partLength = partSize + (extraNodes > 0 ? 1 : 0);
    extraNodes--;
    
      // Create the current part
    for (let j = 0; j < partLength - 1; j++) {
        if (node) node = node.next;
    }
    
      // Disconnect the current part from the rest
    if (node) {
        let nextPart = node.next;
        node.next = null;
        node = nextPart;
    }
    
    result.push(partHead);
    }
    
    return result;
};