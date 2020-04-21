<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $user = request()->user(); //AMBIL USER YANG SEDANG LOGIN
        //KEMUDIAN YANG DI READ ADALAH HANYA NOTIFIKASI YANG STATUSNYA BELUM DIREAD
        //SECARA LANGSUNG KITA DAPAT MENGAMBIL DATA NYA MELALUI USER DENGAN MENGAKSES PROPERTY unreadNotifications.
        return response()->json(['status' => 'success', 'data' => $user->unreadNotifications]);
    }

    public function store(Request $request)
    {
        $user = $request->user(); //AMBIL USER YANG SEDANG LOGIN
        //EDIT RECORD NOTIFIKASI BERDASARKAN ID YANG DITERIMA
        //NOTIFIKASI YANG SUDAH/BELUM DIREAD DITANDAI DENGAN read_at YANG MASIH NULL
        $user->unreadNotifications()->where('id', $request->id)->update(['read_at' => now()]);
        $user->notifications()->where('id', $request->id)->delete();
        return response()->json(['status' => 'success', 'data'=>$user->unreadNotifications]);
        // return response()->json($request,200);
    }
    public function readAll(Request $request){
        $user = $request->user(); //AMBIL USER YANG SEDANG LOGIN
        //tandai semua sebagai telah dibaca
        $user->unreadNotifications()->update(['read_at' => now()]);
        // hapus semua data
        $user->notifications()->delete();
        return response()->json(['status' => 'success', 'user'=>$user, 'data'=>$user->unreadNotifications]);
    }
}
