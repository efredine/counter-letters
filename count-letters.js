function countLetters(text) {
  if(!text.length) return {};
  return text.split("").reduce(function(freq, char){
    if(!freq[char]) {
      freq[char] = 0;
    }
    freq[char] += 1;
    return freq;
  }, {});
}

["This is a test",
"abcdefg ",
"122333444"].forEach(function(test){
  console.log(test, countLetters(test));
});