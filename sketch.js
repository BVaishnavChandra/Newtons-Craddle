
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bobobject1 ,Bobobject2 ,Bobobject3 ,Bobobject4 ,Bobobject5;
var toproof;
var rope1 , rope2 , rope3 , rope4 , rope5;



function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

toproof = new Ground(380,60,325,15);

Bobobject1 = new Bob(480,300,30);
Bobobject2 = new Bob(Bobobject1.x+60,300,30);
Bobobject3 = new Bob(Bobobject2.x+60,300,30);
Bobobject4 = new Bob(Bobobject1.x-60,300,30);
Bobobject5 = new Bob(Bobobject4.x-60,300,30);


//Bobrope1 = new Rope(Bobobject1.body , toproof.body , 20 , 40);

rope1=new Rope(Bobobject1.body,toproof.body,6,0);
rope2=new Rope(Bobobject2.body,toproof.body,60,0);
rope3=new Rope(Bobobject3.body,toproof.body,120,0);
rope4=new Rope(Bobobject4.body,toproof.body,-60,0);
rope5=new Rope(Bobobject5.body,toproof.body,-120,0);



Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  toproof.display();
  Bobobject1.display();
  Bobobject2.display();
  Bobobject3.display();
  Bobobject4.display();
  Bobobject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}


function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(Bobobject5.body,Bobobject3.body.position,{x:-115,y:-115});
  }
}


