
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var dustbin1;
var dustbin2;
var dustbin3;
var ground;
var wall1;
var wall2;
var wall3;
var launcher;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ball = new Ball(150, 0, 50);
  dustbin1 = new DustBin(690, 525, 100, 100);
  //dustbin2 = new DustBin(383, 505, 15, 100);
  //dustbin3 = new DustBin(316, 565, 150, 15);
  Engine.run(engine);

  ground = new Ground(400, 600, 800, 50);

  wall1 = new Wall(690, 570, 95, 5);
  wall2 = new Wall(650, 525, 10, 95);
  wall3 = new Wall(730, 525, 10, 95);
  launcher = new Launcher(ball.body, { x: 150, y: 300 });

}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  ground.display();
  dustbin1.display();
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  //dustbin2.display();
  //dustbin3.display();
  launcher.display();
  

  drawSprites();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {
  Launcher.release();

}


