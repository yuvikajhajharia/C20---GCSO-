var car, wall; 
var speed, weight;


function setup() {
  createCanvas(800,400);
speed = random(55,90);
weight = random(400,1500);

car = createSprite(50, 200, 50, 50);
wall = createSprite(2500, 200, 60, height/2);
wall.shapeColour = "80,80,80";


  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  carVelocityX = speed;

  if(isTouching(car, wall)){
   var d= (0.5*weight*speed*speed)/2250;
   if(d<100){
     car.shapeColour = "green";
   }
   else if(d>=100 && d<=180)
   car.shapeColour = "yellow";
   else if(d>180)
   car.shapeColour = "red";
  }
 

  drawSprites();
}