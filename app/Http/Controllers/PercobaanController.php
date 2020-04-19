<?php

namespace App\Http\Controllers;

use App\Product;
use App\Order;
use App\DetailProduct;
use App\ItemMitra;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PercobaanController extends Controller
{
   public function pertama()
   {
      // $detail = new DetailProduct();
      // $cek = DetailProduct::where([['item_id', 24],['product_id', 9]])->count();
      // if ($cek > 0) {
      //    $txt = $cek;
      // } else {
      //    $txt = "tdk ada";
      // }

   //  echo $txt;
         $user_id = '';
         $tgl_awal = date("2020-04-01");
         $tgl_akhir = date("2020-04-30");
         // $order = 'App\Order'::where('user_id', $user_id)->where('status_id', 4)
         //                      ->whereRaw(
         //                         "(created_at >= ? AND created_at <= ?)", 
         //                         [$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"]
         //                       )->get();
         // if (!$user_id == '') {
         //    $data = 'App\ItemMitra'::where('user_id', $user_id)
         //     ->with(['details_stok' => function($q) use($tgl_awal, $tgl_akhir) {
         //        $q->whereRaw("(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"])
         //         ->where('keterangan', 'PENJUALAN');
         //       }])->get();
 
         // } else {
         //     $data = 'App\ItemMitra'::with(['details_stok' => function($q) use($tgl_awal, $tgl_akhir) {
         //        $q->whereRaw("(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"])
         //         ->where('keterangan', 'PENJUALAN');
         //       }])->get();
         // }
         //     $data->load('bubuk:id,nama');
         $items = 'App\Pengeluaran'::whereDate('created_at', "2020-04-19")->get();
        // $items->load('unit:id,nama');
        // $unit = Unit::all();
        return response()->json([
            'status' => 'success', 
            'data' => $items,
            ]
        );

      //    return response()->json([ 
      //       'data' => $data,
      //       ]
      //   );;
         // echo $tgl_awal;
   }
   public function kedua(Product $product)
   {
    //    $product = Product::all(); //panggil seluruh data
        $product = Product::find($product); // panggil data by Id
        dd($product);
   }
}
