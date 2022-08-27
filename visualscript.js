
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
    let element = row.querySelectorAll('.gametile')
    removeVisualIndicator(row)

    if (element[tile] == null) return element[0].classList.add("highlight"), console.log(element[tile], 'is null')

    element[tile].querySelector('.gamecontent').classList.add("highlight")
}

// Removes indicator from all tiles
function removeVisualIndicator(element) {

    if (element == null) return

    for (let index = 0; index < element.querySelectorAll('.gamecontent').length; index++) {
        element.querySelectorAll('.gamecontent')[index].classList.remove('highlight')
    }

}