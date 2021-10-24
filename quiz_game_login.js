var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var blockImageObject="";
 function new_image(get_image){
    fabric.Image.fromURL("https://tse2.mm.bing.net/th?id=OIP.0691nyl20lozEu8AyeIqPAHaFj&pid=Api&P=0&w=231&h=173",
                         function(Img){
        blockImageObject =Img;
        blockImageObject.scaleToWidth(700);  
        blockImageObject.scaleToHeight(700);
        blockImageObject.set({
             top:0,
            left:0
         });
         canvas.add( blockImageObject);
    });

}

function playSound(){
	x.play();
}
