'use strict'

class CastController {
    async view({view}){
        return view.render('AddToCart.edge')
    }
}

module.exports = CastController
