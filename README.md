#dwkns-11ty-plugins
Set of plugins for 11ty. 
Probably not a lot of use for most people. 


### Usage

```js
// .eleventy.js

const { logToConsole } = require("dwkns-11ty-plugins");

module.exports = (eleventyConfig) => {
   eleventyConfig.addPlugin(logToConsole);
}

  ```


### Publish with:
npm publish --access public
Needs a OTP from the Authy app