<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bubuk extends Model
{
    use SoftDeletes;

    protected $table = 't_bubuks';
    protected $guarded = [];

    public function bubuk_mitra()
    {
        return $this->hasMany('App\ItemMitra');
    }

    public function bubuk_order()
    {
        return $this->hasMany('App\DetailBubukOrder');
    }


}
