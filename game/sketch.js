let slider;
let lineStart, lineEnd;
let pointPos;
const lineLength = 100;
let goldenRatio;
let x, y;
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];
let tex1,tex2,tex3;
let ratio_difference;
let ratio1,ratio2;

function setup() {
  createCanvas(1000, 800);
  translate(0, 0);
  // Define the start and end points of the line
  lineStart = createVector(-300, 300);
  lineEnd = createVector(lineStart.x + lineLength*4, 300);
  
  // Calculate the golden ratio
  goldenRatio = (1 + sqrt(5)) / 2;
  
  // Create a slider to move the point along the line
  slider = createSlider(0, 1, 0.5, 0.0005);
  slider.position(65, 430);
  slider.style('width', '400px');
  
  tex1 = createP();
  tex2 = createP();
  tex3 = createP();
  
  ratio1 = 1;
  ratio2 = 2;
  ratio_difference = 1;

}

function draw() {
  background(255);
  fill(255);
  textSize(16);
  

  for (let i = 7; i >= 0; i--) {
        x = fibonacci[i] * 15;
        y = x;
	strokeWeight(1);
	if (ratio_difference < 0.001) {
        stroke('orange');
  }else{ stroke('grey'); }
        
        rect(0, 0, x, y);

        push();
        translate(x, 0);

        if (ratio_difference < 0.001) {
        stroke('orange');
  }else{ stroke('grey'); }
        arc(0, 0, x * 2, y * 2, radians(90), radians(180));
        pop();

        translate(x, y);
        rotate(radians(270));
    }
  
  stroke('blue')
  textAlign(CENTER, CENTER);
  text("100", (lineStart.x + lineEnd.x) / 2, lineStart.y - 20);   
  // Get the current value of the slider
  let t = slider.value();
  
  // Calculate the position of the point on the line
  pointPos = p5.Vector.lerp(lineStart, lineEnd, t);
  
  // Calculate a and b
  let a = dist(lineStart.x, lineStart.y, pointPos.x, pointPos.y)/4;
  let b = dist(pointPos.x, pointPos.y, lineEnd.x, lineEnd.y)/4;
  
  // Draw the line segments a and b
  strokeWeight(4);
  
  // Segment a
  stroke(0, 0, 255); // Blue
  line(lineStart.x, lineStart.y, pointPos.x, pointPos.y);
  
  // Segment b
  stroke(255, 165, 0); // Orange
  line(pointPos.x, pointPos.y, lineEnd.x, lineEnd.y);
  
  // Draw the point
  fill(255, 0, 0);
  ellipse(pointPos.x, pointPos.y, 10, 10);
  
  // Display a and b
  stroke(255, 165, 0);
  fill(0, 0, 255);
  text('a = '+a.toFixed(1), (lineStart.x + pointPos.x) / 2, lineStart.y + 20);
  
  fill(255, 165, 0);
  stroke(0,0,255);
  text('b = '+b.toFixed(1), (pointPos.x + lineEnd.x) / 2, lineEnd.y + 20);

  // Display calculations
  // textSize(18);
  // textAlign(LEFT, CENTER);
  stroke(255,255,255)
  // fill(0, 0, 255);
  // text("100 / " + a.toFixed(1) + " = " + (100 / a).toFixed(3), -300, 400);
  // fill(255, 165, 0);
  // text(a.toFixed(1) + " / " + b.toFixed(1) + " = " + (a / b).toFixed(3), -300, 430);
  
  // Check if the player wins
  ratio_difference = abs(abs(100 / a) - (a / b));
  fill(225, 215, 0);
  if (abs((100 / a) - (a / b)) < 0.001) {
    text("The Golden Ratio = 1.618", -185, 65);
  }
  


  //Circles
  ratio1 = (a / b).toFixed(3);
  ratio2 = (100 / a).toFixed(3);
  let radius1,radius2

    radius1 = map(ratio1, 0, 2.618, 1, 12); // Adjust these ranges if necessary
    radius2 = map(ratio2, 0, 2.618, 1, 12); // Max ratio2 is 2.618 when A = 61.8, B = 38.2

  
  // Ensure radii do not exceed 10
  radius1 = constrain(radius1, 1, 12);
  radius2 = constrain(radius2, 1, 12);
  
  // Draw circles
  fill(220, 220, 220);
  ellipse(-235, -15, radius1 * 10, radius1 * 10);
  
  fill(220, 220, 220);
  ellipse(-103, -15, radius2 * 10, radius2 * 10);
  //Latex
  
  let size1 = (100 / a).toFixed(3)+"px";
  tex1.style('font-size', '40px');
  
  tex1.style('color', 'deeppink');
  tex1.position(95, 10)
  katex.render('\\frac{a+b}{a}', tex1.elt)
  
  let size2 = (a / b).toFixed(3)+"px";
  tex2.style('font-size', '40px');
  
  tex2.style('color', 'deeppink');
  tex2.position(250, 10)
  katex.render('\\frac{a}{b} ', tex2.elt)
  
  tex3.style('font-size', '40px');
  
  tex3.style('color', 'deeppink');
  tex3.position(180, 10)
  katex.render(' = ', tex3.elt)
  

}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

