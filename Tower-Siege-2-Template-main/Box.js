class Box 
{ constructor(x,y,width,height)
   { var options = { isStatic:false, }
    this.width = width; this.height = height; this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body); this.image=loadImage("block.png") 
     this.visiblity=255;
     } 
     display(){
        var pos =this.body.position; 
        if(this.body.speed<3){ rect(pos.x, pos.y, this.width, this.height); rectMode(CENTER);
         } 
         else{ World.remove(world,this.body);
           push(); this.visiblity=this.visiblity-5; 
          tint(255,this.visiblity); 
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height); 
          pop();
         }
         }
         };

