
var monkey , monkey_running
var ground 
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var gameState = 0;
var gameState = 1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  monkey = createSprite(100,170,10,10);
  monkey.addAnimation("image1", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(300,195,1200,10)
  

  
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  ground.visible = true
  
  if(keyDown("space")){
    
    monkey.velocityY = -8
    
  }
  
  
  
  monkey.velocityY = monkey.velocityY +0.5
  ground.velocityX = -5
  
  if(ground.x<0){
    
    ground.x = 300
    
  }
  
  
  obstacle1();
  drawSprites();
  food();
  restart1();
}

function food(){
  
  if (frameCount % 100 === 0) {
    
    var banana = createSprite(595,110,10,10);
    banana.addImage("image2",bananaImage)
    banana.scale = 0.1
    
     banana.y = Math.round(random(10,60))
    banana.velocityX = -3;
    
    banana.lifetime = 300

  
  }
  
  // FoodGroup.add(food);
  
  
}

function obstacle1(){
  
 if (frameCount % 140 === 0) {
    
    var rock = createSprite(595,175,10,10);
    rock.addImage("image2",obstacleImage)
    rock.scale = 0.1
    
     
    rock.velocityX = -3;
    
    rock.lifetime = 300 
 }
  
  
  
}

function restart1(){
  
  
  
  
}