const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return _.reject(str, item => item === target).join("");
};

const hasChar = function(str, target) {
  return _.some(str, item => item === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, item => !isNaN(item))
};

const filterToOnlyDigits = function(str) {
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  return _.uniq(str).join("");
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};