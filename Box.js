class Block{
  constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          'restitution':1,
          'friction':1,
          'density':0.5 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      // this.image = loadImage("sprites/polygon.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      fill("blue");
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
}