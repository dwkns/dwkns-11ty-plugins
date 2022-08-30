const util = require('util');
const escapeHtml = require('escape-html')
// utility function to log value to HTML & the Console
let logToConsole = (eleventyConfig, options) => {
  defaults = {
    logToHtml: true,
    logToConsole: true,
    colorizeConsole: false,
    escapeHTML: true,
  }
  options = Object.assign({}, defaults, options);
  
  eleventyConfig.addFilter("console", (value, depth=4) => {
    let consoleStr = util.inspect(value, showHidden = false, depth, colorize = options.colorizeConsole);
    let htmlStr = util.inspect(value, showHidden = false, depth, colorize = false);
    if (options.logToConsole) {
      console.log('-------------start console output-------------')
      console.log( `${ options.escapeHTML ? escapeHtml(consoleStr) : consoleStr }`);
      console.log('-------------end-------------');
    } 
    if (options.logToHtml) {
      let css = `
      <style>
      pre {
        background: #f4f4f4;
        border: 1px solid #ddd;
        border-left: 3px solid #f36d33;
        color: #666;
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1em 1.5em;
        display: block;
        word-wrap: break-word;
      }
      </style>`
      
      let html = `<div style="margin-top: 20px; "><pre><code>  ${ options.escapeHTML ? escapeHtml(htmlStr) : htmlStr } </code></pre> </div>` 
      
      return css + html
    }
  });
}
module.exports = {
  logToConsole,
}

