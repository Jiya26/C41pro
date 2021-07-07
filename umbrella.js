
class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic' : true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world , this.body)
    }

    display(){
        var pos = this.body.position;
        //animation(this.animation , pos.x, pos.y);
       
    }
}