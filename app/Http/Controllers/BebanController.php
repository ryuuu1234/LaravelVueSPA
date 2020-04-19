<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Beban;
use App\Pengeluaran;

class BebanController extends Controller
{   
    public function index() {
        $data = Beban::all();
        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
    }

    public function beban_with_params() {
        
        $items = Beban::orderBy(request()->sortby, request()->sortbydesc)
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

    public function store(Request $request) {
        $request->validate([
            'nama'=> 'required|min:3'
        ]);

        $data = Beban::create([
            'nama' => $request->nama,
        ]);
        if ($data) {
            return response()->json($data, 200);
        } else {
            return response()->json($data, 500);
        } 

    }

    public function edit($id) {
        $data = Beban::where('id', $id)->get();
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){

        $request->validate([
            'nama'=>'required',
        ]);

        $update = Beban::where('id',$id)->update(['nama' => $request->nama]);

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
        $delete = Beban::where('id', $id)->delete();
        if ($delete) {
            return response()->json(['message'=>'sukses'],200);
        } else {
            return response()->json(['message'=>'failed'],500);
        }
        
    }

    // KHUSUS LAPORAN ==============================================================================================
    public function laporan_beban(Request $request){

        $tgl_awal = $request->tgl_awal;
        $tgl_akhir = $request->tgl_akhir;

        $sumJumlah = Pengeluaran::selectRaw('sum(jumlah)')
                ->whereColumn('beban_id', 't_beban_biaya.id')
                ->whereRaw("(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"])
                ->getQuery();

        $data = Beban::select('t_beban_biaya.*')
                ->with(['pengeluaran' => function($q) use($tgl_awal, $tgl_akhir) {
               $q->whereRaw("(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"]);
         }])->selectSub($sumJumlah, 'subtotal')->get();
        return response()->json(['status'=>'sukses', 'data'=>$data], 200);

    }

}
