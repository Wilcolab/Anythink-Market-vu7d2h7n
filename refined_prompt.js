/**
 * Converts a string to camelCase format.
 * 
 * Splits the input string by spaces, hyphens, and underscores, then converts
 * the result to camelCase where the first word is lowercase and subsequent words
 * are capitalized.
 * 
 * @param {string} input - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string type
 * 
 * @example
 * convertToCamelCase("hello-world") // returns "helloWorld"
 * convertToCamelCase("hello_world_foo") // returns "helloWorldFoo"
 * convertToCamelCase("hello world") // returns "helloWorld"
 * convertToCamelCase("") // returns ""
 */

/**
 * Converts a string to dot.case format.
 * 
 * Splits the input string by spaces, hyphens, and underscores, then converts
 * the result to dot.case where all words are lowercase and joined with dots.
 * 
 * @param {string} input - The input string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string type
 * 
 * @example
 * convertToDotCase("helloWorld") // returns "hello.world"
 * convertToDotCase("hello_world_foo") // returns "hello.world.foo"
 * convertToDotCase("hello world") // returns "hello.world"
 * convertToDotCase("") // returns ""
 */
function convertToCamelCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Validate input is a string
    if (typeof input !== "string") {
        throw new Error(`Expected a string, but received ${typeof input}`);
    }

    // Handle empty string
    if (input.length === 0) {
        return "";
    }

    // Split by spaces, hyphens, and underscores
    const words = input.split(/[\s\-_]+/);

    // Convert to camel case
    const camelCase = words
        .map((word, index) => {
            if (word.length === 0) return "";
            // First word stays lowercase, rest are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");

    return camelCase;
}

function convertToDotCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Validate input is a string
    if (typeof input !== "string") {
        throw new Error(`Expected a string, but received ${typeof input}`);
    }

    // Handle empty string
    if (input.length === 0) {
        return "";
    }

    // Split by spaces, hyphens, and underscores
    const words = input.split(/[\s\-_]+/);

    // Convert to dot case
    const dotCase = words
        .filter(word => word.length > 0)
        .map(word => word.toLowerCase())
        .join(".");

    return dotCase;
}

module.exports = { convertToCamelCase: convertToCamelCase, convertToDotCase: convertToDotCase };

