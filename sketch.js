
let swirlything = [];
let swirlythingcount = 100;

function setup() {
  cursorblindness = createCanvas(800, 800);
  for(let i = 0; i < swirlythingcount; i++){
    swirlything[i] = new swirlythingconstructor(i)
  }
}

function draw() {
  background(255,255,255,0);
  translate(399,399);
  for(let i = 0; i < swirlythingcount; i++){
    swirlything[i].display();
    swirlything[i].update();
  }
  cursorblindness.position(winMouseX-399,winMouseY-399)
}
class swirlythingconstructor{
  constructor(n){
    this.angle = 0;
    this.anglespeed = 0.01 + n * 0.01;
    this.radius = 10 + n * 6;
  }

  update(){
    this.angle += this.anglespeed;
  }
  display(){
    let x = this.radius * cos(this.angle);
    let y = this.radius * sin(this.angle);
    stroke(0,100);
    line(0,0,x,y);
    fill(243);
    ellipse(x,y,5,5);
  }
}
