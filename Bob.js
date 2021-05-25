class Bob
{
    constructor(x,y,r)
    {
        var options=
        {
            'isStatic':false,
            'restitution':1.0,
            'friction':0.2,
            'density':0.9,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        fill("gold");
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}

