<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use App\Register;
use App\User;

class RegisterController extends Controller
{
    public function list() {

        $items = Register::orderBy(request()->sortby, request()->sortbydesc)
            //JIKA Q ATAU PARAMETER PENCARIAN INI TIDAK KOSONG
            ->when(request()->q, function($items) {
                //MAKA FUNGSI FILTER AKAN DIJALANKAN
                $items = $items->where('name', 'LIKE', '%' . request()->q . '%');
                    // ->orWhere('harga_beli', 'LIKE', '%' . request()->q . '%');
                    // ->orWhere('category', 'LIKE', '%' . request()->q . '%');
        })->paginate(request()->per_page); //KEMUDIAN LOAD PAGINATIONNYA BERDASARKAN LOAD PER_PAGE YANG DIINGINKAN OLEH USER

        // $items->load('unit:id,nama');
        // $unit = Unit::all();
        return response()->json([
            'status' => 'success', 
            'data' => $items,
            // 'data_unit' => $unit
            ]
        );
    }

    public function update_status(Request $request, Register $register) {

        $register->status = 1;

        if ($register->save()) {
            // simpan ke user
            $cek = User::where('email', $register->email)->first();
            if ($cek != Null) {
                $message = [
                    'message'=>'Data user ini sudah aktif',
                    'status_code'=>500
                ];
                return response()->json($message,500);
            } else {
                $user = new User();
                $user->name = $register->name;
                $user->email = $register->email;
                $user->password = $register->password;
                $user->role = $register->role;
                $user->status = $register->status;
                $user->save();
    
                return response()->json($register,200);
            }

        } else {
            
            $message = [
                'message'=>'some errors occured, Please try again',
                'status_code'=>500
            ];
            return response()->json($message,500);
        }
    }

    // INI UNTUK REGISTER CLIENT
    public function register(Request $request) {

        $request->validate([
            'name'      =>  'required|string|max:100',
            'email'     =>  'required|string|email|unique:users',
            'password'  =>  'required|string|confirmed',
            'role'      =>  'required|string|'
        ]);

        $register = new Register();

        $register->name     = $request->name;
        $register->email    = $request->email;
        $register->password = bcrypt($request->password);
        $register->role     = $request->role;
        $register->status   = 0;

        if ($register->save()) {
            return response()->json([
                'message'       => 'User Created Successfully',
                'status_code'   => 201
            ],201);
        }else {
            return response()->json([
                'message'       => 'Some error occured, Please Try again',
                'status_code'   => 500
            ],500);
        }
    }
}
