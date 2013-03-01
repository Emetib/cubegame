// JavaScript Document


 var xAngle = 0, 
	 yAngle = 0;
 
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
				
				
			//Swipe Coding for Mobile Device.
			//Thanks to dmi3y (rhythmcode.com) @ StackOverflow (http://stackoverflow.com/questions/13726196/how-to-swipe-between-several-div-in-one-single-jquery-mobile-pages)
				$('.myelementTouchDetection').bind('touchstart touchmove swipe', function (ev, d) {
    var oev = ev.originalEvent,
        myelementTouchDetection = $(this),
        dir; // you may know swipes on move event too

    switch (ev.type) {
        case 'touchstart':
            ftch = oev;
            break;
        case 'touchmove':
            dir = defSwipeDir(myelementTouchDetection, oev.touches);
            return false // cancel default behaiviour
            break;
        case 'swipe':
            switch (d) {
                case 'r': // swipe right
                    console.log('swipe right');
					yAngle += 90;
                    break;
                case 'l': // swipe left
                    console.log('swipe left');
					yAngle -= 90;
                    break;
                case 'u': // swipe up
                    console.log('swipe up');
					xAngle += 90;
                    break;
                case 'd': // swipe down
                    console.log('swipe down');
					xAngle -= 90;
                    break;
            }
			document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)"; 
            break;
    }
});
				
             