const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  let nums = [];
  for (let str of strNums) {
    if (Number(str)) {
      nums.push(Number(str));
    } else {
      throw new BadRequestError(`${str} is not a valid number`);
    }
  }
  return nums;
}


module.exports = { convertStrNums };