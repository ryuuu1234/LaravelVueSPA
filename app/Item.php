<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{   
    use SoftDeletes;
    
    protected $guarded = [];
    // protected $fillable = ['nama', 'unit_id', 'harga_beli', 'harga_jual', 'stok_awal'];

    /**
     * RELASI. ke tabel units
     */
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    protected $appends = ['status_label'];

    // ini menambah row label
    public function getStatusLabelAttribute()
    {
        if ($this->id_satuan >= 0) {
            return '<span class="badge badge-secondary>Draft</span>';
        }
        return '<span class="badge badge-success>Publish</span>';
    }
}

 
