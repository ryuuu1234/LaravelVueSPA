<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pengeluaran;
use Illuminate\Support\Facades\DB;

class KasController extends Controller
{   
    public function pengeluaran_kas_with_params(){
        
        $items = Pengeluaran::whereDate('created_at', request()->today)->get();
        $items->load('beban:id,nama');
        return response()->json([
            'status' => 'success', 
            'data' => $items,
            ]
        );
    }
    public function pengeluaran_kas_input(Request $request){
        $request->validate([
            'beban_id'=>'required|integer',
            'jumlah'=>'required|integer',
            'keterangan'=>'required',
        ]);

        $data = Pengeluaran::create([
            'beban_id' => $request->beban_id,
            'jumlah' => $request->jumlah,
            'keterangan' => $request->keterangan,
            'user_id' => auth()->user()->id,
        ]);
        if ($data) {
            return response()->json($data, 200);
        } else {
            return response()->json($data, 500);
        } 
    }

    public function edit($id) {
        $data = Pengeluaran::where('id', $id)->get();
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){

        $request->validate([
            'beban_id'=>'required|integer',
            'jumlah'=>'required|integer',
            'keterangan'=>'required',
        ]);

        $update = Pengeluaran::where('id',$id)->update([
            'beban_id' => $request->beban_id,
            'jumlah' => $request->jumlah,
            'keterangan' => $request->keterangan,
            'user_id' => auth()->user()->id,
            ]);

        if ($update) {
            return response()->json(['message'=>'sukses'],200);
        } else {
            
            $message = [
                'message'=>'some errors occured, Please try again',
            ];
            return response()->json($message,500);
        }
    }

    public function destroy($id) {
        $delete = Pengeluaran::where('id', $id)->delete();
        if ($delete) {
            return response()->json(['message'=>'sukses'],200);
        } else {
            return response()->json(['message'=>'failed'],500);
        }
        
    }

    
}
