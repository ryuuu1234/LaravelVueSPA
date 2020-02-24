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

        // Route::post('edit-category', function () {
        //     return response()->json([
        //         'meesage' => 'Admin Access', 'status_code'=>200
        //     ],200);
        // })->middleware('scope:Root');

        // Route::post('create-category', function () {
        //     return response()->json([
        //         'meesage' => 'Everyone Access', 'status_code'=>200
        //     ],200);

        // })->middleware('scope:Root,Admin');
        
        
        Route::resource('items', 'ItemController'); // seluruh route items masuk middleware
        Route::post('items/delete', 'ItemController@deleteAll');

    });
});

Route::resource('categories', 'CategoryController');

//sementara


// untuk test
Route::get('/test', 'ItemController@test');
