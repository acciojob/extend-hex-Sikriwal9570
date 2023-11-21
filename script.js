function extendHex(shortHex) {
  // Remove the # if present
  shortHex = shortHex.replace(/^#/, '');

  // Ensure the shortHex has exactly 3 characters
  if (shortHex.length === 3) {
    // Extend each color component to two characters
    shortHex = shortHex.replace(/[0-9a-f]/gi, (match) => match + match);
  }

  // Add the # prefix and return the full hex code
  return `#${shortHex.toUpperCase()}`;
}

// Examples
console.log(extendHex("#abc"));  // expected output: "#aabbcc"
console.log(extendHex("abc"));   // expected output: "#aabbcc"
console.log(extendHex("#AbC"));  // expected output: "#AABBCC"
console.log(extendHex("#f09"));  // expected output: "#ff0099"
