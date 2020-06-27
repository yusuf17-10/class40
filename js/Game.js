class Game{

    constructor(){

    }
//reading game state from the dataBase
    getState(){

        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        });
    }
//writing in the dataBase
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

   async start(){
        if (gameState === 0){

            player = new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();

        }
        car1 = createSprite(100,200);
        car1.addImage("car",car1Image);

        car2 = createSprite(300,200);
        car2.addImage("car2",car2Image);

        car3 = createSprite(500,200);
        car3.addImage("car3",car3Image);

        car4 = createSprite(700,200);
        car4.addImage("car4",car4Image);

        cars = [car1,car2,car3,car4]
    }

    play(){
        form.hide();
        
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers!==undefined){
        background(ground);
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);


         //   var displayPosition=130;
         var index=0;
         var x=180;
         var y;
            for(var plr in allPlayers){
                index++;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    fill("red");
                    textSize(16);
                    strokeWeight(3);
                    stroke("black");
                     text(player.name,x-cars[index-1].width/2,y-50);
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y;

            }
        }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        }

        if(player.distance>3860){
            gameState=2;
            player.rank++;
            Player.updateCarsAtEnd(player.rank);
        }

    drawSprites();
    }
    end(){
        console.log("game Ended");
        console.log(player.rank);
    }
    
}