exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /\w+/g.test(str);

  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
