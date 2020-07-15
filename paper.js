class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.3,
        'friction':0,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,70, options);
    this.radius=70
    this.image=loadImage("paper.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //ellipseMode(RADIUS);
    imageMode(CENTER)
    //strokeWeight(5);
    //stroke("orange")
    //fill(0)
    // ellipse(0, 0,this.radius,this.radius);
    image(this.image,0,0,this.radius,this.radius)
    pop();
  }
};