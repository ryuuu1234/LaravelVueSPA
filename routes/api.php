<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

/**
 * Jika tanpa middleware => auth:api, maka siapapun bebas akses tanpa authentifikasi
 */

Route::group(['prefix' => 'auth'], function() {

    Route::post('register', 'AuthController@register'); // ini untuk alamat api/auth/register
    Route::post('login', 'AuthController@login');

    
    // Route::post('addtoreg', 'RegistrationController@addtoreg'); // ini alamat untuk user selain root dan admin (api/auth/addtoreg)

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('profile', 'AuthController@profile');
    });
});

Route::group(['prefix' => 'user'], function () {

    Route::group(['middleware' => 'auth:api'], function () {
        Route::resource('categories', 'CategoryController');

        // })->middleware('scope:Root,Admin');
        Route::get('list-user', 'UserController@list')->middleware('scope:Root,Admin');
        Route::put('update-status-user/{user}', 'UserController@update_status')->middleware('scope:Root,Admin');
        Route::get('user-authenticated', 'UserController@getUserLogin')->name('user.authenticated');
        
        Route::get('list-register', 'RegisterController@list')->middleware('scope:Root,Admin');
        Route::put('update-status/{register}', 'RegisterController@update_status')->middleware('scope:Root,Admin');
        Route::get('notif-register', 'RegisterController@notif')->middleware('scope:Root,Admin');
        
        // INI UNTUK MITRA
        Route::resource('items', 'ItemController'); // seluruh route items masuk middleware
        Route::get('items-data', 'ItemController@get_all_data');
        Route::resource('products', 'ProductController'); // seluruh route product masuk middleware
        Route::get('charts', 'ChartController@index');// akses api get charts by user_id
        Route::post('charts', 'ChartController@store'); // tambah data chart
        Route::put('update-charts-qty/{chart}', 'ChartController@update'); // update qty chart

        Route::post('items/delete', 'ItemController@deleteAll');
        Route::put('items-update-harga-jual/{id}', 'ItemController@update_harga_jual');
        Route::post('products/delete', 'ProductController@deleteAll');
        Route::post('products-add-item/{id}', 'ProductController@add_item');
        Route::delete('products-detail-remove/{id}', 'ProductController@remove_item');
        Route::put('products-update-harga/{id}', 'ProductController@update_harga_product');
        Route::put('products-update-harga-beli/{id}', 'ProductController@update_harga_beli_product');
        
        // api/user/orders   ->untuk order dr mitra 
        Route::resource('orders', 'OrderController'); 
        Route::get('orders-user', 'OrderController@get_by_user_id'); // untuk akses orders by user_id
        Route::get('orders-all', 'OrderController@get_all_by_id'); // untuk akses orders by user_id
        Route::post('chart-orders', 'OrderController@orderFromChart');
        Route::delete('delete-charts/{chart}', 'ChartController@destroy')->name('chart.destroy'); // delete chart by id
        Route::get('notif-order', 'OrderController@notif');
        // details order
        Route::get('detail-orders', 'DetailOrderController@index');


        Route::put('update-profile/{user}', 'AuthController@update_profile');
        Route::put('update-image/{user}', 'AuthController@update_image');

        // untuk route notifications
        Route::resource('notification', 'NotificationController')->except(['create', 'destroy']);

        // penambahan broadcast

    });
});

// khusus Mitra
Route::group(['prefix' => 'mitra'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('bubuk-all', 'BubukController@index')->name('bubuk.index'); // bubuk get all
        Route::post('bubuk-save', 'BubukController@adding_data')->name('bubuk.add'); // bubuk add
        Route::get('bubuk-edit/{id}/edit', 'BubukController@edit_data')->name('bubuk.edit'); // bubuk edit
        Route::put('bubuk-update/{id}', 'BubukController@update_data')->name('bubuk.update'); // bubuk update
        Route::delete('bubuk-delete/{id}', 'BubukController@delete_data')->name('bubuk.delete'); // bubuk delete
        
    });
});

// khusus admin lagi
Route::group(['prefix' => 'admin'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('mitra-all', 'Mitra\MitraController@index')->name('mitra.index'); // bubuk get all
        Route::get('mitra-items/{id}', 'Mitra\MitraController@det_item_mitra_by_id_user')->name('bubuk.mitra'); // bubuk get by mitra id
        Route::get('mitra-bubuk-all', 'Mitra\MitraController@get_all_bubuk')->name('bubuk.all'); // bubuk get by mitra id
        Route::put('mitra-update-stok/{id}', 'Mitra\MitraController@update_stok_awal')->name('mitra.update');
        Route::post('mitra-input-penjualan', 'Mitra\MitraController@input_penjualan')->name('mitra.penjualan');
        Route::put('mitra-update-qty-bubuk/{id}', 'Mitra\MitraController@update_qty_bubuk_pengiriman')->name('mitra.pengiriman');

        // packing
        Route::get('packing-all-with-params', 'Packing\PackingController@index')->name('packing.index');
        Route::get('packing-all', 'Packing\PackingController@get_packing_all')->name('packing.get_all');
        Route::post('packing-update-created', 'Packing\PackingController@create_or_update')->name('packing.create_or_update');
        Route::get('packing-by-id-user/{id}', 'Packing\PackingController@get_details_packing_by_id_user')->name('packing.get_by_id_user');

        // supplier
        Route::get('supplier-all', 'Supplier\SupplierController@get_supplier_all')->name('supplier.get_all');
        Route::post('supplier-update-created', 'Supplier\SupplierController@create_or_update')->name('supplier.create_or_update');
    });
});



//untuk register selain root dan admin
Route::group(['prefix' => 'client'], function () {
    Route::post('register', 'RegisterController@register'); // ini untuk alamat api/client/register
    
    // ini khusus scope root dan admin
    // Route::group(['middleware' => 'auth:api'], function () {
        
    // })->middleware('scope:Root,Admin');
});
