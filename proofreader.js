
// check if the word has same letters as the tiles

function proofreadRow(selectedRow, word) {

    lettersArray = Array.from(word.toUpperCase())

    correspondingLetter(selectedRow, word)   // yellow light
    if (matchingLetter(selectedRow)) return true    // green light
}

function correspondingLetter(selectedRow, word) {

    $.each(selectedRow, function(index) {

        if (lettersArray.includes(selectedRow[index].innerHTML)) {
            console.log(`letter ${selectedRow[index].innerHTML} on tile ${index}, is in the real word`)
            selectedRow[index].classList.add("yellow")
            console.log(index)
        }

    });

}

function matchingLetter(selectedRow) {

    score = 0

    $.each(selectedRow, function(index) {

        if (lettersArray[index] == selectedRow[index].innerHTML) {
            console.log(`letter ${selectedRow[index].innerHTML} on tile ${index + 1}, matching the real word`)
            selectedRow[index].classList.add("green")
            score++
        }

    });

    if (score == lettersArray.length) return true
}