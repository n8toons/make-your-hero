var canvas = new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){//function to draw player
    fabric.Image.fromURL("player.png",function (Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({ top:player_y, left:player_x }); canvas.add(player_object); }); } 
    function new_image(get_image){ //function to draw blocks
        fabric.Image.fromURL(get_image, function(Img) {
             char_image_object = Img; 
             char_image_object.scaleToWidth(block_image_width); 
             char_image_object.scaleToHeight(block_image_height);
              char_image_object.set({ top:player_y, left:player_x });
               canvas.add(block_image_object); });}
               player_update();
                    //player_update();
       window.addEventListener("keydown",my_KeyDown);
       function my_KeyDown(e){
       keyPressed=e.keyCode;
       console.log(keyPressed);
      
      
    if(keyPressed == '38'){
        up();
        console.log("up key pressed")
    }
    if(keyPressed == '40'){
        down();
        console.log("down key pressed")
    }
    if(keyPressed == '37'){
    left();
        console.log("left key pressed")
    }
    if(keyPressed == '39'){
        right();
        console.log("right key pressed")
    }
    if(keyPressed == '70'){
        new_image('ironman_face.png');
        console.log("f key pressed")
    }
    if(keyPressed == '66'){
        new_image('spiderman_body.png');
        console.log("w key pressed")
    }
    if(keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r key pressed")
    }
    if(keyPressed == '76'){
        new_image('hulk_legs.jpg');
        console.log("l key pressed")
    }
    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h key pressed")
    }
    if(keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("y key pressed")
    }
    if(keyPressed == '68'){
        new_image('dark_green.png');
        console.log("d key pressed")
    }
    if(keyPressed == '85'){
        new_image('unique.png');
        console.log("u key pressed")
    }
    if(keyPressed == '67'){
        new_image('cloud.jpg');
        console.log("c key pressed")
    }
       }
       function up(){
        if(player_y >=0){
            player_y -= block_image_height;
            console.log("block_image_height"+ block_image_height);
            console.log("when up arrow pressed x = "+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
       }
       function down(){
        if(player_y <=500){
            player_y += block_image_height;
            console.log("block_image_height"+ block_image_height);
            console.log("when down arrow pressed x = "+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
       }
       function right(){
        if(player_x <=850){
            player_x += block_image_width;
            console.log("block_image_width"+ block_image_width);
            console.log("when right arrow pressed x = "+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
       }
       function left(){
        if(player_x >0){
            player_x -= block_image_width;
            console.log("block_image_width"+ block_image_width);
            console.log("when left arrow pressed x = "+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
       }