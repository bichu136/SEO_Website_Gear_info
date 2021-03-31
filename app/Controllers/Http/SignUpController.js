'use strict'

class SignUpController {
    async view({view}){
        return view.render('DangKy')
    }
    async get_data({response, request}){
        return request;
    }

}

module.exports = SignUpController
