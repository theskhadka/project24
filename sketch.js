var ground, paper, rect1, rect2, rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options ={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	paperSprite=createSprite(100, 600, 10);
	paperSprite.shapeColor=color("white");
	paper = Bodies.circle(100, 600, 10, options);
	World.add(world, paper);

	rect1Sprite=createSprite(775, 625, 10, 50);
	rect1Sprite.shapeColor=color("white");
	rect2Sprite=createSprite(675, 625, 10, 50);
	rect2Sprite.shapeColor=color("white");
	rect3Sprite=createSprite(725, 650, 100, 10);
	rect3Sprite.shapeColor=color("white");

	rect1 = Bodies.rectangle(500, 600, 20, 100, {isStatic:true} );
	rect2 = Bodies.rectangle(300, 600, 20, 100, {isStatic: true} );
	rect3 = Bodies.rectangle(400, 650, 100, 20, {isStatic: true} );
	World.add(world, rect1);
	World.add(world, rect2);
	World.add(world, rect3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85});
	}
}


