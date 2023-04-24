export function toSentenceCase(sentence) {
  var words = sentence.toLowerCase().split(" "); // convert to lowercase and split into words
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1); // capitalize first letter of each word
  }
  return words.join(" "); // join words back together into a string
}

export function insertionSort(arr) {
  let copyArr = arr;
  for (let i = 1; i < copyArr.length; i++) {
    let j = i - 1;
    const temp = copyArr[i];
    while (j >= 0 && copyArr[j].bloodGroup > temp.bloodGroup) {
      copyArr[j + 1] = copyArr[j];
      j--;
    }
    copyArr[j + 1] = temp;
  }
  return copyArr;
}
