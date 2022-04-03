
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

// Visualize which tile is active

function addVisualIndicator(tile, row) {
    let element = $(`#row-${row}`).find(".gamecontent")
    removeVisualIndicator(element)

    if (element[tile] == null) {
        element[0].classList.add("highlight")
        return
    }

    element[tile].classList.add("highlight")
}

// Removes indicator from all tiles
function removeVisualIndicator(element) {

    if (element == null) return

    element.each(function(index){
        element[index].classList.remove("highlight")
    })

}