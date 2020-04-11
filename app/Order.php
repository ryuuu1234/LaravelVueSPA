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

    public function detail_order_one()
    {
        return $this->hasOne(DetailOrder::class);
    }

    public function status_order()
    {
        return $this->hasMany(StatusOrder::class);
    }

    public function details_bubuk()
    {
        return $this->hasMany(DetailBubukOrder::class);
    }

    public function packing()
    {
        return $this->hasOne(DetailPacking::class);
    }

    public function supplier()
    {
        return $this->hasOne(DetailSupplier::class);
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
