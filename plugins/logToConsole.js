const util = require('util');
const escapeHtml = require('escape-html');
// utility function to log value to HTML & the Console
let logToConsole = (eleventyConfig, options) => {
  defaults = {
    logToHtml: true,
    logToConsole: false,
    colorizeConsole: false,
    escapeHTML: true,
  };
  options = Object.assign({}, defaults, options);

  eleventyConfig.addShortcode('console', (value, title = '', depth = 4) => {
    let consoleStr = util.inspect(
      value,
      (showHidden = false),
      depth,
      (colorize = options.colorizeConsole)
    );
    let htmlStr = util.inspect(
      value,
      (showHidden = false),
      depth,
      (colorize = false)
    );

    let displayTitle = '';

    if (options.logToConsole) {
      console.log('-------------start console output-------------');
      if (title) {
        console.log(
          `[ ${title} ]`,
          `${options.escapeHTML ? escapeHtml(consoleStr) : consoleStr}`
        );
      } else {
        console.log(
          `${options.escapeHTML ? escapeHtml(consoleStr) : consoleStr}`
        );
      }
      console.log('-------------end-------------');
    }

    if (options.logToHtml) {
      if (title) {
        displayTitle = `<p class="title">${title}</p>`;
      }
      let css = `
      <style>
      .code-block {
        background: #f4f4f4;
        border: 1px solid #ddd;
        border-left: 3px solid #f36d33;
        color: #666;
        max-width: 100%;
        padding: 0.5rem 1rem;
        display: block;
      }
      .title {
        font-size: 18px;
        font-family: sans-serif;
        font-weight: 600;
        margin-top:0.5rem;
        margin-bottom:0.5rem;
      }
      pre {
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.6;
        word-wrap: break-word;
        overflow: auto;
        margin: 0;
      }
      </style>`;

      let html = `<div class="code-block">${displayTitle}<pre><code>${
        options.escapeHTML ? escapeHtml(htmlStr) : htmlStr
      }</code></pre></div>`;

      return css + html;
    }
  });
};
module.exports = {
  logToConsole,
};
