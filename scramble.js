"use strict";

window.onload = function() {
  var elements = document.body.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
    var text = '';
    elements[i].innerHTML.split(/(<.+?>)/).forEach(function(s) {
      text += s.charAt(0) === '<' ? s : scramble(s);
    });

    elements[i].innerHTML = text;
  }
};

// scrambles middle letters 
function scramble(s) {
  var scrambled = '';

  if (s.includes('&nbsp;')) { // ignores nbsp messes up the scramble a bunch
    return s;
  }

  s.split(' ').map(function(word) {
    if (word.length > 3) {
      var chars = word.split('');

      for (var i = 1; i < chars.length - 1; i++) {
        var j = Math.floor(Math.random() * (i - 1) + 1);
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
      }

      scrambled += chars.join('') + ' ';
    } else {
      scrambled += word + ' ';
    }
  });

  return scrambled.slice(0, -1);
}
