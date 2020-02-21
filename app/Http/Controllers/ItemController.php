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
        return response()->json(
            ['status' => 'success', 'data' => $items]
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
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
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
}
