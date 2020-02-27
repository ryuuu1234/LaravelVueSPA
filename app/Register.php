<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\Register as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Laravel\Passport\HasApiTokens;

class Register extends Model
{   
    use Notifiable, HasApiTokens;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role','status'
    ];

    // ini menambah row label
    protected $appends = ['status_label'];
    public function getStatusLabelAttribute()
    {
        if ($this->status === 0) {
            return '<span class="badge badge-secondary>Menunggu Persetujuan</span>';
        }
        return '<span class="badge badge-success>Valid</span>';
    }
}
