<?php

namespace App\Http\Controllers\Mitra;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use App\Mitra;
use App\User;
use App\ItemMitra;
use App\Bubuk;

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

    public function det_item_mitra_by_id_user($id){

        $bubuk = Bubuk::all(); 
        // update data bubuk jika ada perubahan   
            foreach ($bubuk as $key => $row) {
                ItemMitra::firstOrCreate([
                    'bubuk_id' => $row['id'], 
                    'user_id' => $id
                ]);
            }

        $data = ItemMitra::where('user_id', $id)->get();

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
}
