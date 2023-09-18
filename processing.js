void setup() {
  size(460, 500);  
  background(#C0DBDE);
  noLoop();
}

void draw() {

  for (int y = 0; y<880; y = y + 110){
  for (int x = 0; x<590; x = x + 100){
    duck(x,y);
  }
}
}

void duck(int x, int y) {
  noStroke();
 
  //front arm
  fill(#CECECE);
beginShape();
curveVertex(20+x,25+y);
curveVertex(20+x,25+y);
curveVertex(40+x,40+y);
curveVertex(25+x,35+y);
curveVertex(10+x,35+y);
curveVertex(20+x,25+y);
curveVertex(20+x,25+y);
endShape();
  //golf stick
  fill(#989595);
beginShape();
curveVertex(0+x,0+y);
curveVertex(0+x,0+y);
curveVertex(40+x,65+y);
curveVertex(50+x,65+y);
curveVertex(35+x,60+y);
curveVertex(0+x,0+y);
curveVertex(0+x,0+y);
endShape();
  //ball
fill(#FFFFFF);
ellipse(40+x, 68+y, 8, 8);
  //front arm
beginShape();
curveVertex(15+x,30+y);
curveVertex(15+x,30+y);
curveVertex(40+x,50+y);
curveVertex(20+x,45+y);
curveVertex(5+x,45+y);
curveVertex(15+x,30+y);
curveVertex(15+x,30+y);
endShape();
//back leg
fill(#FF8C00);
beginShape();
curveVertex(0+x,67+y);
curveVertex(0+x,64+y);
curveVertex(4+x,62+y);
curveVertex(20+x,62+y);
curveVertex(5+x,57+y);
curveVertex(0+x,67+y);
curveVertex(0+x,67+y);
endShape();
//body
fill(#FFFFFF);
beginShape();
curveVertex(0+x,20+y);
curveVertex(0+x,20+y);
curveVertex(20+x,50+y);
curveVertex(5+x,60+y);
curveVertex(-20+x,50+y);
curveVertex(-30+x,40+y);
curveVertex(0+x,20+y);
curveVertex(0+x,20+y);
endShape();
//neck
fill(#FFFFFF);
ellipse(8+x,26+y, 16, 60);
//head
fill(#FFFFFF);
ellipse(15+x,2+y, 20, 10);
circle(12+x,-3+y, 13);
//beak
fill(#FFA500);
beginShape();
beginShape();
curveVertex(18+x,-6+y);
curveVertex(18+x,-6+y);
curveVertex(20+x,9+y);
curveVertex(30+x,6+y);
curveVertex(40+x,7+y);
curveVertex(24+x,0+y);
curveVertex(18+x,-6+y);
curveVertex(18+x,-6+y);
endShape();
//legs
beginShape();
curveVertex(0+x,70+y);
curveVertex(0+x,70+y);
curveVertex(4+x,65+y);
curveVertex(20+x,65+y);
curveVertex(5+x,60+y);
curveVertex(0+x,70+y);
curveVertex(0+x,70+y);
endShape();
//eye
fill(#000000);
ellipse(13+x, -3+y, 2, 4);

}
