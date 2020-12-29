var wall;
var thickness;
var bullet;
var speed;
var weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52 );
  thickness = random(22,83);

  car = createSprite(50,200,50,50);
  car.shapeColor = "red"
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = colour(80,80,80);

  car.velocityX = speed;

}

function draw() {
  background(0,0,0);  
 
  if(hasCollied(bullet,wall)){

      bullet.velocityX = 0;
      var damege = 0.5 * speed * speed/(thickness* thickness * thickness);

      if(damege > 10)
      {
        wall.shapeColor = colour(255,0,0);
      }

      if(damege < 10)
      {
        wall.shapeColor = colour(0,255,0);
      }
  }
  


  
  drawSprites();
}

function hasCollied(lbullet,lwall){

  bullet.rightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }
  return false;
}