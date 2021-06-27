<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Notifications\Notifiable;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, CascadesDeletes;

    // Cascade On Delete
    protected $cascadeDeletes = ['comments', 'orders', 'carts', 'ratings'];
    
    const USER = 0;
    const ADMIN = 1;

    public static function boot() 
    {
        parent::boot();
        
        static::creating(function ($model) {
            if($model->role == User::ADMIN) {
                $model->email_verified_at = $model->freshTimestamp();
            }
        });
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'password',
        'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    // Set password
    public function setPasswordAttribute($value) {
        $this->attributes['password'] = Hash::make($value);
    }

    /**
     * Get all of the user's comments.
     */
    public function comments()
    {   
        return $this->morphMany('App\Models\Comment', 'commentable');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders()
    {   
        return $this->hasMany('App\Models\Order');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function carts()
    {   
        return $this->hasMany('App\Models\Cart');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ratings()
    {   
        return $this->hasMany('App\Models\Rating');
    }

    /*
     * Get the user's media.
     */
    public function media() {
        return $this->morphOne('App\Models\Media', 'media');
    }
}
