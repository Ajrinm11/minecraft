var canvas= new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("avatar.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
           top:player_y,
           left:player_x 
        });
        canvas.add(player_object);
    })
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
           top:player_y,
           left:player_x 
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey && keyPressed=='80'){
        block_image_width+=10;
        block_image_height+=10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        
    }

    if(e.shiftKey && keyPressed=='77'){
        block_image_width-=10;
        block_image_height-=10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        
    }
    if(keyPressed=='37'){
        left();
    }

    if(keyPressed=='38'){
        up();
    }

    if(keyPressed=='39'){
        right();
    }

    if(keyPressed=='40'){
        down();
    }

    if(keyPressed=='87'){
       new_image("wall.png");
    }

    
    if(keyPressed=='71'){
        new_image("ground.png");
     }

     
    if(keyPressed=='76'){
        new_image("light_green.png");
     }


     if(keyPressed=='84'){
        new_image("trunk.jpg");
     }

     
    if(keyPressed=='82'){
        new_image("block.png");
     }

     
    if(keyPressed=='89'){
        new_image("yellow_wall.png");
     }

     
    if(keyPressed=='68'){
        new_image("dark_green.png");
     }

     
    if(keyPressed=='85'){
        new_image("unique.png");
     }

     
    if(keyPressed=='67'){
        new_image("cloud.png");
     }

    


}

function down(){
    if (player_y<500){
        player_y += block_image_height;
canvas.remove(player_object);
    player_update();
    document.getElementById("ud").play();
    }
}

function up(){
    if (player_y >0){
        player_y -= block_image_height;
canvas.remove(player_object);
    player_update();
    document.getElementById("ud").play();
    }
}

function right(){
    if (player_x<900){
        player_x += block_image_width;
canvas.remove(player_object);
    player_update();
    document.getElementById("lr").play();
    }
}

function left(){
    if (player_x>0){
        player_x -= block_image_width;
canvas.remove(player_object);
    player_update();
    document.getElementById("lr").play();
    }
}