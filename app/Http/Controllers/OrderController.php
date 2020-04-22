<?php

namespace App\Http\Controllers;

use Auth;
// use session;

use App\User;


use App\Bubuk;
use App\Chart;

use App\Order;
use App\DetailOder;
use App\StatusOrder;

use Illuminate\Support\Str;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Notification;
use App\Notifications\OrderNotification;
use App\Events\OrderStatusChanged;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Session;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::orderBy(request()->sortby, request()->sortbydesc)
            ->when(request()->q, function($orders) {
                $orders = $orders->where('reff', 'LIKE', '%' . request()->q . '%');
                    // ->orWhere('harga', 'LIKE', '%' . request()->q . '%');
        // })->paginate(5); 
        })->paginate(request()->per_page);

        $orders->load('status:id,name');
        // $user = User::all();
        return response()->json([
            'status' => 'success', 
            'data' => $orders,
            ]
        );
    }

    // get orders by user_id
    public function get_by_user_id()
    {           
        $orders = Order::orderBy('created_at', 'DESC')
            ->when(request()->q, function($orders) {
                $orders = $orders->where('user_id', request()->q);
        })->paginate(10);

        $orders->load('status:id,name');
        // $user = User::all(); 
        return response()->json([
            'status' => 'success', 
            'data' => $orders,
            ]
        );
    }

    public function get_all_by_id()
    {   
        
            $orders = Order::orderBy('created_at', 'DESC')
            ->when(request()->q, function($orders) {
                $orders = $orders->where([['user_id', request()->q], ['status_id', '=', 5]]);
            })->get();
            
        $orders->load('status:id,name');
        // $user = User::all();
        //====coba masukan key baru==========
        foreach($orders as $key){
            $key->read=false;
        }
        //==================================
        return response()->json([
            'status' => 'success', 
            'data' => $orders,
            ]
        );
    }

    public function notif() {

        $order = Order::where('status_id', 1)->get();
        return response()->json([
            'status' => 'success', 
            'data' => $order,
            // 'data_unit' => $unit
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'total'=>'required|integer',
            'user_id'=>'required|numeric',
            'product_id'=>'required|numeric',
            'harga'=>'required|integer'
        ]);

        DB::beginTransaction();
        try {

            $order = Order::create([
                'reff' => Str::random(),
                'user_id' => $request->user_id,
                'total'=>$request->total,
                'status_id'=> 1, // 
            ]);
       
            $order->detail_order()->create([
                        'product_id' => $request->product_id,
                        'qty' => $request->qty,
                        'harga' => $request->harga,
                    ]);
            
            // ====================================================INI BARU 
            $bubuk = Bubuk::all();
            foreach ($bubuk as $key => $row) {
                $order->details_bubuk()->create([
                    'bubuk_id'=>$row['id'],
                    'qty'=>0,
                ]);
            };
            
            // $this->sendEvent($request); 
            $user=User::find(Auth::id());
            $admins = User::where('role','Admin')->get();
            // $user = User::find($order->user_id);
            // event(new OrderStatusChanged($order, $user));
            // sudah OK, 
            //======================== notiifkasi diganti
            // Notification::send($user, new OrderNotification($order, $user));
            foreach($admins as $admin){
                Notification::send($admin, new OrderNotification($order, $user));

            }
            //apabila tidak terjadi error, penyimpanan diverifikasi
            DB::commit();    
            return response()->json([
                'status'=>'sukses',
                'data'=>$order,
                'admin'=>$admin
                // 'message'=>$order->reff,
                ], 200);    

        } catch (\Exception $e) {
            //jika ada error, maka akasn dirollback sehingga tidak ada data yang tersimpan 
            DB::rollback();
            //pesan gagal akan di-return
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage(),
                'order'=>$order
            ], 400);
        }
       

        
    }

    public function sendEvent($order, $user){
        //GET USER YANG ROLE-NYA SUPERADMIN DAN FINANCE
        //KENAPA? KARENA HANYA ROLE ITULAH YANG AKAN MENDAPATKAN NOTIFIKASI
        $user = $request->user_id;
        // $users = User::whereIn('role', ['Root', 'Admin'])->get();
        //KIRIM NOTIFIKASINYA MENGGUNAKAN FACADE NOTIFICATION
        event(new OrderStatusChanged($order->status_id, $user)); 
    }

    public function orderFromChart(Request $request)
    {
        $request->validate([
            'total'=>'required|integer',
            'user_id'=>'required|numeric'
        ]);

        DB::beginTransaction();
        try {
            
            //menyimpan data ke table orders
            $order = Order::create([
                'reff' => Str::random(),
                'user_id' => $request->user_id,
                'total'=>$request->total,
                'status_id'=> 1, // 
                // 'total' => array_sum(array_column($result, 'result'))
                
                //array_sum untuk menjumlahkan value dari result
            ]);
            
            // SIMPAN KE DETAIL ORDER
            $charts = Chart::where('user_id', $request->user_id)->get();    
            foreach ($charts as $key => $row) {
                $order->detail_order()->create([
                    'product_id' => $row['product_id'],
                    'qty' => $row['qty'],
                    'harga' => $row['harga']
                ]);
            }

            Chart::where('user_id', $request->user_id)->delete();

            //GET USER YANG ROLE-NYA SUPERADMIN DAN FINANCE
            //KENAPA? KARENA HANYA ROLE ITULAH YANG AKAN MENDAPATKAN NOTIFIKASI
            $user = User::find(Auth::id());
            event(new OrderStatusChanged($order, $user)); 

            //apabila tidak terjadi error, penyimpanan diverifikasi
            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => $order->reff,
            ], 200);

        } catch (\Exception $e) {
            //jika ada error, maka akan dirollback sehingga tidak ada data yang tersimpan 
            DB::rollback();
            //pesan gagal akan di-return
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 400);
        }

        // $order = new Order();
        // $order->reff = Str::random();
        // $order->total = $request->total;
        // $order->status_id = 1;
        // $order->user_id = $request->user_id;

        
        // //looping cart untuk disimpan ke table order_details
        // if ($order->save()) {
        //     $charts = Chart::where('user_id', $request->user_id)->get();
        
        //     foreach ($charts as $key => $row) {
        //         $order->detail_order()->create([
        //             'product_id' => $row['product_id'],
        //             'qty' => $row['qty'],
        //             'harga' => $row['harga']
        //         ]);
        //     }
            
        //     Chart::where('user_id', $request->user_id)->delete();
        
        //     return response()->json([
        //         'message' => 'Input Order Successfully',
        //     ], 200);
        // } else {
        //     return response()->json([
        //         'message' => 'Input Order Successfully',
        //     ], 500);
        // }

    }

    public function generateInvoice()
    {
        //mengambil data dari table orders
        $order = Order::orderBy('created_at', 'DESC');
        //jika sudah terdapat records
        if ($order->count() > 0) {
            //mengambil data pertama yang sdh dishort DESC
            $order = $order->first();
            //explode invoice untuk mendapatkan angkanya
            $explode = explode('-', $order->invoice);
            //angka dari hasil explode di +1
            return 'INV-' . $explode[1] + 1;
        }
        //jika belum terdapat records maka akan me-return INV-1
        return 'INV-1';
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $order = Order::where('id', $id)->with(
            ['detail_order_one.product:id,name', 'details_bubuk', 'details_bubuk.bubuk:id,nama']
        )->first();
        $order->load('user:id,name,role');
        $order->load('status:id,name');
        $order->load('packing:id,user_id,order_id,status,keterangan');
        $order->load('supplier:id,user_id,order_id,status,keterangan');
        // $order->load('detail_order_one.product:id,name');
        
        $status = StatusOrder::all();
        return response()->json([
            'status' => $status, 
            'data' => $order
        ], 200);
    }

    public function sendNotifToAdmin(Request $request, Order $order){
        $request->validate([
            'status_id'=>'required|numeric',
            'order_id'=>'required|numeric',
        ]);
        $user = User::find(Auth::id());
        
        $admins = User::where('role','Admin')->get();
        
        foreach($admins as $admin){
        
            Notification::send($admin, new OrderNotification($request->pesan, $user));

        }

    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        $request->validate([
            'status_id'=>'required|numeric',
        ]);

        $order->status_id = $request->status_id;

        if ($order->save()) {
            // sudah OK,
            $admin = User::find(Auth::id());
            $user = User::find($order->user_id);

            Notification::send($user, new OrderNotification($order, $admin));
            
            //  masih testing
            if($request->status_id==3){
                $packing=$request->user_packing;

                $karyawan=User::find($packing);
            
                Notification::send($karyawan, new OrderNotification($order, $admin));
            }

            
            if($request->status_id==4){
                $supplier=$request->user_supplier;

                $karyawan=User::find($supplier);
            
                Notification::send($karyawan, new OrderNotification($order, $admin));
            
            }
            if($request->status_id==6){
                $user = User::find(Auth::id());
                
                $admins = User::where('role','Admin')->get();
                
                foreach($admins as $admin){
                
                    Notification::send($admin, new OrderNotification($order, $user));

                }
            
            }
            
            // Notification::send($karyawan, new OrderNotification($order, $admin));
            // kirim ke admin yang melakukan update data
            // Notification::send($admin, new OrderNotification($order, $admin));
            return response()->json([$order,$user],200);
        } else {
            
            $message = [
                'message'=>'some errors occured, Please try again',
                'order'=>$order,
                'status_code'=>500
            ];
            return response()->json($message,500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }


    // =======================================================================================LAPORAN PENJUALAN

    public function laporan_penjualan(Request $request)
    {

        $tgl_awal = $request->tgl_awal;
        $tgl_akhir = $request->tgl_akhir;

        $orders = Order::whereRaw(
            "(created_at >= ? AND created_at <= ?)",[$tgl_awal." 00:00:00", $tgl_akhir." 23:59:59"]
            )->where('status_id', 6) // 6:status selesai
            // ->with( ['detail_order_one.product:id,name', 'details_bubuk', 'details_bubuk.bubuk:id,nama'])
            ->get();
            $orders->load('user:id,name,role');
            $orders->load('status:id,name');
            $orders->load(['detail_order_one','detail_order_one.product:id,name']);
        // $user = User::all();
        return response()->json([
            'status' => 'success', 
            'data' => $orders,
            ]
        );
    }
//==================================================================


}
