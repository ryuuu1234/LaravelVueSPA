<?php

namespace App\Http\Controllers\Mitra;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

// use App\Mitra;
use App\User;
use App\ItemMitra;
use App\Bubuk;
use App\DetailStokMitra;
use App\DetailBubukOrder;

class MitraController extends Controller
{
    public function index() {

        $role = 'Mitra';
        $data = User::orderBy(request()->sortby, request()->sortbydesc)
        ->Where([['role', $role],['status', 1]])
        ->when(request()->q, function($mitra) {
                $mitra = $mitra->where('name', 'LIKE', '%' . request()->q . '%');
        })->paginate(request()->per_page); 

        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
        
    }

    public function select_all(){

        $role = 'Mitra';
        $data = User::Where([['role', $role],['status', 1]])->get(); 
        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
    }

    public function det_item_mitra_by_id_user($id){

        $bubuk = Bubuk::all(); 
        // update data bubuk jika ada perubahan   
            foreach ($bubuk as $key => $row) {
                ItemMitra::firstOrCreate([
                    'bubuk_id' => $row['id'], 
                    'user_id' => $id
                ]);
            }

            $sumMasuk = DetailStokMitra::selectRaw('sum(masuk)')
                ->whereColumn('item_mitra_id', 't_items_mitra.id')
                ->getQuery();
            $sumKeluar = DetailStokMitra::selectRaw('sum(keluar)')
                ->whereColumn('item_mitra_id', 't_items_mitra.id')
                ->getQuery();
            // $sumBerjalan = $sumMasuk - $sumKeluar;    

            $data = ItemMitra::select('t_items_mitra.*')->where('user_id', $id)
                ->selectSub($sumMasuk, 'sum_masuk')->selectSub($sumKeluar, 'sum_keluar')
                ->get();

        // $data = ItemMitra::where('user_id', $id)->with('details_stok')->get();
        $data->load('bubuk:id,nama');
        // $data->load('stok_berjalan:');
        // $data->load('details_stok:id,reff'); // ini baru
        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
    }

    public function get_all_bubuk(){
        $data = Bubuk::all();
        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
    }

    public function update_stok_awal(Request $request, $id){ //ini berdasarkan id item mitra

        $request->validate([
            'stok_awal'=>'required|integer'
        ]);

        DB::beginTransaction();
        try {
            $save = ItemMitra::where('id',$id)->update(['stok_awal' => $request->stok_awal]);
            
        DB::commit();    
            return response()->json(['status'=>'sukses'], 200); 

        } catch (\Exception $e) {  
            
        DB::rollback();
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 400);
        }  

    }

    public function input_penjualan(Request $request){

        $input=$request->all();

        DB::beginTransaction();
        try {
            $stok = new DetailStokMitra();
            foreach($input as $key=> $row ){
                $stok->create([
                    'reff' => Str::random(),// ini nanti di ganti str_random
                    'keluar'=> $row['keluar'],
                    'item_mitra_id'=> $row['item_mitra_id'],
                    'keterangan'=> 'PENJUALAN',
                ]);
            }
        DB::commit();    
            return response()->json(['status'=>'sukses'], 200); 

        } catch (\Exception $e) {  
            
        DB::rollback();
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 400);
        }
    }
    public function input_pembelian(Request $request){

        $input=$request->all();

        DB::beginTransaction();
        try {
            $stok = new DetailStokMitra();
            foreach($input as $key=> $row ){
                $stok->create([
                    'reff' => Str::random(),// ini nanti di ganti str_random
                    'masuk'=> $row['masuk'],
                    'item_mitra_id'=> $row['item_mitra_id'],
                    'keterangan'=> 'PEMBELIAN',
                ]);
            }
        DB::commit();    
            return response()->json(['status'=>'sukses'], 200); 

        } catch (\Exception $e) {  
            
        DB::rollback();
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public function update_qty_bubuk_pengiriman(Request $request, $id){
        $request->validate([
            'qty'=>'required|integer',
        ]);
        
        $update = DetailBubukOrder::where('id', $id)->update(['qty' => $request->qty ]);
        if ($update) {
            return response()->json(['status'=>'sukses'], 200); 
        }else{
            return response()->json(['status'=>'failed'], 500); 
        }

    }

    // KHUSUS LAPORAN
    public function penjualan_mitra(Request $request){

        $user_id = $request->user_id;
        $tgl_awal = $request->tgl_awal;
        $tgl_akhir = $request->tgl_akhir;

        $sumKeluar = DetailStokMitra::selectRaw('sum(keluar)')
                ->whereColumn('item_mitra_id', 't_items_mitra.id')
                ->whereRaw("(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"])
                ->getQuery();

        $data = ItemMitra::select('t_items_mitra.*')->where('user_id', $user_id)
                ->with(['details_stok' => function($q) use($tgl_awal, $tgl_akhir) {
               $q->whereRaw("(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"])
                ->where('keterangan', 'PENJUALAN');
         }])->selectSub($sumKeluar, 'sum_keluar')->get();
        $data->load('bubuk:id,nama');
        return response()->json(['status'=>'sukses', 'data'=>$data], 200);

    }
}
