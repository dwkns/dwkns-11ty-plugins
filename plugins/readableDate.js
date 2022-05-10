const { DateTime } = require("luxon");

// Prepend 'A' or 'An' depeding on the next word supplied
const readableDate = (eleventyConfig) => {
  eleventyConfig.addFilter("readableDate",(dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  })
}

module.exports = {
  readableDate,
}
