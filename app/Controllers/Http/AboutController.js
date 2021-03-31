'use strict'

class AboutController {
    async view({view}){
        return view.render('ThongTin.edge')
    }
}

module.exports = AboutController
