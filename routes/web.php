<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('coba', [
//     'uses' => 'PercobaanController@pertama',
//     'name' => 'coba.pertama'
// ]);
// Route::get('coba/product/{product}', [
//     'uses' => 'PercobaanController@kedua',
//     'name' => 'coba.kedua'
// ]);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
