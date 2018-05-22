// req.session would be null
// if we dont have app.use.session our req.session wont work
module.exports = function ( req, res, next){
    if ( !req.session.user ){
        req.session.user = {
            messages: []
        }
    }
    next()
}