/**
 * Convert a string to camelCase.
 * Examples:
 *  "first name"   -> "firstName"
 *  "user_id"      -> "userId"
 *  "SCREEN_NAME"  -> "screenName"
 *  "mobile-number"-> "mobileNumber"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') return '';

    return input
        .trim()
        .split(/[^A-Za-z0-9]+/) // split on spaces, underscores, hyphens, punctuation
        .filter(Boolean)
        .map((part, idx) => {
            const lower = part.toLowerCase();
            if (idx === 0) return lower;
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;