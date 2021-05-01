 class Slingshot{
    constructor(bodyA,bodyB)  {
        var opt = {
            length: 10 ,
            stiffness: 0.5,
            bodyA: bodyA,
            bodyB: bodyB
        }
    this.sling = Constraint.create(opt)
    World.add(world,this.sling);
 
}
display(){
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
strokeWeight(4);
    }
}