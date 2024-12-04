function capitalize(str) {
  trimmed = str.trim();
  firstLetterIndex = str.indexOf(trimmed[0]);
  return (
    str.substring(0, firstLetterIndex) +
    str.trim().substring(0, 1).toUpperCase() +
    str.substring(firstLetterIndex + 1)
  );
}

module.exports = capitalize;
