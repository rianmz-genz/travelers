<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('travels', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('thumbnail');
            $table->json('images')->nullable();
            $table->string('address')->nullable();
            $table->string('ward')->nullable();
            $table->string('subdistrict')->nullable();
            $table->string('regency')->nullable();
            $table->string('province')->nullable();
            $table->integer('rating_count')->nullable();
            $table->integer('rating')->nullable();
            $table->integer('price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('travels');
    }
};
