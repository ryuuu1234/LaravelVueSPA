<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Order;


use App\DetailOder;
use Illuminate\Support\Str;

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
        })->paginate(request()->per_page); 

        $orders->load('user:id,name');
        $user = User::all();
        return response()->json([
            'status' => 'success', 
            'data' => $orders,
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
    public function purchase(Request $request){
        dd($request->all());
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'total'=>'required|integer',
            'user_id'=>'required|numeric',
            'product_id'=>'required|numeric',
            'harga'=>'required|integer'
        ]);

        $order = new Order();
        $order->reff = Str::random();
        $order->total = $request->total;
        $order->status = 1;
        $order->user_id = $request->user_id;
        if ($order->save()) {
            $order->detail_order()->create([
                        'product_id' => $request->product_id,
                        'qty' => $request->qty,
                        'harga' => $request->harga,
                    ]);
            return response()->json([
                'status'=>'sukses',
                'message'=>$order->reff,
                ], 200);        
        } else {
            return response()->json([
                'status'=>'failed',
                'message'=>'data gagal di simpan',
                ], 500); 
        }

        // DB::beginTransaction();
        // try {
            
        //     //menyimpan data ke table orders
        //     $order = Order::create([
        //         'reff' => $this->generateInvoice(),
        //         'user_id' => $request->user_id,
        //         'total'=>$request->total,
        //         'status'=> 1, // 
        //         // 'total' => array_sum(array_column($result, 'result'))
                
        //         //array_sum untuk menjumlahkan value dari result
        //     ]);
    
     
        //     //looping cart untuk disimpan ke table order_details
        //     // foreach ($result as $key => $row) {
        //     //     $order->order_detail()->create([
        //     //         'product_id' => $key,
        //     //         'qty' => $row['qty'],
        //     //         'price' => $row['price']
        //     //     ]);
        //     // }

        //     // SIMPAN KE DETAIL ORDER
        //     $order->detail_order()->create([
        //         'product_id' => $request->product_id,
        //         'qty' => $request->qty,
        //         'harga' => $request->harga,
        //     ]);

        //     //apabila tidak terjadi error, penyimpanan diverifikasi
        //     DB::commit();
    
     
        //     //me-return status dan message berupa code invoice, dan menghapus cookie
        //     // return response()->json([
        //     //     'status' => 'success',
        //     //     'message' => $order->reff,
        //     // ], 200)->cookie(Cookie::forget('cart'));
        //     return response()->json([
        //         'status' => 'success',
        //         'message' => $order->reff,
        //     ], 200);
        // } catch (\Exception $e) {
        //     //jika ada error, maka akan dirollback sehingga tidak ada data yang tersimpan 
        //     DB::rollback();
        //     //pesan gagal akan di-return
        //     return response()->json([
        //         'status' => 'failed',
        //         'message' => $e->getMessage()
        //     ], 400);
        // }

        // $order = new Order();
        // $order->reff = $this->generateInvoice();
        // $order->total = $request->total;
        // $order->status = 1;
        // $order->user_id = $request->user_id;
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
    public function edit(Order $order)
    {
        //
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
        //
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
}
