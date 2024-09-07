// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function isSubPath(head, root) {
    if (!root) return false;
    return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
}

function dfs(head, node) {
    if (!head) return true; // Reached the end of the linked list
    if (!node || node.val !== head.val) return false; // Mismatch or end of tree
    return dfs(head.next, node.left) || dfs(head.next, node.right); // Continue DFS
}
