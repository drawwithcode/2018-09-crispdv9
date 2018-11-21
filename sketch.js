var myLoc; //my location. we will put here the position and the in the set up
//is like the sound, we have to put in the preload
var myMap;
var canvas;
//we create a new instance of mapa. we have to define the mapa provider (googlemaps, open street map(use in this case), mapbox)
//var mappa = new Mappa('Leaflet')
var mappa = new Mappa('MapboxGL','pk.eyJ1IjoiY3Jpc3BkdjkiLCJhIjoiY2pvaDFiYmh3MDFsdjNxbzRhZDNtdnI5NCJ9.kqFlgrsHm5LBowBobc-DDg')

//ukraine
var ukraineLat = 47.9854715
var ukraineLon = 22.2083201


var Uoptions = {
  lat: ukraineLat,
  lng: ukraineLon,
  zoom: 1,
  style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',
}

//libia
var libiaLat = 26.0956868
var libiaLon = 8.282623

var Loptions = {
    lat: libiaLat,
    lng: libiaLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}

//china
var chinaLat = 11.0533911
var chinaLon = 102.974913

var Coptions = {
    lat: chinaLat,
    lng: chinaLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}
//afganistan
var afganistanLat = 33.8611464
var afganistanLon = 63.199243

var Aoptions = {
    lat: afganistanLat,
    lng: afganistanLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}
//iraq
var iraqLat = 33.1489605
var iraqLon = 39.2099647

var Ioptions = {
    lat: iraqLat,
    lng: iraqLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}

//siria
var siriaLat = 34.7987328
var siriaLon = 36.7532004

var Soptions = {
    lat: siriaLat,
    lng: siriaLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}

//nigeria
var nigeriaLat = 9.017242
var nigeriaLon = 4.1676945

var Noptions = {
    lat: nigeriaLat,
    lng: nigeriaLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}

//mexico
var mexicoLat = 19.3910036
var mexicoLon = -99.2840431

var Moptions = {
    lat: mexicoLat,
    lng: mexicoLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}

//coreadelnorte
var coreaLat = 40.2828128
var coreaLon = 125.1751037

var Coptions = {
    lat: coreaLat,
    lng: coreaLon,
    zoom: 1,
    style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

  }

    //palestina
    var palestinaLat = 31.8858263
    var palestinaLon = 34.3302325

    var Poptions = {
        lat: palestinaLat,
        lng: palestinaLon,
        zoom: 1,
        style: 'mapbox://styles/crispdv9/cjorcfafx6xt12spkdnvjk4z2',

}

function preload(){
  myLoc = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight)

  myMap = mappa.tileMap(Uoptions);
  myMap.overlay(canvas);

  var distance = calcGeoDistance(myLoc.latitude,myLoc.longitude, ukraineLat, ukraineLon, "km")

}

function draw() {
  //this clean the canvas
  clear();

  line(myLoc.latitude,myLoc.longitude, ukraineLat, ukraineLon)

  // your position
  strokeWeight(3)
  stroke(random(255),random(255),random(255))
  fill(255);
  var point = myMap.latLngToPixel(myLoc.latitude,myLoc.longitude)
  ellipse(point.x,point.y,10)

  //ukraine
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(ukraineLat,ukraineLon)
  ellipse(point.x,point.y,5)

  //libia
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(libiaLat,libiaLon)
  ellipse(point.x,point.y,7)

  //china
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(chinaLat,chinaLon)
  ellipse(point.x,point.y,15)

  //afganistan
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(afganistanLat,afganistanLon)
  ellipse(point.x,point.y,11)

  //iraq
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(iraqLat,iraqLon)
  ellipse(point.x,point.y,9)

  //siria
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(siriaLat,siriaLon)
  ellipse(point.x,point.y,7)

  //nigeria
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(nigeriaLat,nigeriaLon)
  ellipse(point.x,point.y,7)

  //mexico
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(mexicoLat,mexicoLon)
  ellipse(point.x,point.y,13)

  //corea
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(coreaLat,coreaLon)
  ellipse(point.x,point.y,17)

  //palestina
  strokeWeight(10)
  stroke(183,46,23,120)
  fill(183,46,23);
  var point = myMap.latLngToPixel(palestinaLat,palestinaLon)
  ellipse(point.x,point.y,20)

  //text
  noStroke()
  textFont('ROBOTO')
  textStyle('BOLD')
  fill(255)
  textSize(30)
  textAlign(CENTER)
  text('HOW FAR ARE YOU FROM\nTHE CURRENT CONFLICTS AROUND THE WORLD?',windowWidth/2,windowHeight/5)

  noStroke()
  textFont('ROBOTO')
  fill(209,206,206)
  textSize(20)
  textAlign(CENTER)
  text('There are at least 25 countries with confrontations in the world. Here are ten of them.',windowWidth/2,windowHeight/3.3)

  noStroke()
  textFont('ROBOTO')
  fill(209,206,206)
  textSize(15)
  textAlign(CENTER)
  text('(As bigger is the circle, longest is the duration of the conflict in that country.)',windowWidth/2,windowHeight/3)


}
