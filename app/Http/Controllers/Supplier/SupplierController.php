<?php

namespace App\Http\Controllers\Supplier;

use Auth;
use App\User;
use App\Bubuk;

use App\Order;
use App\ItemMitra;
use App\DetailSupplier;
use App\DetailBubukOrder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Notifications\OrderNotification;
use Illuminate\Support\Facades\Notification;

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
            ['status', '<>', 1]])->get();
        
        $data->load(['order', 'order.detail_order_one', 'order.user:id,name,role,alamat', 'order.detail_order_one.product']);
        
            return response()->json([
                'status' => 'success', 
                'data' => $data,
                ]
            );   

    }

    //===================== notifikasi aja ========================
    public function supplier_selesai(Request $request){
        $request->validate([
            'status'=>'required|integer',
            'order_id'=>'required|integer'
        ]);

        $detail = DetailSupplier::updateOrInsert(
            ['order_id'=>$request->order_id], //ini attributnya jika ditemukan
            ['status'=>$request->status, 'keterangan'=>''] //ini value yg ingin di masukkan atau update
        );

        if($detail){
            $orders = Order::where([
                    ['id', '=', $request->order_id]
                ])->get();
            $user=User::find(Auth::id());
            $admins = User::where('role','Admin')->get();
            
            foreach($admins as $admin){
                Notification::send($admin, new OrderNotification($orders[0], $user));
            }

            return response()->json([
                'status' => 'success',
                // 'order'=>$orders[0]
            ]);
        }
    }

    public function supplier_batal(Request $request){
        $request->validate([
            'status'=>'required|integer',
            'order_id'=>'required|integer',
            'keterangan'=>'required|'
        ]);

        $detail = DetailSupplier::updateOrCreate(
            ['order_id'=>$request->order_id], //ini attributnya jika ditemukan
            ['status'=>$request->status, 'keterangan'=>$request->keterangan] //ini value yg ingin di masukkan atau update
        );

        if($detail){
            $orders = Order::where([
                    ['id', '=', $request->order_id]
                ])->get();
            $user=User::find(Auth::id());
            $admins = User::where('role','Admin')->get();
            
            foreach($admins as $admin){
                Notification::send($admin, new OrderNotification($orders[0], $user));
            }

            return response()->json([
                'status' => 'success',
            
            ]);
        }
    }
}
