//Create variables here

var dog, happydog, normaldog;
var database
var foodS, foodStock;

function preload()
{
  //load images here
  happydog = loadImage("dogImg1.png");
  normaldog = loadImage("dogImg.png");
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();
  dog = createSprite(250,300);
  dog.addImage(normaldog);
  dog.scale = 0.2;
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

 

  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
    
  }
  textSize(20);
  fill("white");
  text("remaining : "+ foodS,170,200);
  
  drawSprites();
  //add styles here


}

function writeStock(x){
x = x-1;
database.ref('/').update({food:x})
}

function readStock(data) {
  foodS = data.val();
}