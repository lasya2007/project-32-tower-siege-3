
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var polyimg;
var hexagon;
var launcher;
var score=0;
var hour;

function preload(){
    polyimg=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground=new Ground(width/2,height-20,width,20);

    stand=new Ground(710,440,150,20);

    block1=new Box(670,410);
    block2=new Box(700,410);
    block3=new Box(730,410);
    block4=new Box(760,410);
    block5=new Box(790,410);
    block6=new Box(685,370);
    block7=new Box(715,370);
    block8=new Box(745,370);
    block9=new Box(775,370);
    block10=new Box(700,330);
    block11=new Box(730,330);
    block12=new Box(760,330);
    block13=new Box(715,290);
    block14=new Box(745,290);
    block15=new Box(730,250);

    hexagon=Bodies.polygon(250,300,6,20);
    World.add(world,hexagon);
   
    launcher=new Launch(hexagon,{x:250,y:300});

    
}

function draw(){
    
    time();
    if(hour>=06&&hour<=18){
        background("yellow");
    }
    else{
        background("black");
    }
    Engine.update(engine);

    push();
    textSize(18);
    stroke("blue");
    text("SCORE: "+score,750,40);
    pop();

    ground.display();

    stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    
    fill("gold");
    imageMode(CENTER);
    image(polyimg,hexagon.position.x,hexagon.position.y,40,40);

    launcher.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(this.hexagon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(this.hexagon,{x:200,y:300});
      launcher.attach(this.hexagon);
    }
  }

async function time(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime=responseJSON.datetime;
    hour=dateTime.slice(11,13);
    
    return hour;
}