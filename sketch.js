var box

function setup() {
  createCanvas(400,400);

  box=createSprite(200,200,10,10)
}

function draw() 
{
  if(keyDown("UP_ARROW")){
    box.y=box.y-5
  }
  if(keyDown("DOWN_ARROW")){
    box.y=box.y+5
  }
  background(30);
drawSprites()
}




