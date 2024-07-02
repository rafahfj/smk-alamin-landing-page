function addSeparate() {
  const svgTop = document.querySelectorAll("#svg-top");
  svgTop.forEach((e) => {
    e.innerHTML = `<defs>
                     <linearGradient id="t-grad" x1="50%" y1="100%" x2="50%" y2="0%" >
                           <stop offset="0%" style="stop-color:#ffee98;stop-opacity:1.00" />
                           <stop offset="98%" style="stop-color:rgb(255,255,255);stop-opacity:1.00" />
                     </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#t-grad)"/>`;
  });
  const svgBottom = document.querySelectorAll("#svg-bottom");
  svgBottom.forEach((e) => {
    e.innerHTML = `<defs>
                     <linearGradient id="b-grad" x1="50%" y1="100%" x2="50%" y2="0%" >
                           <stop offset="2%" style="stop-color:rgb(255,255,255);stop-opacity:1.00" />
                           <stop offset="100%" style="stop-color:#ffee98;stop-opacity:1.00" />
                     </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#b-grad)"/>`;
  });
}

addSeparate();
