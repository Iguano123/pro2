var barco, barco_running, edges;
var ground, groundImage, invisibleground;

function preload(){
  barco_running = loadAnimation("barco1.png","barco2.png","barco3.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
 
  barco = createSprite(50,160,20,50);
  barco.addAnimation("running", barco_running);
  invisibleground = createSprite(50,190,40,10);
  invisibleground.visible = false;
  ground = createSprite(300,180,600,20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width/2;
  ground.velocityX = -10;  

 barco.scale = 0.1;
 barco.x = 50;
}


function draw(){

  background("white");

  barco.velocityY = barco.velocityY + 1;
  if(ground.x<0){
ground.x=ground.width/2
}
 
  barco.collide(invisibleground);
  drawSprites();
}