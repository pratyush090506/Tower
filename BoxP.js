class BoxP {
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
      fill(252, 189, 199);
      
      rect (0,0,this.width,this.height);
      pop();
    }
     score(){

      if(this.Visiblity<0 && this.Visiblity>-1055){

        score++

      }




     }
    };