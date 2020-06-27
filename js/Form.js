class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement('h3');
        this.reset = createButton("reset");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("car Racing Game");
        title.position(displayWidth/2-40,0);

      
        

       this.input.position(displayWidth/2-50,displayHeight/2-80);
       this.button.position(displayWidth/2-50,displayHeight/2);
       this.reset.position(displayWidth-200,displayHeight/6);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();


            player.name= this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            
           this.greeting.html("hello "+ player.name);
           this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
        this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
          Player.updateCarsAtEnd(0);
        })


        

        
    }
}
