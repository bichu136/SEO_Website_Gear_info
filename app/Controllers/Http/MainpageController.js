'use strict'

class MainpageController {
    async view({view}){
        return view.render('TrangChu.edge')
    }
}

module.exports = MainpageController
