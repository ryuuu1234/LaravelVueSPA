<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bubuk extends Model
{
    use SoftDeletes;
    
    protected $table = 't_bubuks';
    protected $guarded = [];
}
