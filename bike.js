let bike;

function preload(){
  bike = loadImage("images/bikeIcon.png");
}

function setup() {
    createCanvas(1300, 100, WEBGL, document.getElementById("bike"));
}

function draw() {
  background("#CF21FF");
  push();
  scale(-0.2, 0.2);
  image(bike, constrain(frameCount*-100, -6450, 0), height/2, 623, 407);
  strokeWeight(20);
  line(0, 450, constrain(frameCount*-96.5, -6300, 0), 450);
  pop();
}