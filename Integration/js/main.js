var ctx;
var c;
var ip;
var logo;
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
  initCanvas();
}

function initCanvas() {
  c = document.getElementById("myCanvas");
  if (!c || !isCanvasSupported) {
    console.log("Canvas bestaat niet of wordt niet ondersteund.");
  } else {
    ctx = c.getContext("2d");
    resetCanvas();
    logo = new logoAnimation();
    logo.logo;
  }

  function resetCanvas() {
    containerElement = document.getElementById("myContainer");
    c.width = 1024;
    c.height = containerElement.offsetHeight;
  }


  function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2D'));
  }
}

function logoAnimation() {
  this.logo = new Image();
  this.logo.src = "img/logo.png";
  this.logo.addEventListener('load', this.assetsLoaded);

  this.assetsLoaded = function() {
    ctx.drawImage(this.logo, 50, 50);
  }
}
