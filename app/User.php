<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
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

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $attributes = [
        'image' => 'users_images/nouser.png',
    ];

    public function bubuk_user()
    {
        return $this->hasMany('App\ItemMitra');
    }

    public function details_packing()
    {
        return $this->hasMany('App\DetailPacking')->where('status','=', 0);
    }

    public function details_supplier()
    {
        return $this->hasMany('App\DetailSupplier')->where('status','=', 0);
    }
}
