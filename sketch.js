var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1000,600);
  car=createSprite(100, 300, 50, 50);
  speed=random(55,90);
  car.velocityX = speed;
  //wall=createSprite(900,200,60,height/2);
 
  weight=random(400,1500);
 wall=createSprite(900,300,20,height/2);
}

function draw() {
  background(0);  
 

  if (wall.x-car.x <= (car.width+wall.width)/2)
  {
    car.velocityX=0;
    deformation=0.5 * weight * speed* speed/22509;

    if (deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
 
  drawSprites();
}