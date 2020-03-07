<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded = [];
    
    //Model relationships ke Order_detail menggunakan hasMany
    public function detail_order()
    {
        return $this->hasMany(DetailOrder::class);
    }
}
