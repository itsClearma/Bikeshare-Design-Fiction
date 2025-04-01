let bike;
let movement;

function preload(){
  bike = loadImage("images/bikeIcon.png");
}

function setup() {
  createCanvas(windowWidth, windowWidth/12, WEBGL, document.getElementById("bike"));
  movement = -windowWidth/2;
}

function draw() {
  
  background("#CF21FF");
  image(bike, movement-(windowWidth/12), -windowWidth/27, (windowWidth/9.75), 0.6532905297*(windowWidth/9.55));
  strokeWeight(windowWidth/250);
  line(-windowWidth/2, windowWidth/30, movement, windowWidth/30);

  if (movement < windowWidth*0.45){
    movement = movement + 15;
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowWidth/12);
  movement = -windowWidth/2;
}