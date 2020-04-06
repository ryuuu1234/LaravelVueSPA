<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemMitra extends Model
{
    protected $table = 't_items_mitra';
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bubuk()
    {
        return $this->belongsTo(Bubuk::class);
    }

    public function details_stok()
    {
        return $this->hasMany('App\DetailStokMitra');
    }

    // public function stok_berjalan()
    // {
    //     return $this->hasMany(DetailStokMitra::class)->selectRaw('sum(masuk) as sum_masuk, item_mitra_id')->groupBy('item_mitra_id');
    // }

    // public function stok_berjalan(){

    //     $total=0;
    //     foreach ($this->details_stok as $stok) {
    //         $total += $stok->masuk - $stok->keluar;
    //     }
    //     return $total;
    // }
}
