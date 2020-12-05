class Box{
    constructor(x,y,width,height){
         var options ={
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.width = width;
         this.height = height;
         World.add(world,this.body);
     }

     display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); // In translate(), x and y position is specified
        rotate(angle);

        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height); // translate has x and y postion, Hence need to give x and y as 0 here        pop();
       pop();
    }
}