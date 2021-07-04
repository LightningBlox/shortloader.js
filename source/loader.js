var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar-main");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function removeElems() {
  const elems = document.querySelectorAll('.bar-div');
  setTimeout(function() {
    for (const e of elems) {
      e.remove();
    }
  }, 1200);
}
