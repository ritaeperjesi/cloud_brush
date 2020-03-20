let felho1;
let felho2;
let felho1blue;
let felho2blue;
let cloudW;
let cloudH;
let randomNumber;
let alphaValue;
let c;
let cloud;
cloud=[felho1,felho2];


function preload(){
felho1=loadImage('cloud_1.png');
felho2=loadImage('cloud_2.png');
felho1blue=loadImage('cloud_1_blue.png');
felho2blue=loadImage('cloud_2_blue.png');
}

function setup() {
  createCanvas(1300, 500);
  background(0,155,255);
  stroke(255);
  strokeWeight(3);
  fill(0,155,255);
  rect (0,0,1300,500);
  
}

function draw() {
  c=random(0,255)
  tint(255,c);
  cloudW=random(30,75);
  cloudH = random(30,75);
  randomNumber=random(0,100);
  if (mouseIsPressed){
  image(felho1, mouseX+1, mouseY+1, cloudW, cloudH);
}
    if (keyIsPressed) { 
image(felho1blue, mouseX+1, mouseY+1, cloudW, cloudH);
  }

//function mouseIsPressed(){
//  image(felho1, mouseX, mouseY, cloudW, cloudH);
}