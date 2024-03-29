var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);


  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColour=color( 80,80,80);
}

function draw() {
  background(0);  

  bullet.collide(wall);

 if(hasCollided(bullet,wall))
 {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    
    if(damage>3.68)
    {
        wall.shapeColor=color(0,225,0);
    }

    if(damage<12.43)
    {
        wall.shapeColor=color(225,0,0);
    }
 }

  drawSprites();
}

function hasCollided(lBullet,lWall)
{
    bulletRightEdge=lBullet.x +lBullet.width;
    wallLeftEdge=lWall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
          return true
    }
    return false;
}
