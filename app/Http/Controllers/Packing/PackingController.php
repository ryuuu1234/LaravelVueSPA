<?php

namespace App\Http\Controllers\Packing;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\User;
use App\ItemMitra;
use App\Bubuk;
use App\DetailBubukOrder;
use App\DetailPacking;

class PackingController extends Controller
{
    public function index() {

        $role = 'Packing';
        $data = User::orderBy(request()->sortby, request()->sortbydesc)
        ->Where([['role', $role],['status', 1]])
        ->when(request()->q, function($packing) {
                $packing = $packing->where('name', 'LIKE', '%' . request()->q . '%');
        })->paginate(request()->per_page);
        
        $data->load('details_packing');

        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
        
    }

    public function get_packing_all(){

        $role = 'Packing';
        $data = User::Where([['role', $role],['status', 1]])->get(); 
        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
    }

    public function create_or_update(Request $request){
        $request->validate([
            'user_id'=>'required|integer',
            'order_id'=>'required|integer'
        ]);
        $detail = DetailPacking::updateOrCreate(
            ['order_id'=>$request->order_id], //ini attributnya jika ditemukan
            ['user_id'=>$request->user_id] //ini value yg ingin di masukkan atau update
        );

        if ($detail) {
            return response()->json([
                'status' => 'success'
                ]);
        } else {
            return response()->json([
                'status' => 'failed'
                ]);
        }
    }

    public function get_details_packing_by_id_user($id){

        $data = DetailPacking::where([
            ['user_id', '=', $id],
            ['status', '=', 0]])->get();
        
        $data->load(['order', 'order.detail_order_one', 'order.detail_order_one.product']);
        
            return response()->json([
                'status' => 'success', 
                'data' => $data,
                ]
            );   

    }
}
