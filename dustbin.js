class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.bottomBody = Bodies.rectangle(x,y,width,height,options);
      this.leftBody = Bodies.rectangle(x-width/2,y-width/2,height,width,options);
      this.rightBody = Bodies.rectangle(x+width/2,y-width/2,height,width,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
      var pos =this.bottomBody.position;
       imageMode(CENTER)
       image(this.image,pos.x,this.leftBody.position.y+10,this.width,this.width)
    /*   rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
        rectMode(CENTER);
      fill("green");
      rect(this.leftBody.position.x,this.leftBody.position.y,this.height,this.width);
        rectMode(CENTER);
      fill("green");
      rect(this.rightBody.position.x,this.rightBody.position.y,this.height,this.width); */
    }
  };