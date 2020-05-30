let x = 2500;
let y = 500;
let x2 = 3500;
let y3 = 600;
let x4 = 2500;
let y4 = 700;

let img;

let arrowspeed = 10;

let norma = 4;

let y1 = 500;

let valor1;
let valor2;
let valor3;
let valor4;
let valor5;
let valor6;

let xspeed = 20 ;
let xspeed2 = 20 ;
let xspeed4 = 20 ;

let upwall = 200;
let downwall = 1000;


let rightwall = 400;

let scorenumb = 0;
let scorenumbnumb = 1;

let nv = 0;

let sla = 0;

function setup() {
createCanvas (1920,1080);
img = loadImage('data/Fundo.jpg');
bola = loadImage('data/aula.png');
m = loadImage('data/rocket.png');
start = loadImage ('data/fundex.jpg');
rui = loadImage('data/rui.jpg')
y2 = constrain (y1,100, 900);
  frameRate (100);
  rectMode(CENTER);
  noCursor();
  
}

function keyTyped(){
 if(keyCode === ENTER){
  norma = 1;
 }else if(keyCode === SHIFT){
  norma = 2;
 }else{
 norma = 0;
 }

}


function draw() {
 if(norma === 4){
   background(rui);
   fill(59,188,9);
   noStroke();
   //image(bola,750,105,210,210);
   textAlign(CENTER);
   textSize(150);
   fill(95,200,270);
   stroke(0);
   strokeWeight(10);
   textStyle(ITALIC);
   text("SAVE THE PLANET", 960 , height / 3);
   textSize(50);
   fill(95,170,247);
   //text("THE PLANET",width / 2+ 25, height / 3 );
   textSize(100);+
   textStyle(NORMAL);
   fill(300,260,0);
   text('Press         to play!', 1000, height / 1.65);
   textSize(95);
   fill(255,200,0);
   text('enter', 964, height / 1.65)
   //fill(95,200,250);
   stroke(160,200,280)
   line(270,400,1675,400)
   line(270,215,1675,215)
   line(270,400,270,215)
   line(1675,400,1675,215)
 }  
 
 
 if(norma === 1){
   background (img);
stroke (0);
strokeWeight(3);
fill (255);
image(bola,rightwall,y2,135,100);


textAlign(CENTER);
fill(255);
textSize(80);
text ("Score: " + scorenumb,340,100 );

  if(x===400 || x2===400){
  scorenumb = scorenumb + scorenumbnumb;
  }
 
 
 let randomi= ['0','50','100','150','200','250','300','350','400','450','500','550','600','650','700','750','800','850','900','950','1000'];
 let randomY = random(randomi);
 
 if(keyIsDown(UP_ARROW)){
  y2 = y2 - arrowspeed;
 }
   
 if(keyIsDown(DOWN_ARROW)){
  y2 = y2 + arrowspeed;
 }
 
 if(y2>1180) {
  y2 = -50;
  }
  if(y2<-50) {
  y2 = 1130;
  }
  
 if(nv === 0){
stroke(0);
strokeWeight(3);
fill(255,0,0);
image(m,x,y,100,100);


 x = x - xspeed ;
 
 if (x<-200){
 x = 2500;
 y = randomY ;
 }
 
 }
  
  
  if(frameCount === 1200){
  nv = 1;
  }else if(frameCount === 3600){
  nv = 2;
  }
  if(nv === 0){
   textSize(80);
   text("Level: " + nv, 1600,100);
  }
  if(nv === 1){
   textSize(100);
   fill(0,255,0);
   text("Level: " + nv, 1600,100);
   stroke(0);
   strokeWeight(3);
   fill(48, 0,0);
   image(m,x2,y3,100,100);
   image(m ,x,y,100,100);
  
   xspeed = 30;
   xspeed2 = 30;
   
   x = x - xspeed;
   x2 = x2 - xspeed2;

  if (x<-200){
  x = 2500;
  y = randomY ;
  }
  
  if (x2<-200){
  x2 = 2500;
  y3 = randomY ;
  }
  

}

 if(nv === 2){
   textSize(100);
   fill(255,0,0);
   text("Level: " + nv, 1600,100);
   stroke(0);
   strokeWeight(3);
   fill(255,0,0);
   image(m,x4,y4,100,100);
   image(m,x,y,100,100);
   image(m,x2,y3,100,100);
   xspeed1 = 40;
   xspeed2 = 40;
   xspeed4 = 40;
   
   x = x - xspeed;
   x2 = x2 - xspeed2;
   x4 = x4 - xspeed4;

   if (x<-200){
   x = 3000;
   y = randomY;
   }
   if (x2<-200){
   x2 = 3000;
   y3 = randomY;
   }
   if (x4<-200){
   x4 = 3000;
   y4 = randomY;
   }
 
 }
 
 if(x  === 450 ) {valor1 = true; }else if(x - 1  === 450 ) {valor1 = true; }else if(x - 2  === 450 ) {valor1 = true; }else if(x - 3  === 450 ) {valor1 = true; }else if(x - 4  === 450 ) {valor1 = true; }else if(x - 5  === 450 ) {valor1 = true; }else if(x - 6  === 450 ) {valor1 = true; }else if(x - 7  === 450 ) {valor1 = true; }else if(x - 8  === 450 ) {valor1 = true; }else if(x - 9  === 450 ) {valor1 = true; }else if(x - 10  === 450 ) {valor1 = true; }else if(x - 11  === 450 ) {valor1 = true; }else if(x - 12  === 450 ) {valor1 = true; }else if(x - 13  === 450 ) {valor1 = true; }else if(x - 14  === 450 ) {valor1 = true; }else if(x - 15  === 450 ) {valor1 = true; }else if(x - 16  === 450 ) {valor1 = true; }else if(x - 17  === 450 ) {valor1 = true; }else if(x - 18  === 450 ) {valor1 = true; }else if(x - 19  === 450 ) {valor1 = true; }else if(x - 20  === 450 ) {valor1 = true; }else if(x - 21  === 450 ) {valor1 = true; }else if(x - 22  === 450 ) {valor1 = true; }else if(x - 23  === 450 ) {valor1 = true; }else if(x - 24  === 450 ) {valor1 = true; }else if(x - 25  === 450 ) {valor1 = true; }else if(x - 26  === 450 ) {valor1 = true; }else if(x - 27  === 450 ) {valor1 = true; }else if(x - 28  === 450 ) {valor1 = true; }else if(x - 29  === 450 ) {valor1 = true; }else if(x - 30  === 450 ) {valor1 = true; }else if(x - 31  === 450 ) {valor1 = true; }else if(x - 32  === 450 ) {valor1 = true; }else if(x - 33  === 450 ) {valor1 = true; }else if(x - 34  === 450 ) {valor1 = true; }else if(x - 35  === 450 ) {valor1 = true; }else if(x - 36  === 450 ) {valor1 = true; }else if(x - 37  === 450 ) {valor1 = true; }else if(x - 38  === 450 ) {valor1 = true; }else if(x - 39  === 450 ) {valor1 = true; }else if(x - 40  === 450 ) {valor1 = true; }else if(x - 41  === 450 ) {valor1 = true; }else if(x - 42  === 450 ) {valor1 = true; }else if(x - 43  === 450 ) {valor1 = true; }else if(x - 44  === 450 ) {valor1 = true; }else if(x - 45  === 450 ) {valor1 = true; }else if(x - 46  === 450 ) {valor1 = true; }else if(x - 47  === 450 ) {valor1 = true; }else if(x - 48  === 450 ) {valor1 = true; }else if(x - 49  === 450 ) {valor1 = true; }else if(x - 50  === 450 ) {valor1 = true; }else if(x + 1  === 450 ) {valor1 = true; }if(x + 2  === 450 ) {valor1 = true; }else if(x + 3  === 450 ) {valor1 = true; }else if(x + 4  === 450 ) {valor1 = true; }else if(x + 5  === 450 ) {valor1 = true; }else if(x + 6  === 450 ) {valor1 = true; }else if(x + 7  === 450 ) {valor1 = true; }else if(x + 8  === 450 ) {valor1 = true; }else if(x + 9  === 450 ) {valor1 = true; }else if(x + 10  === 450 ) {valor1 = true; }else if(x + 11  === 450 ) {valor1 = true; }else if(x + 12 === 450 ) {valor1 = true; }else if(x + 13  === 450 ) {valor1 = true; }else if(x + 14  === 450 ) {valor1 = true; }else if(x + 15  === 450 ) {valor1 = true; }else if(x + 16  === 450 ) {valor1 = true; }else if(x + 17  === 450 ) {valor1 = true; }else if(x + 18  === 450 ) {valor1 = true; }else if(x + 19  === 450 ) {valor1 = true; }else if(x + 20  === 450 ) {valor1 = true; }else if(x + 21  === 450 ) {valor1 = true; }else if(x + 22  === 450 ) {valor1 = true; }else if(x + 23  === 450 ) {valor1 = true; }else if(x + 24  === 450 ) {valor1 = true; }else if(x + 25  === 450 ) {valor1 = true; }else if(x + 26  === 450 ) {valor1 = true; }else if(x + 27  === 450 ) {valor1 = true; }else if(x + 28  === 450 ) {valor1 = true; }else if(x + 29  === 450 ) {valor1 = true; }else if(x + 30  === 450 ) {valor1 = true; }else if(x + 31  === 450 ) {valor1 = true; }else if(x + 32  === 450 ) {valor1 = true; }else if(x + 33  === 450 ) {valor1 = true; }else if(x + 34  === 450 ) {valor1 = true; }else if(x + 35  === 450 ) {valor1 = true; }else if(x + 36  === 450 ) {valor1 = true; }else if(x + 37 === 450 ) {valor1 = true; }else if(x + 38  === 450 ) {valor1 = true; }else if(x + 39  === 450 ) {valor1 = true; }else if(x + 40  === 450 ) {valor1 = true; }else if(x + 41  === 450 ) {valor1 = true; }else if(x + 42  === 450 ) {valor1 = true; }else if(x + 43  === 450 ) {valor1 = true; }else if(x + 44  === 450 ) {valor1 = true; }else if(x + 45  === 450 ) {valor1 = true; }else if(x + 46  === 450 ) {valor1 = true; }else if(x + 47  === 450 ) {valor1 = true; }else if(x + 48  === 450 ) {valor1 = true; }else if(x + 49  === 450 ) {valor1 = true; }else if(x + 50  === 450 ) {valor1 = true; }
  else {
  valor1 = false; 
  }
  if (y == y2 ) {valor2 = true; } else if(y == y2-1){valor2 = true;} else if(y == y2-2){valor2 = true;} else if(y == y2-3){valor2 = true;} else if(y == y2-4){valor2 = true;} else if(y == y2-5){valor2 = true;} else if(y == y2-6){valor2 = true;} else if(y == y2-7){valor2 = true;} else if(y == y2-8){valor2 = true;} else if(y == y2-9){valor2 = true;} else if(y == y2-10){valor2 = true;} else if(y == y2-11){valor2 = true;} else if(y == y2-12){valor2 = true;} else if(y == y2-13){valor2 = true;} else if(y == y2-14){valor2 = true;} else if(y == y2-15){valor2 = true;} else if(y == y2-16){valor2 = true;} else if(y == y2-17){valor2 = true;} else if(y == y2-18){valor2 = true} else if(y == y2-19){valor2 = true;} else if(y == y2-20){valor2 = true;} else if(y == y2-21){valor2 = true;} else if(y == y2-22){valor2 = true;} else if(y == y2-23){valor2 = true;} else if(y == y2-24){valor2 = true;} else if(y == y2-25){valor2 = true;} else if(y == y2-26){valor2 = true;} else if(y == y2-27){valor2 = true;} else if(y == y2-28){valor2 = true;} else if(y == y2-29){valor2 = true;} else if(y == y2-30){valor2 = true;} else if(y == y2-31){valor2 = true;} else if(y == y2-32){valor2 = true;} else if(y == y2-33){valor2 = true;} else if(y == y2-34){valor2 = true;} else if(y == y2-35){valor2 = true;} else if(y == y2-36){valor2 = true;} else if(y == y2-37){valor2 = true;} else if(y == y2-38){valor2 = true;} else if(y == y2-39){valor2 = true;} else if(y == y2-40){valor2 = true;} else if(y == y2-41){valor2 = true;} else if(y == y2-42){valor2 = true;} else if(y == y2-43){valor2 = true;} else if(y == y2-44){valor2 = true;} else if(y == y2-45){valor2 = true;} else if(y == y2-46){valor2 = true;} else if(y == y2-47){valor2 = true;} else if(y == y2-48){valor2 = true;} else if(y == y2-49){valor2 = true;} else if(y == y2-50){valor2 = true;} else if(y == y2+1){valor2 = true;} else if(y == y2+2){valor2 = true;} else if(y == y2+3){valor2 = true;} else if(y == y2+4){valor2 = true;} else if(y == y2+5){valor2 = true;} else if(y == y2+6){valor2 = true;} else if(y == y2+7){valor2 = true;} else if(y == y2+8){valor2 = true;} else if(y == y2+9){valor2 = true;} else if(y == y2+10){valor2 = true;} else if(y == y2+11){valor2 = true;} else if(y == y2+12){valor2 = true;} else if(y == y2+13){valor2 = true;} else if(y == y2+14){valor2 = true;} else if(y == y2+15){valor2 = true;} else if(y == y2+16){valor2 = true;} else if(y == y2+17){valor2 = true;} else if(y == y2+18){valor2 = true} else if(y == y2+19){valor2 = true;} else if(y == y2+20){valor2 = true;} else if(y == y2+21){valor2 = true;} else if(y == y2+22){valor2 = true;} else if(y == y2+23){valor2 = true;} else if(y == y2+24){valor2 = true;} else if(y == y2+25){valor2 = true;} else if(y == y2+26){valor2 = true;} else if(y == y2+27){valor2 = true;} else if(y == y2+28){valor2 = true;} else if(y == y2+29){valor2 = true;} else if(y == y2+30){valor2 = true;} else if(y == y2+31){valor2 = true;} else if(y == y2+32){valor2 = true;} else if(y == y2+33){valor2 = true;} else if(y == y2+34){valor2 = true;} else if(y == y2+35){valor2 = true;} else if(y == y2+36){valor2 = true;} else if(y == y2+37){valor2 = true;} else if(y == y2+38){valor2 = true;} else if(y == y2+39){valor2 = true;} else if(y == y2+40){valor2 = true;} else if(y == y2+41){valor2 = true;} else if(y == y2+42){valor2 = true;} else if(y == y2+43){valor2 = true;} else if(y == y2+44){valor2 = true;} else if(y == y2+45){valor2 = true;} else if(y == y2+46){valor2 = true;} else if(y == y2+47){valor2 = true;} else if(y == y2+48){valor2 = true;} else if(y == y2+49){valor2 = true;} else if(y == y2+50){valor2 = true;}
  
  else {
  valor2 = false;
  }
  
  if(x2  === 450 ) {valor3 = true; }else if(x2 - 1  === 450 ) {valor3 = true; }else if(x2 - 2  === 450 ) {valor3 = true; }else if(x2 - 3  === 450 ) {valor3 = true; }else if(x2 - 4  === 450 ) {valor3 = true; }else if(x2 - 5  === 450 ) {valor3 = true; }else if(x2 - 6  === 450 ) {valor3 = true; }else if(x2 - 7  === 450 ) {valor3 = true; }else if(x2 - 8  === 450 ) {valor3 = true; }else if(x2 - 9  === 450 ) {valor3 = true; }else if(x2 - 10  === 450 ) {valor3 = true; }else if(x2 - 11  === 450 ) {valor3 = true; }else if(x2 - 12  === 450 ) {valor3 = true; }else if(x2 - 13  === 450 ) {valor3 = true; }else if(x2 - 14  === 450 ) {valor3 = true; }else if(x2 - 15  === 450 ) {valor3 = true; }else if(x2 - 16  === 450 ) {valor3 = true; }else if(x2 - 17  === 450 ) {valor3 = true; }else if(x2 - 18  === 450 ) {valor3 = true; }else if(x2 - 19  === 450 ) {valor3 = true; }else if(x2 - 20  === 450 ) {valor3 = true; }else if(x2 - 21  === 450 ) {valor3 = true; }else if(x2 - 22  === 450 ) {valor3 = true; }else if(x2 - 23  === 450 ) {valor3 = true; }else if(x2 - 24  === 450 ) {valor3 = true; }else if(x2 - 25  === 450 ) {valor3 = true; }else if(x2 - 26  === 450 ) {valor3 = true; }else if(x2 - 27  === 450 ) {valor3 = true; }else if(x2 - 28  === 450 ) {valor3 = true; }else if(x2 - 29  === 450 ) {valor3 = true; }else if(x2 - 30  === 450 ) {valor3 = true; }else if(x2 - 31  === 450 ) {valor3 = true; }else if(x2 - 32  === 450 ) {valor3 = true; }else if(x2 - 33  === 450 ) {valor3 = true; }else if(x2 - 34  === 450 ) {valor3 = true; }else if(x2 - 35  === 450 ) {valor3 = true; }else if(x2 - 36  === 450 ) {valor3 = true; }else if(x2 - 37  === 450 ) {valor3 = true; }else if(x2 - 38  === 450 ) {valor3 = true; }else if(x2 - 39  === 450 ) {valor3 = true; }else if(x2 - 40  === 450 ) {valor3 = true; }else if(x2 - 41  === 450 ) {valor3 = true; }else if(x2 - 42  === 450 ) {valor3 = true; }else if(x2 - 43  === 450 ) {valor3 = true; }else if(x2 - 44  === 450 ) {valor3 = true; }else if(x2 - 45  === 450 ) {valor3 = true; }else if(x2 - 46  === 450 ) {valor3 = true; }else if(x2 - 47  === 450 ) {valor3 = true; }else if(x2 - 48  === 450 ) {valor3 = true; }else if(x2 - 49  === 450 ) {valor3 = true; }else if(x2 - 50  === 450 ) {valor3 = true; }else if(x2 + 1  === 450 ) {valor3 = true; }if(x2 + 2  === 450 ) {valor3 = true; }else if(x2 + 3  === 450 ) {valor3 = true; }else if(x2 + 4  === 450 ) {valor3 = true; }else if(x2 + 5  === 450 ) {valor3 = true; }else if(x2 + 6  === 450 ) {valor3 = true; }else if(x2 + 7  === 450 ) {valor3 = true; }else if(x2 + 8  === 450 ) {valor3 = true; }else if(x2 + 9  === 450 ) {valor3 = true; }else if(x2 + 10  === 450 ) {valor3 = true; }else if(x2 + 11  === 450 ) {valor3 = true; }else if(x2 + 12 === 450 ) {valor3 = true; }else if(x2 + 13  === 450 ) {valor3 = true; }else if(x2 + 14  === 450 ) {valor3 = true; }else if(x2 + 15  === 450 ) {valor3 = true; }else if(x2 + 16  === 450 ) {valor3 = true; }else if(x2 + 17  === 450 ) {valor3 = true; }else if(x2 + 18  === 450 ) {valor3 = true; }else if(x2 + 19  === 450 ) {valor3 = true; }else if(x2 + 20  === 450 ) {valor3 = true; }else if(x2 + 21  === 450 ) {valor3 = true; }else if(x2 + 22  === 450 ) {valor3 = true; }else if(x2 + 23  === 450 ) {valor3 = true; }else if(x2 + 24  === 450 ) {valor3 = true; }else if(x2 + 25  === 450 ) {valor3 = true; }else if(x2 + 26  === 450 ) {valor3 = true; }else if(x2 + 27  === 450 ) {valor3 = true; }else if(x2 + 28  === 450 ) {valor3 = true; }else if(x2 + 29  === 450 ) {valor3 = true; }else if(x2 + 30  === 450 ) {valor3 = true; }else if(x2 + 31  === 450 ) {valor3 = true; }else if(x2 + 32  === 450 ) {valor3 = true; }else if(x2 + 33  === 450 ) {valor3 = true; }else if(x2 + 34  === 450 ) {valor3 = true; }else if(x2 + 35  === 450 ) {valor3 = true; }else if(x2 + 36  === 450 ) {valor3 = true; }else if(x2 + 37 === 450 ) {valor3 = true; }else if(x2 + 38  === 450 ) {valor3 = true; }else if(x2 + 39  === 450 ) {valor3 = true; }else if(x2 + 40  === 450 ) {valor3 = true; }else if(x2 + 41  === 450 ) {valor3 = true; }else if(x2 + 42  === 450 ) {valor3 = true; }else if(x2 + 43  === 450 ) {valor3 = true; }else if(x2 + 44  === 450 ) {valor3 = true; }else if(x2 + 45  === 450 ) {valor3 = true; }else if(x2 + 46  === 450 ) {valor3 = true; }else if(x2 + 47  === 450 ) {valor3 = true; }else if(x2 + 48  === 450 ) {valor3 = true; }else if(x2 + 49  === 450 ) {valor3 = true; }else if(x2 + 50  === 450 ) {valor1 = true; }
  else {
  valor3 = false; 
  }
  if (y3 == y2 ) {valor4 = true; } else if(y3 == y2-1){valor4 = true;} else if(y3 == y2-2){valor4 = true;} else if(y3 == y2-3){valor4 = true;} else if(y3 == y2-4){valor4 = true;} else if(y3 == y2-5){valor4 = true;} else if(y3 == y2-6){valor4 = true;} else if(y3 == y2-7){valor4 = true;} else if(y3 == y2-8){valor4 = true;} else if(y3 == y2-9){valor4 = true;} else if(y3 == y2-10){valor4 = true;} else if(y3 == y2-11){valor4 = true;} else if(y3 == y2-12){valor4 = true;} else if(y3 == y2-13){valor4 = true;} else if(y3 == y2-14){valor4 = true;} else if(y3 == y2-15){valor4 = true;} else if(y3 == y2-16){valor4 = true;} else if(y3 == y2-17){valor4 = true;} else if(y3 == y2-18){valor4 = true} else if(y3 == y2-19){valor4 = true;} else if(y3 == y2-20){valor4 = true;} else if(y3 == y2-21){valor4 = true;} else if(y3 == y2-22){valor4 = true;} else if(y3 == y2-23){valor4 = true;} else if(y3 == y2-24){valor4 = true;} else if(y3 == y2-25){valor4 = true;} else if(y3 == y2-26){valor4 = true;} else if(y3 == y2-27){valor4 = true;} else if(y3 == y2-28){valor4 = true;} else if(y3 == y2-29){valor4 = true;} else if(y3 == y2-30){valor4 = true;} else if(y3 == y2-31){valor4 = true;} else if(y3 == y2-32){valor4 = true;} else if(y3 == y2-33){valor4 = true;} else if(y3 == y2-34){valor4 = true;} else if(y3 == y2-35){valor4 = true;} else if(y3 == y2-36){valor4 = true;} else if(y3 == y2-37){valor4 = true;} else if(y3 == y2-38){valor4 = true;} else if(y3 == y2-39){valor4 = true;} else if(y3 == y2-40){valor4 = true;} else if(y3 == y2-41){valor4 = true;} else if(y3 == y2-42){valor4 = true;} else if(y3 == y2-43){valor4 = true;} else if(y3 == y2-44){valor4 =  true;} else if(y3 == y2-45){valor4 = true;} else if(y3 == y2-46){valor4 = true;} else if(y3 == y2-47){valor4 = true;} else if(y3 == y2-48){valor4 = true;} else if(y3 == y2-49){valor4 = true;} else if(y3 == y2-50){valor4 = true;} else if(y3 == y2+1){valor4 = true;} else if(y3 == y2+2){valor4 = true;} else if(y3 == y2+3){valor4 = true;} else if(y3 == y2+4){valor4 = true;} else if(y3 == y2+5){valor4 = true;} else if(y3 == y2+6){valor4 = true;} else if(y3 == y2+7){valor4 = true;} else if(y3 == y2+8){valor4 = true;} else if(y3 == y2+9){valor4 = true;} else if(y3 == y2+10){valor4 = true;} else if(y3 == y2+11){valor4 = true;} else if(y3 == y2+12){valor4 = true;} else if(y3 == y2+13){valor4 = true;} else if(y3 == y2+14){valor4 = true;} else if(y3 == y2+15){valor4 = true;} else if(y3 == y2+16){valor4 = true;} else if(y3 == y2+17){valor4 = true;} else if(y3 == y2+18){valor4 = true} else if(y3 == y2+19){valor4 = true;} else if(y3 == y2+20){valor4 = true;} else if(y3 == y2+21){valor4 = true;} else if(y3 == y2+22){valor4 = true;} else if(y3 == y2+23){valor4 = true;} else if(y3 == y2+24){valor4 = true;} else if(y3 == y2+25){valor4 = true;} else if(y3 == y2+26){valor4 = true;} else if(y3 == y2+27){valor4 = true;} else if(y3 == y2+28){valor4 = true;} else if(y3 == y2+29){valor4 = true;} else if(y3 == y2+30){valor4 = true;} else if(y3 == y2+31){valor4 = true;} else if(y3 == y2+32){valor4 = true;} else if(y3 == y2+33){valor4 = true;} else if(y3 == y2+34){valor4 = true;} else if(y3 == y2+35){valor4 = true;} else if(y3 == y2+36){valor4 = true;} else if(y3 == y2+37){valor4 = true;} else if(y3 == y2+38){valor4 = true;} else if(y3 == y2+39){valor4 = true;} else if(y3 == y2+40){valor4 = true;} else if(y3 == y2+41){valor4 = true;} else if(y3 == y2+42){valor4 = true;} else if(y3 == y2+43){valor4 = true;} else if(y3 == y2+44){valor4 = true;} else if(y3 == y2+45){valor4 = true;} else if(y3 == y2+46){valor4 = true;} else if(y3 == y2+47){valor4 = true;} else if(y3 == y2+48){valor4 = true;} else if(y3 == y2+49){valor4 = true;} else if(y3 == y2+50){valor4 = true;}
  
  else {
  valor4 = false;
  }
 
   if(x4  === 450 ) {valor5 = true; }else if(x4 - 1  === 450 ) {valor5 = true; }else if(x4 - 2  === 450 ) {valor5 = true; }else if(x4 - 3  === 450 ) {valor5 = true; }else if(x4 - 4  === 450 ) {valor5 = true; }else if(x4 - 5  === 450 ) {valor5 = true; }else if(x4 - 6  === 450 ) {valor5 = true; }else if(x4 - 7  === 450 ) {valor5 = true; }else if(x4 - 8  === 450 ) {valor5 = true; }else if(x4 - 9  === 450 ) {valor5 = true; }else if(x4 - 10  === 450 ) {valor5 = true; }else if(x4 - 11  === 450 ) {valor5 = true; }else if(x4 - 12  === 450 ) {valor5 = true; }else if(x4 - 13  === 450 ) {valor5 = true; }else if(x4 - 14  === 450 ) {valor5 = true; }else if(x4 - 15  === 450 ) {valor5 = true; }else if(x4 - 16  === 450 ) {valor5 = true; }else if(x4 - 17  === 450 ) {valor5 = true; }else if(x4 - 18  === 450 ) {valor5 = true; }else if(x4 - 19  === 450 ) {valor5 = true; }else if(x4 - 20  === 450 ) {valor5 = true; }else if(x4 - 21  === 450 ) {valor5 = true; }else if(x4 - 22  === 450 ) {valor5 = true; }else if(x4 - 23  === 450 ) {valor5 = true; }else if(x4 - 24  === 450 ) {valor5 = true; }else if(x4 - 25  === 450 ) {valor5 = true; }else if(x4 - 26  === 450 ) {valor5 = true; }else if(x4 - 27  === 450 ) {valor5 = true; }else if(x4 - 28  === 450 ) {valor5 = true; }else if(x4 - 29  === 450 ) {valor5 = true; }else if(x4 - 30  === 450 ) {valor5 = true; }else if(x4 - 31  === 450 ) {valor5 = true; }else if(x4 - 32  === 450 ) {valor5 = true; }else if(x4 - 33  === 450 ) {valor5 = true; }else if(x4 - 34  === 450 ) {valor5 = true; }else if(x4 - 35  === 450 ) {valor5 = true; }else if(x4 - 36  === 450 ) {valor5 = true; }else if(x4 - 37  === 450 ) {valor5 = true; }else if(x4 - 38  === 450 ) {valor5 = true; }else if(x4 - 39  === 450 ) {valor5 = true; }else if(x4 - 40  === 450 ) {valor5 = true; }else if(x4 - 41  === 450 ) {valor5 = true; }else if(x4 - 42  === 450 ) {valor5 = true; }else if(x4 - 43  === 450 ) {valor5 = true; }else if(x4 - 44  === 450 ) {valor5 = true; }else if(x4 - 45  === 450 ) {valor5 = true; }else if(x4 - 46  === 450 ) {valor5 = true; }else if(x4 - 47  === 450 ) {valor5 = true; }else if(x4 - 48  === 450 ) {valor5 = true; }else if(x4 - 49  === 450 ) {valor5 = true; }else if(x4 - 50  === 450 ) {valor5 = true; }else if(x4 + 1  === 450 ) {valor5 = true; }if(x4 + 2  === 450 ) {valor5 = true; }else if(x4 + 3  === 450 ) {valor5 = true; }else if(x4 + 4  === 450 ) {valor5 = true; }else if(x4 + 5  === 450 ) {valor5 = true; }else if(x4 + 6  === 450 ) {valor5 = true; }else if(x4 + 7  === 450 ) {valor5 = true; }else if(x4 + 8  === 450 ) {valor5 = true; }else if(x4 + 9  === 450 ) {valor5 = true; }else if(x4 + 10  === 450 ) {valor5 = true; }else if(x4 + 11  === 450 ) {valor5 = true; }else if(x4 + 12 === 450 ) {valor5 = true; }else if(x4 + 13  === 450 ) {valor5 = true; }else if(x4 + 14  === 450 ) {valor5 = true; }else if(x4 + 15  === 450 ) {valor5 = true; }else if(x4 + 16  === 450 ) {valor5 = true; }else if(x4 + 17  === 450 ) {valor5 = true; }else if(x4 + 18  === 450 ) {valor5 = true; }else if(x4 + 19  === 450 ) {valor5 = true; }else if(x4 + 20  === 450 ) {valor5 = true; }else if(x4 + 21  === 450 ) {valor5 = true; }else if(x4 + 22  === 450 ) {valor5 = true; }else if(x4 + 23  === 450 ) {valor5 = true; }else if(x4 + 24  === 450 ) {valor5 = true; }else if(x4 + 25  === 450 ) {valor5 = true; }else if(x4 + 26  === 450 ) {valor5 = true; }else if(x4 + 27  === 450 ) {valor5 = true; }else if(x4 + 28  === 450 ) {valor5 = true; }else if(x4 + 29  === 450 ) {valor5 = true; }else if(x4 + 30  === 450 ) {valor5 = true; }else if(x4 + 31  === 450 ) {valor5 = true; }else if(x4 + 32  === 450 ) {valor5 = true; }else if(x4 + 33  === 450 ) {valor5 = true; }else if(x4 + 34  === 450 ) {valor5 = true; }else if(x4 + 35  === 450 ) {valor5 = true; }else if(x4 + 36  === 450 ) {valor5 = true; }else if(x4 + 37 === 450 ) {valor5 = true; }else if(x4 + 38  === 450 ) {valor5 = true; }else if(x4 + 39  === 450 ) {valor5 = true; }else if(x4 + 40  === 450 ) {valor5 = true; }else if(x4 + 41  === 450 ) {valor5 = true; }else if(x4 + 42  === 450 ) {valor5 = true; }else if(x4 + 43  === 450 ) {valor5 = true; }else if(x4 + 44  === 450 ) {valor5 = true; }else if(x4 + 45  === 450 ) {valor5 = true; }else if(x4 + 46  === 450 ) {valor5 = true; }else if(x4 + 47  === 450 ) {valor5 = true; }else if(x4 + 48  === 450 ) {valor5 = true; }else if(x4 + 49  === 450 ) {valor5 = true; }else if(x4 + 50  === 450 ) {valor1 = true; }
  else {
  valor5 = false; 
  }
  if (y4 == y2 ) {valor6 = true; } else if(y4 == y2-1){valor6 = true;} else if(y4 == y2-2){valor6 = true;} else if(y4 == y2-3){valor6 = true;} else if(y4 == y2-4){valor6 = true;} else if(y4 == y2-5){valor6 = true;} else if(y4 == y2-6){valor6 = true;} else if(y4 == y2-7){valor6 = true;} else if(y4 == y2-8){valor6 = true;} else if(y4 == y2-9){valor6 = true;} else if(y4 == y2-10){valor6 = true;} else if(y4 == y2-11){valor6 = true;} else if(y4 == y2-12){valor6 = true;} else if(y4 == y2-13){valor6 = true;} else if(y4 == y2-14){valor6 = true;} else if(y4 == y2-15){valor6 = true;} else if(y4 == y2-16){valor6 = true;} else if(y4 == y2-17){valor6 = true;} else if(y4 == y2-18){valor6 = true} else if(y4 == y2-19){valor6 = true;} else if(y4 == y2-20){valor6 = true;} else if(y4 == y2-21){valor6 = true;} else if(y4 == y2-22){valor6 = true;} else if(y4 == y2-23){valor6 = true;} else if(y4 == y2-24){valor6 = true;} else if(y4 == y2-25){valor6 = true;} else if(y4 == y2-26){valor6 = true;} else if(y4 == y2-27){valor6 = true;} else if(y4 == y2-28){valor6 = true;} else if(y4 == y2-29){valor6 = true;} else if(y4 == y2-30){valor6 = true;} else if(y4 == y2-31){valor6 = true;} else if(y4 == y2-32){valor6 = true;} else if(y4 == y2-33){valor6 = true;} else if(y4 == y2-34){valor6 = true;} else if(y4 == y2-35){valor6 = true;} else if(y4 == y2-36){valor6 = true;} else if(y4 == y2-37){valor6 = true;} else if(y4 == y2-38){valor6 = true;} else if(y4 == y2-39){valor6 = true;} else if(y4 == y2-40){valor6 = true;} else if(y4 == y2-41){valor6 = true;} else if(y4 == y2-42){valor6 = true;} else if(y4 == y2-43){valor6 = true;} else if(y4 == y2-44){valor6 =  true;} else if(y4 == y2-45){valor6 = true;} else if(y4 == y2-46){valor6 = true;} else if(y4 == y2-47){valor6 = true;} else if(y4 == y2-48){valor6 = true;} else if(y4 == y2-49){valor6 = true;} else if(y4 == y2-50){valor6 = true;} else if(y4 == y2+1){valor6 = true;} else if(y4 == y2+2){valor6 = true;} else if(y4 == y2+3){valor6 = true;} else if(y4 == y2+4){valor6 = true;} else if(y4 == y2+5){valor6 = true;} else if(y4 == y2+6){valor6 = true;} else if(y4 == y2+7){valor6 = true;} else if(y4 == y2+8){valor6 = true;} else if(y4 == y2+9){valor6 = true;} else if(y4 == y2+10){valor6 = true;} else if(y4 == y2+11){valor6 = true;} else if(y4 == y2+12){valor6 = true;} else if(y4 == y2+13){valor6 = true;} else if(y4 == y2+14){valor6 = true;} else if(y4 == y2+15){valor6 = true;} else if(y4 == y2+16){valor6 = true;} else if(y4 == y2+17){valor6 = true;} else if(y4 == y2+18){valor6 = true} else if(y4 == y2+19){valor6 = true;} else if(y4 == y2+20){valor6 = true;} else if(y4 == y2+21){valor6 = true;} else if(y4 == y2+22){valor6 = true;} else if(y4 == y2+23){valor6 = true;} else if(y4 == y2+24){valor6 = true;} else if(y4 == y2+25){valor6 = true;} else if(y4 == y2+26){valor6 = true;} else if(y4 == y2+27){valor6 = true;} else if(y4 == y2+28){valor6 = true;} else if(y4 == y2+29){valor6 = true;} else if(y4 == y2+30){valor6 = true;} else if(y4 == y2+31){valor6 = true;} else if(y4 == y2+32){valor6 = true;} else if(y4 == y2+33){valor6 = true;} else if(y4 == y2+34){valor6 = true;} else if(y4 == y2+35){valor6 = true;} else if(y4 == y2+36){valor6 = true;} else if(y4 == y2+37){valor6 = true;} else if(y4 == y2+38){valor6 = true;} else if(y4 == y2+39){valor6 = true;} else if(y4 == y2+40){valor6 = true;} else if(y4 == y2+41){valor6 = true;} else if(y4 == y2+42){valor6 = true;} else if(y4 == y2+43){valor6 = true;} else if(y4 == y2+44){valor6 = true;} else if(y4 == y2+45){valor6 = true;} else if(y4 == y2+46){valor6 = true;} else if(y4 == y2+47){valor6 = true;} else if(y4 == y2+48){valor6 = true;} else if(y4 == y2+49){valor6 = true;} else if(y4 == y2+50){valor6 = true;}
  
  else {
  valor6 = false;
  }
 
 
 
 
 
 if(valor1 & valor2 || valor3 && valor4 || valor5 && valor6 == true){
   sla = 1;
 }
 
 if(sla === 1){
   
   scorenumbnumb = 0;
   background(rui);
   xspeed = 0;
   xspeed2 = 0;
   fill(95,200,250);
   textAlign(CENTER);
   textStyle(ITALIC);
   textSize(150);
   stroke(0);
   strokeWeight(7);
   text("GAME     VER!",940,360);
   image(bola,width / 2.15 + 40, 230,200, 143);
   fill(255,200,0);
   textSize(80);
   text("Press       to restart", 940,1000);
   fill(255,200,0);
   text("F5",885,1000);
   arrowspeed = 0;
   fill(0,255,0);
   textSize(75);
   text("Your score: " + scorenumb, 940, 860);
   }
  
 
 if(sla == 1 && scorenumb<=3){
   fill(255,0,0);
   textSize(80);
   strokeWeight(5);
   text("Noob",940,660);
   } 
 
  if(sla == 1 && scorenumb>=4 && scorenumb<=6){
   fill(255,100,0);
   textSize(80);
   strokeWeight(5);
   text("Meh",940,660);
  } 

 
 
  if(sla == 1 && scorenumb>=7 && scorenumb<=15){
   fill(255,255,0);
   textSize(80);
   strokeWeight(5);
   text("Okay",940,660);
   } 
  
 
 if(sla == 1 && scorenumb>=16 && scorenumb<=25){
   fill(0,255,0);
   textSize(80);
   text("Good",940,660);
 } 
    
 if(sla == 1 && scorenumb>=26 && scorenumb<=35){
   fill(205,0,205);
   textSize(80);
   strokeWeight(5);
   text("Epic",940,660);
 } 
   
 if(sla == 1 && scorenumb>=36 && scorenumb <= 50){
   fill(0,200,255);
   textSize(80);
   strokeWeight(5);
   text("Awesome",940,660);
   } 
  
 if(sla == 1 && scorenumb>=51  && scorenumb <= 75){
   fill(245,233,99);
   textSize(80);
   strokeWeight(5);
   text("Legendary",940,660);
   } 
  
  if(sla == 1 && scorenumb>=76  && scorenumb <= 100){
   fill(255,132,0);
   textSize(80);
   strokeWeight(5);
   text("Godlike",940,660);
   } 
  
  if(sla == 1 && scorenumb>=101  && scorenumb <= 500){
   fill(206,206,206);
   textSize(80);
   strokeWeight(5);
   text("Are you even human?",940,660);
   } 
 
 if(sla == 1 && scorenumb>=500 && scorenumb <= 1000){
   fill(255);
   textSize(80);
   strokeWeight(5);
   text("What's even the point?",940,660);
   } 
 
  if(sla == 1 && scorenummb<1001){
   fill(255);
   textSize(80);
   strokeWeight(5);
   text("You can rest in peace now",940,660);
   } 

 }
 
}
  
