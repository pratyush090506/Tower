class BoxB {
    constructor(x, y, width,height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1,
          
      }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.Visiblity=255;
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      
      rectMode(CENTER);
      fill(127, 122, 122);
      
      rect (0,0,this.width,this.height);
      pop();
    }
    score() {

      if(this.Visiblity < 0 && this.Visiblity>-1005){
    
        score++;
    
      }
  

  if(this.body.speed < 1){
    display()
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
}
};