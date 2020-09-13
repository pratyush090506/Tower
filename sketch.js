
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var Box1,Box2,Box3,Box4,Box5;
var Box6,Box7,Box8;
var Box9;
var Box10,Box11,Box12,Box13,Box14;
var Box15,Box16,Box17;
var Box18;

var score;

var bg = "bg.jpg";

var bg_IMG;

var Polygon;

var launcher;

function preload()
{
	getTime();
	Title = loadImage("title.png");

}

function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	score=0;

	ground1 = new ground(750,640,1500,20);
	ground2 = new ground(700,450,400,20);
	ground3 = new ground(1258,320,310,20);

	box1 = new Box(580,430,50,60);
	box2 = new Box(620,430,50,60);
	box3 = new Box(660,430,50,60);
	box4 = new Box(700,430,50,60);
	box5 = new Box(740,430,50,60);
	box6 = new Box(780,430,50,60);
	box7 = new Box(830,430,50,60);

	Box1 = new BoxP(620,370,50,60);
	Box2 = new BoxP(660,370,50,60);
	Box3 = new BoxP(700,370,50,60);
	Box4 = new BoxP(740,370,50,60);
	Box5 = new BoxP(780,370,50,60);
	
	
	Box6 = new Boxg(660,310,50,60)
	Box7 = new Boxg(700,310,50,60)
	Box8 = new Boxg(740,310,50,60)


	
	Box10 = new Box(1180,300,50,60);
	Box11 = new Box(1220,300,50,60);
	Box12 = new Box(1260,300,50,60);
	Box13 = new Box(1300,300,50,60);
	Box14 = new Box(1340,300,50,60);

	Box15 = new Boxg(1240,240,50,60);
	Box16 = new Boxg(1235,240,50,60)
	Box17 = new Boxg(1300,240,50,60)

	Box18 = new BoxP(1260,180,50,60);

	Polygon = new Poly(150,400,50,50);

	launcher=new Launcher(Polygon.body,{x:150,y:400})

	Engine.run(engine);
  
}


function draw() {
	if(bg_IMG)
    background(bg_IMG);
  Engine.update(engine);
  strokeWeight(2)

 


	imageMode(CENTER);
	image(Title,500,50,720,89);
  

	strokeWeight(2)

ground1.display();
ground2.display();
ground3.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

Box1.display();
Box2.display();
Box3.display();
Box4.display();
Box5.display();

Box6.display();
Box7.display();
Box8.display();



Box10.display();
Box11.display();
Box12.display();
Box13.display();
Box14.display();

Box15.display();
Box16.display();
Box17.display();

Box18.display();



box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();

Box1.score();
Box2.score();
Box3.score();
Box4.score();
Box5.score();

Box6.score();
Box7.score();
Box8.score();



Box10.score();
Box11.score();
Box12.score();
Box13.score();
Box14.score();

Box15.score();
Box16.score();
Box17.score();

Box18.score();
Polygon.display();

launcher.display();

noStroke();
textSize(35);
fill(0, 169, 255);
textFont("georgia");
text("SCORE :" + score,width-300,50);


  drawSprites();
  
}

function mouseDragged(){
    Matter.Body.setPosition(Polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();


}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(Polygon.body,{x:150,y:400})
		launcher.attach(Polygon.body);
		
	}

}
async function getTime(){

    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    console.log(responseJson);
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if (hour >= 06 && hour <= 17){

        bg = "bg.jpg";


    }

    else{

        bg="bg2..jpg";

    }
    bg_IMG=loadImage(bg)
    console.log(bg_IMG)
}