let wheel;

function preload(){
  wheel = loadImage("images/animateWheel.png");
}

function setup(){
  createCanvas(windowWidth, windowWidth/2, WEBGL, document.getElementById("wheel"));
}

function draw(){
  background("#010a6c");
  resizeCanvas(windowWidth, windowWidth/3);
  for(i=0; i<windowWidth*0.02; i++){
    strokeWeight(windowWidth*0.0625*0.5);
    stroke(1-i*10, 10-i*10, 108-i*10);
    ellipse(0, 0, 100+i*windowHeight*0.125, 100+i*windowHeight*0.125);
  }

  strokeWeight(windowWidth*0.0625*0.5);
  stroke(0);
  fill(0, 0);
  translate(0, 0);
  rotate(frameCount/50);
  ellipse(0, 0, windowWidth*0.8625/3, windowWidth*0.8625/3);
  image(wheel, -windowWidth/6, -windowWidth/6, windowWidth/3, windowWidth/3);
}