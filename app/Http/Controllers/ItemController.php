<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Item;
use App\unit;
use Illuminate\Support\Facades\DB;

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

    public function get_all_data()
    {
        $items = Item::all();
        return response()->json([
            'data' => $items,
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

    
    public function store(Request $request)
    {
        $request->validate([
            'nama'=>'required|min:3',
            'unit_id'=>'required|numeric',
            'harga_beli'=>'required|numeric',
            'harga_jual'=>'required|numeric',
            'stok_awal'=>'required|numeric',
        ]);

        $item = new Item();
        $item->nama = $request->nama;
        $item->unit_id = $request->unit_id;
        $item->harga_beli = $request->harga_beli;
        $item->harga_jual = $request->harga_jual;
        $item->stok_awal = $request->stok_awal;

        if ($item->save()) {
            return response()->json($item, 200);
        }else {
            return response()->json($item, 500);
        }
    }

    
    public function edit($id)
    {
        $item = Item::where('id', $id)->get();
        return response()->json($item, 200);
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
            'harga_jual'=>'required|numeric',
            'unit_id'=>'required|numeric',
            'stok_awal'=>'required'
        ]);

        $item->nama = $request->nama;
        $item->harga_beli = $request->harga_beli;
        $item->harga_jual = $request->harga_jual;
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

    public function update_harga_jual(Request $request, $id)
    {   
        $request->validate([
            'harga_jual'=>'required|numeric'
        ]);
        DB::beginTransaction();
        try {
            $save = Item::where('id',$id)->update(['harga_jual' => $request->harga_jual]);
            
        DB::commit();    
            return response()->json([
                'status'=>'sukses'
                ], 200); 

        } catch (\Exception $e) {  
            
        DB::rollback();
            //pesan gagal akan di-return
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 400);
        }  
        
    }
}
