// JavaScript Document


 var xAngle = 0, 
	 yAngle = 0;
 /*
			//Keypress Coding for PC Debug.
        document.addEventListener("keydown", function(e)
        {
                switch(e.keyCode)
                {

                        case 37: // left
                                yAngle -= 90;
                                break;

                        case 38: // up
                                xAngle += 90;
                                break;

                        case 39: // right
                                yAngle += 90;
                                break;

                        case 40: // down
                                xAngle -= 90;
                                break;
                }
				document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";   
				
        }, false);
*/
				
			//Swipe Coding for Mobile Device. (Uses jGestures and jVertical plugins)
				$( document ).bind('swipe swipeup swipedown swipeleft swiperight', function (ev, d) {
   switch (ev.type) {
   
        case 'swiperight': // swipe right
            console.log('swipe right');
			yAngle += 90;
            break;
        case 'swipeleft': // swipe left
            console.log('swipe left');
			yAngle -= 90;
            break;
        case 'swipeup': // swipe up
            console.log('swipe up');
			xAngle += 90;
            break;
        case 'swipedown': // swipe down
            console.log('swipe down');
			xAngle -= 90;
            break;
					   
			   }
	document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)"; 
});
				
             