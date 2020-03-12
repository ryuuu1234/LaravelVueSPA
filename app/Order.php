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

    public function status_order()
    {
        return $this->hasMany(StatusOrder::class);
    }

    public function status()
    {
        return $this->belongsTo(StatusOrder::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
