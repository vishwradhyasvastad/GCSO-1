var car,wall;

var speed,weight;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    
    if(deformation>180)
    {
        car.shapeColor=rgb(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
        car.shapeColor=rgb(230,230,0);
    }

    if(deformation<100)
    {
        car.shapeColor=rgb(0,255,0);
    }
  }
  drawSprites();
}