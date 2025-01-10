// Reverse Words in a String
// Problem: Reverse the words in a string, maintaining the order of characters within each word.
// Required Time Complexity: O(n).

function reversePhrase(phrase: string) {
  const newPhrase = phrase.split(" ").reverse().join(" ");
  console.log("newPhrase", newPhrase);
}

function reverseWordsInPhrase(phrase: string) {
  const words = phrase.split(" ");
  const res = words.map((w) => w.split("").reverse().join("")).join(" ");
  console.log("res", res);
}

reversePhrase("el veloz tramposo mono tomo mi monociclo");
reverseWordsInPhrase("el veloz tramposo mono tomo mi monociclo");
