const { DateTime } = require('luxon');

// Prepend 'A' or 'An' depeding on the next word supplied
const readableDate = (eleventyConfig) => {
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    const readableDate = DateTime.fromISO(dateObj).toFormat('dd LLL yyyy');
    return readableDate;
  });
};

module.exports = {
  readableDate,
};
