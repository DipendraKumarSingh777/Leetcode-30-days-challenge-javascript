function robotSim(commands, obstacles) {
    // Directions are North, East, South, West
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dirIndex = 0; // Start facing North
    let x = 0, y = 0; // Start position at origin (0, 0)
    let maxDistSquared = 0;
    
    // Convert obstacles array to a Set of strings for fast lookup
    let obstacleSet = new Set(obstacles.map(obstacle => obstacle[0] + ',' + obstacle[1]));

    for (let command of commands) {
        if (command === -2) {
            // Turn left
            dirIndex = (dirIndex + 3) % 4;
        } else if (command === -1) {
            // Turn right
            dirIndex = (dirIndex + 1) % 4;
        } else {
            // Move forward
            let dx = directions[dirIndex][0];
            let dy = directions[dirIndex][1];
            
            for (let i = 0; i < command; i++) {
                let nextX = x + dx;
                let nextY = y + dy;
                
                if (!obstacleSet.has(nextX + ',' + nextY)) {
                    x = nextX;
                    y = nextY;
                    maxDistSquared = Math.max(maxDistSquared, x * x + y * y);
                } else {
                    break; // Stop if obstacle is encountered
                }
            }
        }
    }
    
    return maxDistSquared;
}