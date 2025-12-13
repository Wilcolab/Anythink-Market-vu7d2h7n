/**
 * Adds two numbers and returns their sum.
 * Throws a TypeError for null/undefined or non-numeric inputs.
 *
 * Examples:
 *   addNumbers(5, 3) // 8
 *   addNumbers('5', 3) // throws TypeError
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addNumbers(a, b) {
    if (a === null || a === undefined) {
        throw new TypeError('Invalid input: first argument is null or undefined');
    }
    if (b === null || b === undefined) {
        throw new TypeError('Invalid input: second argument is null or undefined');
    }
    if (typeof a !== 'number' || !Number.isFinite(a)) {
        throw new TypeError(`Invalid input: first argument must be a finite number. Received ${a} (${typeof a})`);
    }
    if (typeof b !== 'number' || !Number.isFinite(b)) {
        throw new TypeError(`Invalid input: second argument must be a finite number. Received ${b} (${typeof b})`);
    }
    return a + b;
}

module.exports = addNumbers;