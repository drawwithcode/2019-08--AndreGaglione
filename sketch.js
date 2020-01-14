let myImage;
var myMap;
var canvas;
var key = "pk.eyJ1IjoiYW5mbCIsImEiOiJjazJuMXQzdGYwaW12M2JuenpiYjFha2FjIn0.96lS6KE5xgkDatYk7N-XgA";
var mappa = new Mappa("MapboxGL", key);
var homeLat = -37.9701542;
var homeLon = 146.8739643;
var meLat = 45.5048151;
var meLon = 9.1629839;
var options = {
  lat: 0,
  lng: 0,
  zoom: 2,
  style: "mapbox://styles/mapbox/dark-v9"
}





function preload() {
  myImage = loadImage("cover.png");
  myImage2 = loadImage("myself.png");
}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}



function draw() {
  clear();

  var melbourne = myMap.latLngToPixel(homeLat, homeLon);
  var me = myMap.latLngToPixel(meLat, meLon);

  //Line
  line(melbourne.x, melbourne.y, me.x, me.y);

  //new location
  ellipse(melbourne.x, melbourne.y, 5);
  image(myImage, melbourne.x, melbourne.y, myImage.width = 50, myImage.height = 50);

  //actual location
  image(myImage2, me.x, me.y, myImage2.width = 50, myImage2.height = 50);
  ellipse(me.x, me.y, 5);
  stroke("red");
  strokeWeight(2);

  //title definitions
  push();
  var myText = "Gonna save Australia and koalas!";
  textFont("IMFellDoublePica-Italic.ttf");
  textSize(120);
  fill('red');
  noStroke();
  textAlign(CENTER);
  text(myText, 200, 100);
  pop();



}
