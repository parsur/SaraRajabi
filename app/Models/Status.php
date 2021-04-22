<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $status
 * @property int $status_id
 * @property string $status_type
 */
class Status extends Model
{
    public $timestamps = false;

    const VISIBLE = 0;
    const INVISIBLE = 1;

    /**
     * Scope a query to only include active statuse.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query) {
        return $query->where('status', Status::VISIBLE);
    }

    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'status';

    /**
     * @var array
     */
    protected $fillable = ['status', 'status_id', 'status_type'];

    /**
     * Get The parent status model
     */
    public function status() {
        return $this->morphTo();
    }

    

}
