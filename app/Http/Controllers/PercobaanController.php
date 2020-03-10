<?php

namespace App\Http\Controllers;

use App\Product;
use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PercobaanController extends Controller
{
   public function pertama()
   {
    //    $product = Product::all(); //panggil seluruh data
    //     $product = Product::latest()->first(); // panggil data terakhir
    //    dd($product);
        $order = Order::latest()->first();
        // if ($order->count() > 0) {
        //     $order = $order->first();
            $random = Str::random();
            // $hasil = 'INV-' . $explode[1] + 1;
        // }
        // return $hasil = 'INV-1';

        dd($random);
   }
   public function kedua(Product $product)
   {
    //    $product = Product::all(); //panggil seluruh data
        $product = Product::find($product); // panggil data by Id
        dd($product);
   }
}
