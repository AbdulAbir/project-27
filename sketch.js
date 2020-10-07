
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(500,500,50);
	bobObject2 = new bob(550,500,50);
	bobObject3 = new bob(600,500,50);
	bobObject4 = new bob(650,500,50);
	bobObject5 = new bob(700,500,50);
	roofObject = new roof(600,200,300,20)
	rope1 = new rope(bobObject1.body,roofObject.body,-50*2,0);
	rope2 = new rope(bobObject2.body,roofObject.body,-50*1,0);
	rope3 = new rope(bobObject3.body,roofObject.body,-50*0,0);
	rope4 = new rope(bobObject4.body,roofObject.body,-50*-1,0);
	rope5 = new rope(bobObject5.body,roofObject.body,-50*-2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

 
}

function keyPressed() 
{
 if (keyCode === UP_ARROW) 
  {
   Matter.Body.applyForce( bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
    
  }
}













