export function toSentenceCase(sentence) {
  var words = sentence.toLowerCase().split(" "); // convert to lowercase and split into words
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1); // capitalize first letter of each word
  }
  return words.join(" "); // join words back together into a string
}
