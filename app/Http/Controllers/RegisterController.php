<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Register;

class RegisterController extends Controller
{
    public function list() {

        $items = Register::orderBy(request()->sortby, request()->sortbydesc)
            //JIKA Q ATAU PARAMETER PENCARIAN INI TIDAK KOSONG
            ->when(request()->q, function($items) {
                //MAKA FUNGSI FILTER AKAN DIJALANKAN
                $items = $items->where('name', 'LIKE', '%' . request()->q . '%');
                    // ->orWhere('harga_beli', 'LIKE', '%' . request()->q . '%');
                    // ->orWhere('category', 'LIKE', '%' . request()->q . '%');
        })->paginate(request()->per_page); //KEMUDIAN LOAD PAGINATIONNYA BERDASARKAN LOAD PER_PAGE YANG DIINGINKAN OLEH USER

        // $items->load('unit:id,nama');
        // $unit = Unit::all();
        return response()->json([
            'status' => 'success', 
            'data' => $items,
            // 'data_unit' => $unit
            ]
        );
    }

    public function update(Request $request, Register $register) {
        
        dd($request->all());
        // $register->status = $request->status;

        // if ($register->save()) {
        //     return response()->json($register,200);
        // } else {
            
        //     $message = [
        //         'message'=>'some errors occured, Please try again',
        //         'status_code'=>500
        //     ];
        //     return response()->json($message,500);
        // }
    }
}
