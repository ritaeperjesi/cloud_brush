let felho1;
let felho2;
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
}

function setup() {
  createCanvas(800, 800);
  background(0,155,255);
  
}

function draw() {
  c=random(0,255)
  tint(255,c);
  cloudW=random(50,500);
  cloudH = random(50,150);
  randomNumber=random(0,100);
  if (mouseIsPressed){
  image(felho1, mouseX+1, mouseY+1, cloudW, cloudH);
}
  }

//function mouseIsPressed(){
//  image(felho1, mouseX, mouseY, cloudW, cloudH);
//}