class DustBin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'restitution': 0.8,
            'friction': 2.0,
            'density': 1.0

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.image = loadImage("images/dustbingreen.png");
        this.height = height;

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }

}