
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var box1,box2,box3;

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ball1=new Ball(100,200,40);
	ground = new Ground(600,380,1200,20);
	box1=new Box(850,320,7,99);
	box2=new Box(1100,320,7,95);
	box3=new Box(978,365,250,9);
	

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  ball1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}


