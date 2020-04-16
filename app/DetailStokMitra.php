<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetailStokMitra extends Model
{
    protected $table = 't_stok_mitra';
    protected $guarded=[];

    public function item_mitra()
    {
        return $this->belongsTo('App\ItemMitra');
    }
}
