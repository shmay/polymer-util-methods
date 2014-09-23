// Generated by CoffeeScript 1.7.1
(function() {
  var matchesMethod, pad;

  matchesMethod = bowser.msie ? 'msMatchesSelector' : bowser.firefox ? 'mozMatchesSelector' : bowser.webkit ? 'webkitMatchesSelector' : 'matches';

  Element.prototype.hasClass = function(klass) {
    return this.classList.contains(klass);
  };

  Element.prototype.closestParent = function(selector) {
    var node;
    node = this;
    while (node) {
      if (node[matchesMethod] && node[matchesMethod](selector)) {
        break;
      } else {
        node = node.parentNode;
      }
    }
    return node;
  };

  pad = function(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  Date.prototype.formDate = function() {
    var date, month, year;
    year = this.getFullYear();
    date = pad(this.getDate());
    month = pad(this.getMonth());
    return "" + year + "-" + month + "-" + date;
  };

  Array.prototype.functionalReverse = function() {
    var a, ret, _i, _len;
    ret = new Array;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      a = this[_i];
      ret.unshift(a);
    }
    return ret;
  };

  this.extendOwn = function(obj1, obj2) {
    var key, keys, _i, _len, _results;
    keys = Object.getOwnPropertyNames(obj2);
    _results = [];
    for (_i = 0, _len = keys.length; _i < _len; _i++) {
      key = keys[_i];
      _results.push(obj1[key] = obj2[key]);
    }
    return _results;
  };

}).call(this);