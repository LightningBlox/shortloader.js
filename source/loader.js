var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar-main");
    var elemf = document.getElementById("bar-div");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.remove();
        elemf.remove();
      }
    }
  }
}

  console.log("%cShortLoader.js! Making the web fast!", "color: #a0b5c3; font-family: sans-serif; font-size: 2em; font-weight: bolder;");
  console.log("%cVanillaJS, NO Dependencies!", "color: teal; font-family: sans-serif; font-size: 1em; font-weight: bolder;");

function removeElems() {
  
  console.log("%cShortLoader.js has been loaded! Thank you for using *SHORTLOADER*", "color: black; font-family: sans-serif; font-size: 0.8em; font-weight: bolder;");
 
}

console.log("Loaded using GITHUB")

// Powered by ShortLoader.js
// Thank you for installing it to your site!
// GNU Lesser General Public License v2.1
