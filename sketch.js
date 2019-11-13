/*
function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
*/

var myLoc;
var myMap;
var canvas;

var mappa = new Mappa('Leaflet');

//
var tesoroLat = 4.6486259;
var tesoroLng = -74.2478936;

//
options = {
  lat: 0,
  lng: 0,
  zoom: 6,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var tesoro = {
	lat: tesoroLat,
	lng: tesoroLng,
	name: 'PuroBogota',
}

function preload(){
  myLoc = getCurrentPosition();
}


function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);




}


function draw() {

  clear();
  //
  var calcTesoro = calcGeoDistance(myLoc.latitude, myLoc.longitude, tesoroLat, tesoroLng, "km");
  fill(255);
  textSize(14);
  var pointtesoro = myMap.latLngToPixel(tesoroLat, tesoroLng);

  //
  noStroke();
  fill(255,0,0);
  strokeWeight(4);
  textSize(30);
  text('YOU ARE ' + Math.round(calcTesoro) + 'KM AWAY FROM THE TRESURE' , 50, 50);

  //
  noStroke();
  fill(0,0,255);
  strokeWeight(4);
  textSize(20);
  text('You have to find the tresure. it is located in a city that gives the name to one of best Club Dogo track' , 50, 100);


  //
  fill(255);
  stroke(40);
  textSize(40);
  var pointHere = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);




  //
  noStroke();
  fill(0,255,0);
  ellipse(pointHere.x, pointHere.y, 20);
  if(mouseX==pointtesoro.x){
  fill(255,0,0);
  ellipse(pointtesoro.x, pointtesoro.y, 20);
  }
  fill(0,0,255);
  text('YOU', pointHere.x -35, pointHere.y-15);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
