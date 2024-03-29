<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Travel::factory(10)->create();
        // \Database\Factories\TravelFactory::new()->count(10)->create();


        \App\Models\User::create([
            'name' => 'Test User',
            'email' => 'admin@gmail.com',
            'phone' => "088227383",
            'password' => Hash::make('password')
        ]);
    }
}
