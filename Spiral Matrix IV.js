var spiralMatrix = function(m, n, head) {
    // Create the result matrix filled with -1
    const matrix = Array.from({ length: m }, () => Array(n).fill(-1));
    
    // Set up directions for movement: right, down, left, up
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    let dir = 0;  // Initial direction (right)
    let row = 0, col = 0;  // Starting position
    let currentNode = head;  // Start from the head of the linked list
    
    while (currentNode) {
        matrix[row][col] = currentNode.val;  // Fill the current position with the node value
        
        // Calculate the next row and column based on the current direction
        const nextRow = row + directions[dir][0];
        const nextCol = col + directions[dir][1];
        
        // Check if the next position is within bounds and not already filled
        if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n && matrix[nextRow][nextCol] === -1) {
            row = nextRow;
            col = nextCol;
        } else {
            // Change direction if we can't move in the current direction
            dir = (dir + 1) % 4;
            row += directions[dir][0];
            col += directions[dir][1];
        }
        
        currentNode = currentNode.next;  // Move to the next node in the linked list
    }
    
    return matrix;  // Return the filled matrix
};
