function reverseString(str) {
  let tmp = "";
  for (let i = -1; i > -str.length - 1; i--) {
    tmp = tmp.concat(str.at(i));
  }
  return tmp;
}

module.exports = reverseString;
