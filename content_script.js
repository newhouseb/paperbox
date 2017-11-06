var savesvg = ' <svg width="32px" height="33px" viewBox="0 0 32 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M6.44,7.42691833 C6.44,6.32957364 7.32381925,5.44 8.41664191,5.44 L22.0470361,5.44 L27.56,10.06 L27.56,24.5861035 C27.56,25.6762564 26.6793887,26.56 25.5730817,26.56 L8.42691833,26.56 C7.32957364,26.56 6.44,25.6793887 6.44,24.5730817 L6.44,7.42691833 Z" id="path-1"></path> <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="21.12" height="21.12" fill="white"> <use xlink:href="#path-1"></use> </mask> <rect id="path-3" x="10.4" y="14.68" width="13.2" height="11.88"></rect> <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="13.2" height="11.88" fill="white"> <use xlink:href="#path-3"></use> </mask> <rect id="path-5" x="10.4" y="5.44" width="9.9" height="6.6"></rect> <mask id="mask-6" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="9.9" height="6.6" fill="white"> <use xlink:href="#path-5"></use> </mask> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <use id="Rectangle-4" stroke="#647281" mask="url(#mask-2)" stroke-width="3.96" xlink:href="#path-1"></use> <use id="Rectangle-5" stroke="#647281" mask="url(#mask-4)" stroke-width="3.96" xlink:href="#path-3"></use> <use id="Rectangle-5" stroke="#647281" mask="url(#mask-6)" stroke-width="3.96" xlink:href="#path-5"></use> <path d="M14.69,18.97 L19.31,18.97" id="Line" stroke="#647281" stroke-width="1.98" stroke-linecap="square"></path> <path d="M14.69,22.27 L19.31,22.27" id="Line" stroke="#647281" stroke-width="1.98" stroke-linecap="square"></path> </g> </svg> '
var header = null;
setInterval(function() {
  var maybe = document.getElementsByClassName('hp-pad-more-button');
  if (maybe.length != 0) {
    if (header != maybe[0].parentNode.parentNode) {
      header = maybe[0].parentNode.parentNode;
      var saveButton = document.createElement("a");
      saveButton.className = "dmc-button hpx-button dmc-button-link";
      saveButton.innerHTML = '<span class="dmc-button-content"><span class="icon-wrapper">' + savesvg + '</span></span>';
      saveButton.setAttribute("aria-label", "Save to Dropbox");
      saveButton.style.display = "inline-block";
      saveButton.style.width = "32px";
      saveButton.style.height = "32px";
      header.parentNode.insertBefore(saveButton, header);
      saveButton.addEventListener("click", function() {
        function main() {
            var name = window.location.href.match(new RegExp("doc/(.*)-[a-zA-Z0-9]+$"))[1];
            Dropbox.save("https://79kinofcfa.execute-api.us-east-1.amazonaws.com/api/bookmark/" + encodeURIComponent(window.location.href), name + ".paper.url", {
              success: function(response) {
                console.log("SAVED!", response);
              }
            });
        }
        var script = document.createElement('script');
        script.appendChild(document.createTextNode('('+ main +')();'));
        (document.body || document.head || document.documentElement).appendChild(script);
      });
    }
  }
}, 500);
