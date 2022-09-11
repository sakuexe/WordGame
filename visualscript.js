// script for visuals

// function for updating the height of desired elements to match the width
function heightUpdt(element){
    let elementWidth = element[0].offsetWidth;

    for (let index = 0; index < element.length; index++) {
        // element's style gets updated to match width
        element[index].style.height=elementWidth+'px'
    }
}

// update game tile's and keys' height when opening the window
heightUpdt(document.querySelectorAll('.gametile'));
heightUpdt(document.querySelectorAll('.key'));

// event listener for when the window's size gets changed
window.addEventListener('resize', _ => {
    // activates further only after the bootstrap's 'lg' breakpoint
    if (window.innerWidth < 992)
    {
        heightUpdt(document.querySelectorAll('.gametile'));
        heightUpdt(document.querySelectorAll('.key'));
    }
})

// Visualize which tile is active
function addVisualIndicator(tile, rowArray) {
    if (!rowArray[tile]) return     // if the current tile is undefinied, return and don't proceed
    // firstly the previous indicators get removed
    removeVisualIndicator(rowArray)
    // afterwards the current tile gets the .highlight class added to it
    rowArray[tile].classList.add('highlight')
}

// Removes indicator from all tiles
function removeVisualIndicator(rowArray) {
    for (let index = 0; index < rowArray.length; index++) {
        rowArray[index].classList.remove('highlight')
    }
}

// function to bring the result element back to visible
function showResult(wordOfTheGame, status) {
    document.querySelector('#game-word').innerHTML = wordOfTheGame

    // if the given status has a value of "true", assign the value of the gameStatus element to 'You WON'
    // if the status has a value of 'false', assign the value as 'You LOST'
    // let's go one liners!
    document.querySelector('#gameStatus').innerHTML = (status) ? 'YOU WON' : 'YOU LOST'

    document.querySelector('#result').style.opacity = '100%'
    document.querySelector('#result').style.marginBottom = '0em'
}

// warning when enter is pressed before the row is filled
function enterWarning(row, tile) {
    for (let index = tile; index < row.length; index++) {
       // add visual indicator to rest of the tiles not filled yet 
	   row[index].classList.add('warning')
    }
    // timer for the red flashing indicators, which afterwards removes the red warnings
    setTimeout(() => {
		for(let index = 0; index < row.length; index++) row[index].classList.remove('warning')
	}, 3000)
}