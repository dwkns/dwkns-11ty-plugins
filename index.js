
const { logToConsole } = require("./plugins/logToConsole")
const { prependAnOrA } = require("./plugins/prependAnOrA")
const { readableDate } = require("./plugins/readableDate")
const { inlineSVG } = require("./plugins/inlineSVG")
const { htmlMinifer } = require("./plugins/htmlMinifer")

module.exports = {
  logToConsole,
  prependAnOrA,
  readableDate,
  inlineSVG,
  htmlMinifer,
};