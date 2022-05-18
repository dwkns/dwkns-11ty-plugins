const cheerio = require('cheerio');
const fs = require('fs')


// Prepend 'A' or 'An' depeding on the next word supplied
const inlineSVG = (eleventyConfig) => {
  eleventyConfig.addAsyncShortcode("inlineSVG", async (fileName, options) => {
    let svgOptions = options || {}
    let className = svgOptions.class || ''
    let id = svgOptions.id || ''
    let title = svgOptions.alt || ''

    // read the SVG 
    const svgData = fs.readFileSync(fileName, 'utf8');

    //parse it with cheerio
    const $ = cheerio.load(svgData, {
      xmlMode: true
    });

    // Add class if it is given. 
    $('svg').addClass(className);

    // Add ID if given
    $('svg').attr("id", id);

    $('title').remove(); // get rid of any titles. 
    $('svg').prepend(`<title>${title}</title>`);

    // Remove height and width attributes
    $('svg').removeAttr("width");
    $('svg').removeAttr("height");

    return $.html();
  }
  )
}

module.exports = {
  inlineSVG,
}
