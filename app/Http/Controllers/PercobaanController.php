<?php

namespace App\Http\Controllers;

use App\Product;
use App\Order;
use App\DetailProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PercobaanController extends Controller
{
   public function pertama()
   {
      $detail = new DetailProduct();
      $cek = DetailProduct::where([['item_id', 24],['product_id', 9]])->count();
      if ($cek > 0) {
         $txt = $cek;
      } else {
         $txt = "tdk ada";
      }

    echo $txt;
   }
   public function kedua(Product $product)
   {
    //    $product = Product::all(); //panggil seluruh data
        $product = Product::find($product); // panggil data by Id
        dd($product);
   }
}
