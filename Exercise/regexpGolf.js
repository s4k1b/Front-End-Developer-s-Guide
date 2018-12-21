// Fill in the regular expressions

verify(/car|cat/,
  ["my car", "bad cats"],
  ["camper", "high art"]);

verify(/pop|prop/,
  ["pop culture", "mad props"],
  ["plop", "prrrop"]);

verify(/ferret|ferry|ferrari/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);

verify(/ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
  ["bad punctuation ."],
  ["escape the period"]);

verify(/\w{7}/,
  ["hottentottententen"],
  ["no", "hotten totten tenten"]);

verify(/\b[^\We]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}