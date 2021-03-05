<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $url
 * @property int $poster_id
 * @property string $poster_type
 */
class Poster extends Model
{
    const IMAGE = 0;
    const VIDEO = 1;

    public $timestamps = false;
    /**
     * @var array
     */
    protected $fillable = ['url', 'type', 'poster_id', 'poster_type'];

    /**
     * Get the parent Imagable model (Course Or Article).
     */
    public function poster() {
        return $this->morphTo();
    }

}