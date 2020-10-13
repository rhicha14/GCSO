var car,wall;


var speed, weight; 
var wcar,rcar,ycar,gcar;

function preload(){
	rcar = loadImage("RedCar.png");
	wcar = loadImage("WhiteCar.png");
	ycar = loadImage("YellowCar.png");
	gcar = loadImage("GreenCar.png");


}
function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   
	car.addImage(wcar);
	car.velocityX = speed;



	//car.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height)
  	wall.shapeColor=color(255,120,40)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.addImage(rcar)
		car.scale = 0.2;
		
	}

	if(deformation<180 && deformation>100)
	{
		car.addImage(ycar);
		car.scale = 0.15;
		
	}

	if(deformation<100)
	{
		car.addImage(gcar);
		car.scale = 0.5;
		
	}
  }  
  
  drawSprites();
 
}