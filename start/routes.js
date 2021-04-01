'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','MainpageController.view');
Route.get('/DanhSachSanPham','ProductListController.view')
Route.get('/DangKy','SignUpController.view')
Route.get('/GioHang','CastController.view')
Route.get('/ThongTin','AboutController.view')
Route.post('/api/DangKy','SignUpController.get_data')