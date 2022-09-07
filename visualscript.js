
// script for visuals

function heightUpdt(element){
    let elementWidth = element[0].offsetWidth;

    for (let i = 0; i < element.length; i++) {
        element[i].style.height=elementWidth+'px'
    }
}

// update game tile height when opening the window
heightUpdt(document.querySelectorAll('.gametile'));
heightUpdt(document.querySelectorAll('.key'));

window.addEventListener('resize', _ => {
    if (window.innerWidth < 992)
    {
        heightUpdt(document.querySelectorAll('.gametile'));
        heightUpdt(document.querySelectorAll('.key'));
    }
})

// Visualize which tile is active
function addVisualIndicator(tile, rowArray) {
    removeVisualIndicator(rowArray)

    if (rowArray[tile] == null) return rowArray[0].classList.add('highlight')

    rowArray[tile].classList.add('highlight')
}

// Removes indicator from all tiles
function removeVisualIndicator(rowArray) {
    if (rowArray == null) return

    for (let index = 0; index < rowArray.length; index++) {
        rowArray[index].classList.remove('highlight')
    }
}

function showResult(wordOfTheGame, status) {
        document.querySelector('#game-word').innerHTML = wordOfTheGame

        document.querySelector('#gameStatus').innerHTML = (status) ? 'YOU WON' : 'YOU LOST'

        document.querySelector('#result').style.opacity = '100%'
        document.querySelector('#result').style.marginBottom = '0em'
}

// warning when enter is pressed before the row is filled
function enterWarning(row, tile) {
    console.log('testi 1')
    for (let index = tile; index < row.length; index++) {
       // add visual indicator to rest of the tiles not filled yet 
	   row[index].classList.add('warning')
    }
    setTimeout(() => {
		for(let index = 0; index < row.length; index++) row[index].classList.remove('warning')
	}, 3000)
}