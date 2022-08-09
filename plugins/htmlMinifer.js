const htmlmin = require("html-minifier");

// compress the html and inline CSS & JS
// usage: 
// eleventyConfig.addPlugin(htmlMinifer, { 
//   minify: minify 
// } );
// minify defaults to true if no options are passed in.

const htmlMinifer = (eleventyConfig, options) => {
  console.log(`[htmlMinifer]:`, options);
  eleventyConfig.addTransform("htmlMinifer", (content, outputPath) => {
    let minify = true

    if (options) {
      if (options.hasOwnProperty('minify')) {
        minify = options.minify
      }
    }
    if (!minify) return content;
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
      return minified;
    }
  });
}

module.exports = {
  htmlMinifer,
}
