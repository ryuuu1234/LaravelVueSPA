<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetailProduct extends Model
{
    protected $guarded = [];
    protected $table = 'detail_products';

    public function product(){
        return $this->belongsTo(Product::class);
    }

    public function item(){
        return $this->belongsTo(Item::class);
    }
}
