<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

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
        $product = Product::where('id', $id)->first();
        return response()->json(['status' => 'success', 'data' => $product], 200);
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

    public function deleteAll(Request $request)
    {   
        Product::whereIn('id', $request->items)->delete();
        
            return response()->json([
                'message' => 'delete category successfully',
                'status_code' => 200,
            ], 200);
        
    }
}
