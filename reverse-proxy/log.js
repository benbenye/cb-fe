/**
 * Created by bby on 18/3/22.
 */
const util = require("util");

/** 打印日志 */
module.exports = function log(...args) {
  const time = new Date().toLocaleString();
  console.log(time, util.format(...args));
};
