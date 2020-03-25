let felho1;
let felho2;
let felho3;
let felho1blue;
let felho2blue;
let cloudW;
let cloudH;
let randomNumber;
let alphaValue;
let c;
let cloudArray;
let index;
let myDrawing;

let smallBrushH;
let smallBrushW;
let middleBrushH;
let middleBrushW;
let bigBrushH;
let bigBrushW;



// uploadcare eleje
var widget = uploadcare.Widget('[role=uploadcare-uploader]');
widget.onUploadComplete(function (fileInfo) {
  console.log('File name: ', fileInfo.name);
  console.log('CDN URL: ', fileInfo.cdnUrl);
  // and so on...
});
//uploadcare vége

function preload(){
felho1=loadImage('cloud_1.png');
felho2=loadImage('cloud_2.png');
felho3=loadImage('cloud_3.png');
felho1blue=loadImage('cloud_1_blue.png');
felho2blue=loadImage('cloud_2_blue.png');
}

function setup() {
  myDrawing =createCanvas(windowWidth-40,windowHeight-40);
  background(0,155,255);
  stroke(255);
  strokeWeight(3);
  fill(0,155,255);
  rect (0,0,windowWidth-40,windowHeight-40);
  cloudW = random(30,75);
  cloudH = random(30,75);
  imageMode(CENTER);
  cloudArray=[felho1, felho2, felho3, felho4];
}

function keyPressed() {
  if (key === 's') {
    saveCanvas(myDrawing, 'mySky', 'jpg');
  } 
  }

function draw() {
  c=random(0,255)
  tint(255,c);
  randomNumber=random(0,100);

smallBrushH=random(20,50);
smallBrushW=random(20,50);
middleBrushH=random(50,100);
middleBrushW=random(50,100);
bigBrushH=random(100,150);
bigBrushW=random(100,150);
index=int(random(1,2));

if (mouseIsPressed){
  if (key === 'd'){
  cloudW=middleBrushW;
  cloudH=middleBrushH; 
  image(cloudArray[1], mouseX+1, mouseY+1, cloudW, cloudH);
}
  }

if (mouseIsPressed){
  if (key === '1'){
 cloudW=smallBrushW;
 cloudH=smallBrushH;
 image(felho1, mouseX+1, mouseY+1, cloudW, cloudH);
 }
  }

if (mouseIsPressed){
  if (key === '2'){
 cloudW=middleBrushW;
 cloudH=middleBrushH;
 image(felho1, mouseX+1, mouseY+1, cloudW, cloudH);
 }
  }

if (mouseIsPressed){
  if (key === '3'){
  cloudW=bigBrushW;
  cloudH=bigBrushH;
  image(felho1, mouseX+1, mouseY+1, cloudW, cloudH);
  }
   }

 if (mouseIsPressed){
  if (key === 'e'){
   image(felho1blue, mouseX+1, mouseY+1, cloudW, cloudH);
  }


//function mouseIsPressed(){
//  image(felho1, mouseX, mouseY, cloudW, cloudH);
}


}