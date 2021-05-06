var hypnoticball;
var database;
var position;

function setup(){
 createCanvas(500,500);
 database=firebase.database(); 

 hypnoticball=createSprite(300,400,20,20);
 hypnoticball.shapeColor="red";

 var hypnoticballposition=database.ref("ball/position");
 hypnoticballposition.on("value",readPosition,showError)
}

function draw(){
   background("white")
   if(keyDown(LEFT_ARROW))
   {
       writePosition(-1,0)
   }
   else if(keyDown(RIGHT_ARROW))
   {
       writePosition(1,0)
   }
  else if(keyDown(UP_ARROW))
   {
       writePosition(0,-1)
   }
  else if(keyDown(DOWN_ARROW))
   {
       writePosition(0,1)
   }
    drawSprites();
}
function readPosition(data){
    position=data.val()
    hypnoticball.x=position.x;
    hypnoticball.y=position.y;
}

function writePosition(x,y)
{
    database.ref("ball/position").set({
        "x":position.x+x,
        "y":position.y+y
    })
}

function showError()
{
    console.log("error in reading from the database")
}

