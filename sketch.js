var ball;
var database1;
var ballPosition;
var position;
function setup(){
    createCanvas(500,500);
    database1=firebase.database()
    console.log(database1)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPosition=database1.ref('ball/position');
    ballPosition.on("value",rposition,showerr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database1.ref('ball/position').set({'x':position.x+x,'y':position.y+y})

}

function rposition(data)
{
    position=data.val()
    ball.x=position.x;
    ball.y=position.y;
}

function showerr()
{
    console.log("error in data base")
}
