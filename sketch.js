
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
   
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,900,10);
  console.log(ground.x);
  
}


function draw() {
background(255);
  
if(keyDown("space") && monkey.y >= 150) {
      monkey.velocityY = -15;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
  
   ground.velocityX=-4;
  ground.x=ground.width/2;
  
  if (World.frameCount%100===0) {
    
    bananas();
    
  }
  
  if (World.frameCount%200===0) {
    
    obstacles();
    
  }
  
   if(monkey.isTouching(FoodGroup)) {
     
     FoodGroup.destroyEach()
     
     score=score+1
  }
  
  if (monkey.isTouching(obstacleGroup)){
    
    reset();
    
  }
  
  drawSprites();
  
   stroke ("white");
  textSize(15);
  fill("white");
  text("Score : "+ score,100,50);
  
   
  stroke ("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+ survivalTime,100,50);
 
}


 function reset () {
   
   survivalTime=0;
   score=0;
   
 }

 function bananas () {
   
   banana = createSprite(250,Math.round(random(120,200)),15,15);
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-4;
   FoodGroup.add(banana);
 }

 function obstacles () {
   
   obstacle = createSprite(200,330,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.2;
   obstacle.velocityX=-4;
   obstacleGroup.add(obstacle);
 }




