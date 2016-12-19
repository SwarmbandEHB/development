var ctx;
var c;

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
    var img = new Image();
    img.src = "img/sprite_sheet.png"; //http://vignette2.wikia.nocookie.net/tinyvillageuncut/images/6/66/XmasTreeSpriteSheet2D.png/revision/latest?cb=20130313003624
    img.onload = drawSprite;
    var count = 0;
    var xSprite;
    var ySprite;
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

function drawSprite(){


  requestAnimationFrame(drawSprite);
  ctx.clearRect(0, 0, 101, 142);
  xSprite = (count % 5) * 101;
  ySprite = Math.floor(count / 3) * 142;
  ctx.drawImage(img, xSprite, ySprite, 101, 142, 0, 0, 101, 142);
  if(count == 13)
    count = 0;
    else
      count ++;
}
}
