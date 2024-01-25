<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TravelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail,
            'address' => $this->address,
            'ward' => $this->ward,
            'subdistrict' => $this->subdistrict,
            'regency' => $this->regency,
            'province' => $this->province,
            'images' => json_decode($this->images),
            'rating' => $this->rating ?? 0, 
            'rating_count' => $this->rating_count ?? 0,
            'ratings' => RatingResource::collection($this->ratings),
        ];
    }
}
