// Generated by CoffeeScript 1.11.1
(function() {
  var SubstringIterator;

  SubstringIterator = (function() {
    function SubstringIterator(string1) {
      this.string = string1;
      this.length = this.string.length;
      this.occurrences = 1;
    }

    SubstringIterator.prototype.forEach = function(callback) {
      var i, pos, ref, res;
      while (this.length > 0) {
        for (pos = i = 0, ref = this.occurrences; 0 <= ref ? i < ref : i > ref; pos = 0 <= ref ? ++i : --i) {
          res = callback(this.string.substr(pos, this.length));
          if (res === false) {
            return;
          }
        }
        this.length -= 1;
        this.occurrences += 1;
      }
    };

    return SubstringIterator;

  })();

  module.exports = function(strings) {
    var copy, firstString, result, substrings;
    if (strings.length < 2) {
      return false;
    }
    strings.sort(function(a, b) {
      return a.length > b.length;
    });
    copy = strings.slice(0);
    firstString = copy.shift();
    result = false;
    substrings = new SubstringIterator(firstString);
    substrings.forEach(function(substring) {
      var i, len, string;
      for (i = 0, len = strings.length; i < len; i++) {
        string = strings[i];
        if (string.indexOf(substring) === -1) {
          return;
        }
      }
      result = substring;
      return false;
    });
    return result;
  };

}).call(this);
