const AnagramFinder = function (word) {
    this.word = word.split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    foundAnagrams = []
    otherWords.forEach(word => {
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

module.exports = AnagramFinder;
