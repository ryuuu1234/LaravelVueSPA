<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pengeluaran extends Model
{
    protected $table = 't_pengeluaran_kas';
    protected $guarded = [];

    public function beban(){
        return $this->belongsTo('App\Beban');
    }
}
