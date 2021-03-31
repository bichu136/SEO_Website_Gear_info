'use strict'

class ProductListController {
    async view({view}){
        return view.render('DsSanPham')
    }
}

module.exports = ProductListController
