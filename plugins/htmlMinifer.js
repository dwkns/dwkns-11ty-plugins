const htmlmin = require("html-minifier");

const htmlMinifer = (eleventyConfig, options) => {
  defaults = {
    minify: true,
    minifyJS: true,
    minifyCSS: true,
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
  };

  options = Object.assign({}, defaults, options);

  eleventyConfig.addTransform("htmlMinifer", (content, outputPath) => {
    minify = options.minify;

    if (!minify) return content; // minify not set, return content.

    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        minifyJS: options.minifyJS,
        minifyCSS: options.minifyCSS,
        useShortDoctype: options.useShortDoctype,
        removeComments: options.removeComments,
        collapseWhitespace: options.collapseWhitespace,
      });
      return minified;
    }
    return content;
  });
};

module.exports = {
  htmlMinifer,
};
