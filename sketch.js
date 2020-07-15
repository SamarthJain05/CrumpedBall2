var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(800,590,1600,20)
 paperBall=new Paper(200,300)
 dustbin=new Dustbin(1200,570,200,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 ground.display();
 paperBall.display();
 dustbin.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:300,y:-1000});
	}
}



