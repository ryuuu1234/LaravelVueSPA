<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];

    public function detail_items()
    {
        return $this->hasMany('App\DetailProduct');
    }

    public function item()
    {
        return $this->belongsTo('App\Item');
    }

    // this is a recommended way to declare event handlers
    public static function boot() {
        parent::boot();
        self::deleting(function($product) { // before delete() method call this
             $product->detail_items()->each(function($detail_item) {
                $detail_item->delete(); // <-- direct deletion
             });
             // do the rest of the cleanup...
        });
    }
}


