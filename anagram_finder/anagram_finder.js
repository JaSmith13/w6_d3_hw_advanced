const AnagramFinder = function (word) {
    this.word = word.split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    foundAnagrams = []
    const sameLengthWords = checkLengthsOtherWords(this.word, otherWords)
    sameLengthWords.forEach(word => {
        if(checkLettersInWord(word, this.word))
        foundAnagrams.push(word)
    }) 
    return foundAnagrams
}


function checkLettersInWord(word, arrayOfLetters){
    let counter = 0
    arrayOfLetters.forEach(letter => {
        if(word.includes(letter))
        counter++
    })
    if (counter === word.length){
        return true
    }
}

function checkLengthsOtherWords (checkWord, arrayOfWords) {
    arrayOfWords.filter(word =>{
        return word.length === checkWord.length
    })
}

module.exports = AnagramFinder;
