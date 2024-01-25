<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rating extends Model
{
    use HasFactory;
    protected $table = 'ratings';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $timestamps = true;
    public  $incrementing = true;
    protected $fillable = [
        'travel_id',
        'name',
        'comment',
        'rating',
        'images',
    ];
    protected $casts = [
        'images' => 'array'
    ];

    public function travel() : BelongsTo {
        return $this->belongsTo(Travel::class, 'travel_id', 'id');
    }
}
