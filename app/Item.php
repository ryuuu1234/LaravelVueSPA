<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $guarded = [];

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

 
