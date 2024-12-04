function caesarCipher(str, shift) {
  let tmp = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (65 <= charCode && charCode <= 90) {
      charCode = (charCode - 65 + shift) % 26;
      tmp = tmp + String.fromCharCode(charCode + 65);
    } else if (97 <= charCode && charCode <= 122) {
      charCode = (charCode - 97 + shift) % 26;
      tmp = tmp + String.fromCharCode(charCode + 97);
    } else {
      tmp = tmp + str[i];
    }
  }
  return tmp;
}

module.exports = caesarCipher;
