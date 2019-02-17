
var timeoutID;
 
function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
 
    startTimer();
}
setup();
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 6000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
 
    goActive();
}
 
function goInactive() {
$( ".image" ).fadeOut( 4000, function() {
    // Animation complete.
  });


}
 
function goActive() {
$( ".image" ).fadeIn( 3000, function() {
    // Animation complete.
  });
         
    startTimer();
}

    function startDrag(e) {
            // determine event object
            if (!e) {
                var e = window.event;
            }
            if(e.preventDefault) e.preventDefault();

            // IE uses srcElement, others use target
            targ = e.target ? e.target : e.srcElement;

            if (targ.className != 'dragme') {return};
            // calculate event X, Y coordinates
                offsetX = e.clientX;
                offsetY = e.clientY;

            // assign default values for top and left properties
            if(!targ.style.left) { targ.style.left='0px'};
            if (!targ.style.top) { targ.style.top='0px'};

            // calculate integer values for top and left 
            // properties
            coordX = parseInt(targ.style.left);
            coordY = parseInt(targ.style.top);
            drag = true;

            // move div element
                document.onmousemove=dragDiv;
            return false;

        }
        function dragDiv(e) {
            if (!drag) {return};
            if (!e) { var e= window.event};
            // var targ=e.target?e.target:e.srcElement;
            // move div element
            targ.style.left=coordX+e.clientX-offsetX+'px';
            targ.style.top=coordY+e.clientY-offsetY+'px';
            return false;
        }
        function stopDrag() {
            drag=false;
            
        }
        window.onload = function() {
            document.onmousedown = startDrag;
            document.onmouseup = stopDrag;
        }



$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 150) {
         $('.titlepage').fadeOut( "slow" );;
     }
     else {
         $('.titlepage').fadeOut("slow" );
     }
});





    $( document ).ready( function( ) {

            methodologyinfo.style.display = 'none';

            function toggleContent( ) {
            $( '#methodologyinfo' ).slideToggle( );
            }
            $( '#methodology' ).click( toggleContent );
            } );
        



    $( document ).ready( function( ) {

            colophoninfo.style.display = 'none';

            function toggleContent( ) {
            $( '#colophoninfo' ).slideToggle( );
            }
            $( '#colophon' ).click( toggleContent );
            } );
        





