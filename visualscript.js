
// script for visuals

function heightUpdt(element){
    let elementWidth = $(element).width();
    $(element).css({
    'height': elementWidth + 'px'
    });
};

// update game tile height when opening the window
heightUpdt(".gametile");
heightUpdt(".key");

window.addEventListener('resize', width => {
    if (window.innerWidth < 992)
    {
        heightUpdt(".gametile")
        heightUpdt(".key")
        console.log("resizing")
    }
  });