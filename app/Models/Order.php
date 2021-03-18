<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

/**
 * @property int $id
 * @property int $user_id
 * @property string $order_factor
 * @property string $totalـprice
 * @property string $transportation
 * @property string $payment
 * @property int $status
 * @property User $user
 */
class Order extends Model
{
    public $timestamps = false;

    /**
     * Cascade On Delete.
     */
    use CascadesDeletes;
    protected $cascadeDeletes = ['statuses'];

    /**
     * @var array
     */
    protected $fillable = ['order_factor', 'totalـprice', 'user_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /*
     * Get all of the order's status.
     */
    public function statuses() {
        return $this->morphOne('App\Models\Status', 'status');
    }
}
