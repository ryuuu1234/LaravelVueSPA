<?php

namespace App\Http\Controllers\Packing;

use Auth;
use App\User;
use App\Bubuk;

use App\Order;
use App\ItemMitra;
use App\DetailPacking;

use App\DetailBubukOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Notifications\OrderNotification;
use Illuminate\Support\Facades\Notification;

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
            ['user_id'=>$request->user_id, 'status' => 0 , 'keterangan' => ''] //ini value yg ingin di masukkan atau update
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
            ['status', '<>', 1]])->get();
        
        $data->load(['order', 'order.detail_order_one.product.detail_items.item.unit', 'order.details_bubuk.bubuk']);
        
            return response()->json([
                'status' => 'success', 
                'data' => $data,
                ]
            );   

    }
    // KHUSUS LAPORAN
    public function laporan_packing(Request $request){

        $user_id = $request->user_id;
        $tgl_awal = $request->tgl_awal;
        $tgl_akhir = $request->tgl_akhir;
        $data = DetailPacking::where([['user_id','=',$user_id],['status','=',1]])->whereRaw("(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"])->get();
        $data->load(['order']);
        return response()->json(['status'=>'sukses', 'data'=>$data], 200);

    }

    //===================== notifikasi aja ========================
    public function packing_selesai(Request $request){
        $request->validate([
            'status'=>'required|integer',
            'order_id'=>'required|integer'
        ]);

        $detail = DetailPacking::updateOrCreate(
            ['order_id'=>$request->order_id], //ini attributnya jika ditemukan
            ['status'=>$request->status, 'keterangan'=>''] //ini value yg ingin di masukkan atau update
        );

        if($detail){
            // $extra = DetailPacking::where([['order_id','=',$request->order_id]])->get();
            $orders = Order::where([
                    ['id', '=', $request->order_id]
                ])->get();
            $user=User::find(Auth::id());
            $admins = User::where('role','Admin')->get();
            
            // $orders[0]->details = $extra[0];
            
            foreach($admins as $admin){
                Notification::send($admin, new OrderNotification($orders[0], $user));
            }

            return response()->json([
                'status' => 'success',
                // 'order'=>$orders[0]
            ]);
        }
    }

    public function packing_batal(Request $request){
        $request->validate([
            'status'=>'required|integer',
            'order_id'=>'required|integer',
            'keterangan'=>'required|'
        ]);

        $detail = DetailPacking::updateOrCreate(
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
