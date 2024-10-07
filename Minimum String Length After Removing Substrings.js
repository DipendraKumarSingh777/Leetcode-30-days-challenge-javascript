function minLength(s) {
    const stack = [];
    for (let char of s) {
        // If the top of the stack and the current character form "AB" or "CD", pop the stack
        if (stack.length && ((char === 'B' && stack[stack.length - 1] === 'A') || 
                            (char === 'D' && stack[stack.length - 1] === 'C'))) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length;
}