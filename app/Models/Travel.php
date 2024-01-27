<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Travel extends Model
{
    use HasFactory;
    protected $table = 'travels';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $timestamps = true;
    public  $incrementing = true;
    protected $fillable = [
        'title',
        'description',
        'thumbnail',
        'address',
        'ward',
        'subdistrict',
        'regency',
        'province',
        'images',
        'rating',
        'rating_count',
        'price'
    ];
    protected $casts = [
        'images' => 'array'
    ];

    public function ratings() : HasMany {
        return $this->hasMany(Rating::class, 'travel_id', 'id');
    }
}
