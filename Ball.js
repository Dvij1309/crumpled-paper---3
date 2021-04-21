class Ball {
   constructor(x, y, radius) {
      var options = {
         isStatic: false,
         'restitution': 0.1,
         'friction': 5,
         'density': 0.4

      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.ballImage = loadImage("images/paper.png");
      World.add(world, this.body);

   }
   display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke("pink");
      fill("white");
      image(this.ballImage, 0, 0, this.radius, this.radius);
      pop();

   }

}