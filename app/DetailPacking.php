<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetailPacking extends Model
{
    protected $table = 't_pack_order';
    protected $guarded = [];
    
    //Model relationships ke Order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
