<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetailBubukOrder extends Model
{   
    protected $table = 't_details_bubuk_order';
    protected $guarded = [];
    
    //Model relationships ke Order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function bubuk(){
        return $this->belongsTo(Bubuk::class);
    }
}
