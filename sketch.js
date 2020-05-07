let noiseMax = 5
let slider;
let zoff = 0;
let xoff = 0;
let yoff = 0;

function setup(){
    createCanvas(600,600,WEBGL);
    slider = createSlider(0,10,5,0.1);
    
}

function draw(){
   background(0);

   rotateX(xoff);
   rotateY(yoff);
   rotateZ(zoff);

   stroke(random(0,255), random(0,255), random(0,255));
   strokeWeight(4);
   noFill();

   noiseMax = slider.value();

   beginShape();
   for(let a = 0; a < TWO_PI ; a += 0.1){
       let xoff = map(cos(a),-1,1,0,noiseMax)
       let yoff = map(sin(a),-1,1,0,noiseMax);
       let r = map(noise(xoff,yoff,zoff),0,1,100,200);
       let x = r * cos(a);
       let y = r * sin(a);
       let z = r * (-sin * cos(a));
       vertex(x,y,z);
       
   }
   endShape(CLOSE);

zoff += 0.1;
yoff += 0.05;
xoff += 0.05;
}