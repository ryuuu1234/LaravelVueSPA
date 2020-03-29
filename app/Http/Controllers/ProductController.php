<?php

namespace App\Http\Controllers;

use App\Product;
use App\DetailProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $items = Product::orderBy(request()->sortby, request()->sortbydesc)
        //     ->when(request()->q, function($items) {
        //         $items = $items->where('name', 'LIKE', '%' . request()->q . '%');
        //             // ->orWhere('harga', 'LIKE', '%' . request()->q . '%');
        // })->paginate(request()->per_page); //KEMUDIAN LOAD PAGINATIONNYA BERDASARKAN LOAD PER_PAGE YANG DIINGINKAN OLEH USER

        // // $items->load('unit:id,nama');
        // // $unit = Unit::all();
        // return response()->json([
        //     'status' => 'success', 
        //     'data' => $items,
        //     ]
        // );

        // ini yg baru
        $products = Product::orderBy('created_at', 'DESC')
        ->when(request()->q, function($products) {
            $products = $products->where('name', 'LIKE', '%' . request()->q . '%');
            
        })->paginate(5);
        return response()->json([
            'status' => 'success', 
            'data' => $products,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        // dd($request->all());
        $request->validate([
            'name'=>'required|min:3',
            'harga'=>'required|numeric',
            'stok_awal'=>'required|numeric',
            'description'=>'required'
        ]);

        $item = new Product();
        $item->name = $request->name;
        $item->description = $request->description;
        $item->harga = $request->harga;
        $item->stok_awal = $request->stok_awal;

        if ($item->save()) {
            return response()->json($item, 200);
        }else {
            return response()->json($item, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $product = Product::find($product); // panggil data by Id
        dd($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::where('id', $id)->with(['detail_items', 'detail_items.item:id,nama'])->get();
        return response()->json(['status' => 'success', 'data' => $product], 200);
    }

    public function add_item(Request $request, $id)
    {   
        // dd($request->all());
        $product = Product::where('id', $id)->get();
        

        $request->validate([
            'qty'=>'required|numeric',
            'harga'=>'required|numeric',
            'item_id'=>'required',
        ]);

        DB::beginTransaction();
        try {
            
            $detail = DetailProduct::firstOrNew(['item_id' => $request->item_id, 'product_id' => $id]);
            // $cek = DetailProduct::where([['item_id', 24],['product_id', 9]])->count();
            // if (count($detail->where([['item_id', $request->item_id],['product_id', $id]])) > 0) {
            //     # code...
            // }
            // $user = User::firstOrNew(['name' => 'Laravel Recipes']);
            // $user->age = Input::get('age');
            // $user->save();
                // $detail->createOrUpdate(['item_id' => $request->item_id, 'product_id' => $id],
                // [
                //     'qty' => $request->qty,
                //     'harga' => $request->harga,
                //     'item_id' => $request->item_id,
                //     'product_id'=>$id
                // ]);
            $detail->qty = $request->qty;
            $detail->harga = $request->harga;
            $detail->item_id = $request->item_id;
            $detail->product_id = $id;
            $detail->save();

            DB::commit();    
            return response()->json([
                'status'=>'sukses'
                ], 200); 

        } catch (\Exception $e) {
            //jika ada error, maka akasn dirollback sehingga tidak ada data yang tersimpan 
            DB::rollback();
            //pesan gagal akan di-return
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {   
        // dd($request->all());
        $request->validate([
            'name'=>'required',
            'harga'=>'required|numeric',
            'description'=>'required',
            'stok_awal'=>'required'
        ]);

        $product->name = $request->name;
        $product->harga = $request->harga;
        $product->description = $request->description;
        $product->stok_awal = $request->stok_awal;

        if ($product->save()) {
            return response()->json($product,200);
        } else {
            
            $message = [
                'message'=>'some errors occured, Please try again',
                'status_code'=>500
            ];
            return response()->json($message,500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {   
        // $this->detail_items();

        if ($product->delete()) {
            // Storage::delete($item->image);
            return response()->json([
                'message' => 'delete Product successfully',
                'status_code' => 200,
            ], 200);
        } else {
            return response()->json([
                'message' => 'some error occured, please try again',
                'status_code' => 500,
            ], 500);
        }
    }

    public function remove_item($id)
    {   
        $detail = DetailProduct::where('id', $id)->first();
        if ($detail->delete()) {
            // Storage::delete($item->image);
            return response()->json([
                'message' => 'delete detail Product successfully',
                'status_code' => 200,
            ], 200);
        } else {
            return response()->json([
                'message' => 'some error occured, please try again',
                'status_code' => 500,
            ], 500);
        }
    }

    public function deleteAll(Request $request)
    {   
        Product::whereIn('id', $request->items)->delete();
        
            return response()->json([
                'message' => 'delete category successfully',
                'status_code' => 200,
            ], 200);
        
    }
}
