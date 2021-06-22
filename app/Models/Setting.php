<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $value
 */
class Setting extends Model
{
    public $timestamps = false;
    /**
     * @var array
     */
    protected $fillable = ['name', 'value'];

}
