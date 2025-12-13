function toKebabCase(str) {
    return str
        .replace(/[\s_]+/g, '-')
        .replace(/[^\w-]/g, '')
        .toLowerCase();
}

console.log(toKebabCase("Hello World_plays"))

