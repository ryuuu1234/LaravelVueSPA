<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class PercobaanController extends Controller
{
   public function pertama()
   {
    //    $product = Product::all(); //panggil seluruh data
        $product = Product::latest()->first(); // panggil data terakhir
       dd($product);
   }
   public function kedua(Product $product)
   {
    //    $product = Product::all(); //panggil seluruh data
        $product = Product::find($product); // panggil data by Id
        dd($product);
   }
}
