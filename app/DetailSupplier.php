<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetailSupplier extends Model
{   
    protected $table = 't_supplier_order';
    protected $guarded = [];
    
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
