/*
            (ɔ◔‿◔)ɔ ♥ Aula 34 - CAPSTONE
*/

// namespacing = abreviar
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//declarar variáveis com var ou let
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
// função que carrega imagens, animações, sons, json
function preload(){
  backgroundImg = loadImage("background.png");
  fruit=loadImage("melon.png");
  cesto=loadImage("basket.png")
}

function setup() {
  //cria a tela
  createCanvas(900,400);
  //cria a física no jogo
  engine = Engine.create();
  //cria o mundo
  world = engine.world;
  Engine.run(engine);
  //1-criando o chão
  ground = new Ground();
  
 /*Desafio 1 do aluno: criar uma bola*/
      ball = Bodies.circle(50,200,20);
      World.add(world,ball);


/*Desafio 2do aluno: criando a corda elástica*/
  slingShot = new Slingshot(this.ball, {x: 100,y: 100});

}
function draw() {
  //fundo
  background(backgroundImg); 
 //atualiza o código
  Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  cesto.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(cesto,450,270)

  slingShot.display();
}

//3-função arrastar
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();

}
