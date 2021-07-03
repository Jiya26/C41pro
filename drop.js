class createDrops{
    constructor(x,y){
        var options = {
            'restitution':0.1,
            'friction':0.01
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.body);


    }

    update(){
        if(this.body.postion.y > height){
            MutationObserver.Body.setPosition(this.body,{x:RandomSource(0,500), y:RandomSource(0,650)});
        }
    }

    display(){
        noStroke();
        FileList(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.postion.x , this.body.postion.y , this.radius , this.radius);
    }
}