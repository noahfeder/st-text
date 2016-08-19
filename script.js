window.onload  = function() {
  var inputs = document.getElementsByTagName('input');

  function handleText(text,id) {
    text = text.trim();
    if (id === 'first') {
      var first = document.querySelector('.first');
      var last = document.querySelector('.last');
      var middle = document.querySelector('.middle')
      var len = text.length;
      var top = document.getElementById('top');
      top.textContent = '';
      var middleText = '';
      if (len < 2) {
        first.textContent = '';
        last.textContent = '';
        middle.textContent = text;
        top.textContent = '____'
      } else {
        for (var i = 0; i <= len + 1; i++) {
          top.textContent += '_';
        }
        for (var i = 0; i < len; i++) {
          if (i === 0) {
            first.textContent = text[i]
          } else if (i === len - 1) {
            last.textContent = text[i]
          } else {
            middleText += text[i]
          }
        }
        middle.textContent = middleText;
      }


    } else {
      document.querySelector('.between').textContent = text;
    }
  }

  function getValue(e) {
    if (e.keyCode !== 9 && e.keyCode !== 16) {
      var text = this.value;
      var id = this.id;
      handleText(text,id)
    }

  }

  inputs[0].addEventListener('keyup',getValue)
  inputs[1].addEventListener('keyup',getValue)

}
