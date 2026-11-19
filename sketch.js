function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
}

function draw() {
  background(220);
  circle(width/2, height/2, 50)
  text("🫪",width/2, height/2)
  textSize(60)
  textAlign(CENTER,CENTER)
}