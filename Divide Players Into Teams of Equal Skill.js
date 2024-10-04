/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const totalSum = skill.reduce((acc, val) => acc + val, 0);
    const n = skill.length;
    const expectedSum = (totalSum / (n / 2));

    skill.sort((a, b) => a - b);

    let chemistry = 0;
    for (let i = 0, j = n - 1; i < j; i++, j--) {
        if (skill[i] + skill[j] !== expectedSum) {
            return -1;
        }
        chemistry += skill[i] * skill[j];
    }
    
    return chemistry;
};
