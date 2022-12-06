const { DateTime } = require("luxon");

// Prepend 'A' or 'An' depeding on the next word supplied
const readableDate = (eleventyConfig, options) => {
  defaults = {
    format: "dd LLL yyyy",
  };
  options = Object.assign({}, defaults, options);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const readableDate = DateTime.fromISO(dateObj).toFormat(options.format);
    return readableDate;
  });
};

module.exports = {
  readableDate,
};
