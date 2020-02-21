<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{   
    /* 
    Relasi many to one ke table items
    */
    public function item()
    {
        return $this->hasMany(Item::class);
    }
}
