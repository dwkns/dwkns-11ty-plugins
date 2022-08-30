// Prepend 'A' or 'An' depeding on the next word supplied
const prependAnOrA = (eleventyConfig) => {
  eleventyConfig.addFilter("prependAnOrA", (word) => {
    firstChar = word.charAt(0)

    // check to see if the first char is uppercase or lowercase. 
    // If it's upper case the the prefix should be too
    // If not the the prefix should be lowercase. 

    if (/[aeiou]/i.test(firstChar)) {
      return `An ${word.toLowerCase()}`
    } else {
      return `A ${word.toLowerCase()}`
    }
    
  });
}

module.exports = {
  prependAnOrA,
}