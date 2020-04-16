<?php

namespace App\Http\Controllers\Supplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use App\ItemMitra;
use App\Bubuk;
use App\DetailBubukOrder;
use App\DetailSupplier;

class SupplierController extends Controller
{
    public function index() {

        $role = 'Supplier';
        $data = User::orderBy(request()->sortby, request()->sortbydesc)
        ->Where([['role', $role],['status', 1]])
        ->when(request()->q, function($supplier) {
                $supplier = $supplier->where('name', 'LIKE', '%' . request()->q . '%');
        })->paginate(request()->per_page); 

        $data->load('details_supplier');

        return response()->json([
            'status' => 'success', 
            'data' => $data,
            ]
        );
        
    }

    public function get_supplier_all(){

        $role = 'Supplier';
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
        $detail = DetailSupplier::updateOrCreate(
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

    public function get_details_supplier_by_id_user($id){

        $data = DetailSupplier::where([
            ['user_id', '=', $id],
            ['status', '=', 0]])->get();
        
        $data->load(['order', 'order.detail_order_one', 'order.user:id,name,role', 'order.detail_order_one.product']);
        
            return response()->json([
                'status' => 'success', 
                'data' => $data,
                ]
            );   

    }
}
