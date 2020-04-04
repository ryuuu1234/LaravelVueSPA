<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemMitra extends Model
{
    protected $table = 't_items_mitra';
    protected $guarded = [];

    public function user()
    {
        return $this->hasMany(User::class);
    }
}
