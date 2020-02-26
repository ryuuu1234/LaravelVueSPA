<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Item;
use App\unit;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //ORDER BY NYA BERDASARKAN PARAMETER YANG DIKIRIM DARI VUEJS
        //SEHINGGA PENGURUTAN DATANYA SESUAI DENGAN KOLOM YG DIINGINKAN OLEH USER
        $items = Item::orderBy(request()->sortby, request()->sortbydesc)
            //JIKA Q ATAU PARAMETER PENCARIAN INI TIDAK KOSONG
            ->when(request()->q, function($items) {
                //MAKA FUNGSI FILTER AKAN DIJALANKAN
                $items = $items->where('nama', 'LIKE', '%' . request()->q . '%')
                    ->orWhere('harga_beli', 'LIKE', '%' . request()->q . '%');
                    // ->orWhere('category', 'LIKE', '%' . request()->q . '%');
        })->paginate(request()->per_page); //KEMUDIAN LOAD PAGINATIONNYA BERDASARKAN LOAD PER_PAGE YANG DIINGINKAN OLEH USER

        $items->load('unit:id,nama');
        $unit = Unit::all();
        return response()->json([
            'status' => 'success', 
            'data' => $items,
            'data_unit' => $unit
            ]
        );
    }

    public function test()
    {
        $items = Item::with(['unit'])->orderBy('created_at', 'DESC')->get();
        // $items->load('unit');
        return response()->json(
            ['status' => 'success', 'data' => $items]
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
        $request->validate([
            'nama'=>'required|min:3',
            'unit_id'=>'required|numeric',
            'harga_beli'=>'required|numeric',
            'stok_awal'=>'required|numeric',
        ]);

        $item = new Item();
        $item->nama = $request->nama;
        $item->unit_id = $request->unit_id;
        $item->harga_beli = $request->harga_beli;
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {   
        // dd($request->all());
        $request->validate([
            'nama'=>'required',
            'harga_beli'=>'required|numeric',
            'unit_id'=>'required|numeric',
            'stok_awal'=>'required'
        ]);

        $item->nama = $request->nama;
        $item->harga_beli = $request->harga_beli;
        $item->unit_id = $request->unit_id;
        $item->stok_awal = $request->stok_awal;

        if ($item->save()) {
            return response()->json($item,200);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {   
        // dd($item->all());
        if ($item->delete()) {
            // Storage::delete($item->image);
            return response()->json([
                'message' => 'delete category successfully',
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
        Item::whereIn('id', $request->items)->delete();
        
            return response()->json([
                'message' => 'delete category successfully',
                'status_code' => 200,
            ], 200);
        
    }
}
