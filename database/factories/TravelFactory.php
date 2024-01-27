<?php

namespace Database\Factories;

use App\Models\Travel;
use Illuminate\Database\Eloquent\Factories\Factory;

class TravelFactory extends Factory
{
    protected $model = Travel::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'thumbnail' => $this->faker->imageUrl(),
            'address' => $this->faker->address,
            'ward' => $this->faker->word,
            'subdistrict' => $this->faker->word,
            'regency' => $this->faker->city,
            'province' => $this->faker->state,
            'images' => [
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
                // Add more image URLs if needed
            ],
            'price' => $this->faker->numberBetween(100, 1000), // Adjust the range as needed
            // 'rating' => $this->faker->randomFloat(1, 1, 5),
            // 'rating_count' => $this->faker->numberBetween(0, 100),
        ];
    }
}
