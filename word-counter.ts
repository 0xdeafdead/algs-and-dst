// Count Occurrences of Words in a Log File
// Problem: Given a log file, count the occurrences of each word and return the top k most frequent words.
// Required Time Complexity:O(nlogk).

function wordCounter(log: string, top: number) {
  const wordCounted = new Map<string, number>();
  const words = log.split(/[, \n]+/);
  words.forEach((w) => {
    w.trim();
    let current = wordCounted.get(w);
    if (!current) {
      current = 1;
    } else {
      current++;
    }
    wordCounted.set(w, current);
    console.log("wordCounted", wordCounted);
  });
  return Array.from(wordCounted)
    .sort((a, b) => b[1] - a[1])
    .slice(0, top)
    .map((tuple) => tuple);
}

const y = wordCounter(
  "apple, bananas, pears, apple, bananas, grape, watermelon, bananas",
  3
);
console.log("x", y);
