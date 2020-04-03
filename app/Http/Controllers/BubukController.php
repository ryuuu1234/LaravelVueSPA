<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Bubuk;
// use App\unit;
use Illuminate\Support\Facades\DB;

class BubukController extends Controller
{
    public function index(){
        $items = Bubuk::orderBy(request()->sortby, request()->sortbydesc)
            ->when(request()->q, function($items) {
                $items = $items->where('nama', 'LIKE', '%' . request()->q . '%');
        })->paginate(request()->per_page); 

        // $items->load('unit:id,nama');
        // $unit = Unit::all();
        return response()->json([
            'status' => 'success', 
            'data' => $items,
            ]
        );
    }

    public function adding_data(Request $request){

        $request->validate([
            'nama'=> 'required',
        ]);

        DB::beginTransaction();
        try {

            $bubuk = Bubuk::create([
                'nama'=> $request->nama, // 
            ]);
            
        DB::commit();    
            return response()->json([
                'status'=>'sukses',
                'data'=> $bubuk,
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

    public function edit_data($id){
        $bubuk = Bubuk::where('id', $id)->first();
        return response()->json([
            'data' => $bubuk
        ], 200);
    }

    public function update_data(Request $request, $id){

        $request->validate([
            'nama'=>'required',
        ]);

        $update = Bubuk::where('id',$id)->update(['nama' => $request->nama]);

        if ($update) {
            return response()->json(['message'=>'sukses'],200);
        } else {
            
            $message = [
                'message'=>'some errors occured, Please try again',
            ];
            return response()->json($message,500);
        }
    }

    public function delete_data($id){
        $delete = Bubuk::where('id',$id)->delete();
        if ($delete) {
            return response()->json(['message'=>'deleted'],200);
        } else {
            return response()->json(['message'=>'failed'],500);
        }
    }
}
