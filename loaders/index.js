const expressLoader = require("./express");
// const mongooseLoader = require("express");

exports.init = () => {
  expressLoader();
  // mongooseLoader();
};
