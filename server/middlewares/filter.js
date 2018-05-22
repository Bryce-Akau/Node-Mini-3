const notAllowed = ['dookie', 'punani', 'snake']

module.exports = function( req, res, next){
    while ( notAllowed.find( word => req.body.text.includes(word) ) ) {
        const badWord = notAllowed.find( word => req.body.text.includes(word) );
        req.body.text = req.body.text.replace( badWord, 'thats a bad word. imma tell yo mama '.repeat( badWord.length ) );
      }
    next()
}