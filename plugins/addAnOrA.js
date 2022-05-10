const lodash = require("lodash");

// Prepend 'A' or 'An' depeding on the next word supplied
const addAnOrA = (eleventyConfig) => {
  eleventyConfig.addFilter("addAnOrA", (word) => {
    firstChar = word.charAt(0)
    if (/[aeiou]/i.test(firstChar)) {
      return `An ${lodash.lowerCase(word)}`
    } else {
      return `A ${lodash.lowerCase(word)}`
    }
  });
}

module.exports = {
  addAnOrA,
}