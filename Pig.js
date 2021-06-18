class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //visibility wvaries from 0 to 255
    //zero = 1 fully off byte (0000 0000=completly invisible)
    //255= 1 fully on byte(1111 1111=completly visible)
    this.Visibility=255;
  }
  display(){
    //study the speed of the body,it changes when the body is hit
    console.log(this.body.speed);
    //display the pig if the speed is less than 3 else the pig should vanish
    if(this.body.speed<3){
      super.display()

    }
    else{
      //remove the body from the world
    World.remove(world,this.body);
    //push and pop will prevent the changes from being applied to all the objects in the game
    push()
    //decrase the visibility by 5
    this.Visibility=this.Visibility-5;
    //tint creates vanishing effects,adds a transparent layer to the image (gradually vanishing effect)
    tint(255,this.Visibility);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop()
    }

  }

  
};