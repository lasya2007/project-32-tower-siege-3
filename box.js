class Box{
    constructor(x,y){
        var options={
            restitution:0.2,
            friction:0.3,
            //density:0.4
        }
        this.Visibility=225;
        this.body=Bodies.rectangle(x,y,30,40,options);
        this.x=x;
        this.y=y;
        this.width=30;
        this.height=40;
        World.add(world,this.body);
    }

    score(){
        if(this.Visibility<0&&this.Visibility>-105){
            score++;
        }
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("pink");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }else{
          World.remove(world,this.body);
          push();
          this.Visibility=this.Visibility-5;
          tint(255,this.Visibility);
          pop();
        }
    }
}