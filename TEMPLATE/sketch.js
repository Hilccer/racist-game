let player;
let playeridle;
let bgimage;
let playerwalk;
let playerattack;
let projectile;
let animationPlaying = false;

let boss;
let bossidle;

function preload(){
  playeridle = loadAnimation ("Assets/idle_knight/idle_0.png", "Assets/idle_knight/idle_1.png", "Assets/idle_knight/idle_2.png", "Assets/idle_knight/idle_3.png");
  bgimage = loadImage ("Assets/BACKGROUND/game_background_4.png")
  playerwalk = loadAnimation ("Assets/walk_knight/walk.knight_0.png", "Assets/walk_knight/walk.knight_1.png", "Assets/walk_knight/walk.knight_2.png", "Assets/walk_knight/walk.knight_3.png", "Assets/walk_knight/walk.knight_4.png","Assets/walk_knight/walk.knight_5.png", "Assets/walk_knight/walk.knight_6.png", "Assets/walk_knight/walk.knight_7.png" );
  playerattack = loadAnimation ("Assets/racist attack/attack_0.png", "Assets/racist attack/attack_1.png", "Assets/racist attack/attack_2.png", "Assets/racist attack/attack_3.png");
  projectile = loadAnimation ("TIRO/1.png", "TIRO/2.png", "TIRO/3.png", "TIRO/4.png", "TIRO/5.png")
  bossidle = loadAnimation ("NIGGA_BOSS/idle/NIGGA_Idle0.png", "NIGGA_BOSS/idle/NIGGA_Idle1.png", "NIGGA_BOSS/idle/NIGGA_Idle2.png", "NIGGA_BOSS/idle/NIGGA_Idle3.png", "NIGGA_BOSS/idle/NIGGA_Idle4.png", "NIGGA_BOSS/idle/NIGGA_Idle5.png");
}


function setup() {
  createCanvas(1200, 600);
  
  player = createSprite(130, 300);
  player.addAnimation ("racist_idle", playeridle);
  player.addAnimation ("racist_walk", playerwalk);
  player.addAnimation ("racist_attack", playerattack);
  console.log(player.x)

  boss = createSprite (720, 300);
  boss.addAnimation ("nigga_idle", bossidle);
  boss.mirrorX(-1);
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
//if (keyWentDown("space")){
  //tiro = createSprite(player.x, player.y, 10, 10);
  //tiro.addAnimation ("Aniquilador_De_Macacos", projectile)
  //tiro.animation.looping = false
  //tiro.scale = 0.3
  //tiro.shapeColor = "green"
  //tiro.velocityX = 10;
  //tiro.lifetime = 80;
  //player.changeAnimation("racist_attack");
//}
//if (keyWentUp("space")){
 // player.changeAnimation("racist_idle");
//}
if (keyWentDown("space") && !animationPlaying) {
  animationPlaying = true;
  player.changeAnimation("racist_attack");
  player.animation.rewind(); // Recomeça do início
  player.animation.looping = false;
  player.animation.play();

  tiro = createSprite(player.x, player.y, 10, 10);
  tiro.addAnimation ("Aniquilador_De_Macacos", projectile)
  tiro.animation.looping = false
  tiro.scale = 0.3
  tiro.shapeColor = "green"
  tiro.velocityX = 10;
  tiro.lifetime = 80;
}
// Verificar se a animação terminou
if (animationPlaying && player.animation.getFrame() === player.animation.getLastFrame()) {
  animationPlaying = false; 
  player.changeAnimation("racist_idle");
}
}
