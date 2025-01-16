let player;
let playeridle;
let bgimage;
let playerwalk;


function preload(){
  playeridle = loadAnimation ("Assets/idle_knight/idle_0.png", "Assets/idle_knight/idle_1.png", "Assets/idle_knight/idle_2.png", "Assets/idle_knight/idle_3.png");
  bgimage = loadImage ("Assets/BACKGROUND/game_background_4.png")
  playerwalk = loadAnimation ("Assets/walk_knight/walk.knight_0.png", "Assets/walk_knight/walk.knight_1.png", "Assets/walk_knight/walk.knight_2.png", "Assets/walk_knight/walk.knight_3.png", "Assets/walk_knight/walk.knight_4.png","Assets/walk_knight/walk.knight_5.png", "Assets/walk_knight/walk.knight_6.png", "Assets/walk_knight/walk.knight_7.png" );
  playerattack = loadAnimation ("Assets/racist attack/attack_0.png", "Assets/racist attack/attack_1.png", "Assets/racist attack/attack_2.png", "Assets/racist attack/attack_3.png");
}


function setup() {
  createCanvas(1200, 600);
  
  player = createSprite(130, 300);
  player.addAnimation ("racist_idle", playeridle);
  player.addAnimation ("racist_walk", playerwalk);
  player.addAnimation ("racist_attack", playerattack);
  console.log(player.x)
  }

  // background(150) = usado pra so fazer o background com cor
function draw() {
  image(bgimage, 0, 0, width, height)
  console.log(player.y)
  drawSprites();
  if(keyDown("a")){
    player.x -= 5
player.changeAnimation("racist_walk");
player.mirrorX(-1)
  }
  if (keyWentUp ("a")){
   player.changeAnimation("racist_idle");
  }

  if(keyDown("d")){
    player.x += 5
    player.changeAnimation("racist_walk");
     player.mirrorX(+1)
 }
  if (keyWentUp ("d")){
    player.changeAnimation("racist_idle");
  }

 if(keyDown("w")&& player.y >= 205){
  player.y -= 5

}
if(keyDown("s")&& player.y <= 460){
  player.y += 5

}
if (keyWentDown("space")){
  tiro = createSprite(player.x, player.y, 10, 10);
  tiro.shapeColor = "red"
  tiro.velocityX = 10;
  tiro.lifetime = 80;
  player.changeAnimation("racist_attack");
}
if (keyWentUp("space")){
  player.changeAnimation("racist_idle");
}
}
