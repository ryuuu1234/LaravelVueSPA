<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Beban extends Model
{
    protected $table = 't_beban_biaya';
    protected $guarded = [];

    public function pengeluaran(){
        return $this->hasMany('App\Pengeluaran');
    }
}
