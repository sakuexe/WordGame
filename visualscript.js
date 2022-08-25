
// script for visuals


function heightUpdt(element){
    let elementWidth = element[0].offsetWidth;

    for (let i = 0; i < element.length; i++) {
        element[i].style.height=elementWidth+'px'
    }
};

// update game tile height when opening the window
heightUpdt(document.querySelectorAll('.gametile'));
heightUpdt(document.querySelectorAll('.key'));

window.addEventListener('resize', width => {
    if (window.innerWidth < 992)
    {
        heightUpdt(document.querySelectorAll('.gametile'));
        heightUpdt(document.querySelectorAll('.key'));
    }
});

// Visualize which tile is active

function addVisualIndicator(tile, row) {
    let element = $(`#row-${row}`).find(".gamecontent")
    removeVisualIndicator(element)

    if (element[tile] == null) return element[0].classList.add("highlight")

    element[tile].classList.add("highlight")
}

// Removes indicator from all tiles
function removeVisualIndicator(element) {

    if (element == null) return

    element.each(function(index){
        element[index].classList.remove("highlight")
    })

}