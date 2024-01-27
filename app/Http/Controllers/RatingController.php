<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Models\Travel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RatingController extends Controller
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string',
            'comment' => 'required|string',
            'rating' => 'required',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'travel_id' => 'required',
        ]);

        // Validate input
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Save images
        $imagePaths = [];
        foreach ($request->file('images') as $image) {
            $path = $image->store('images', 'public');
            $uploadedImage = url('storage/' . $path);
            $imagePaths[] = $uploadedImage;
        }

        // Save to the database
        Rating::create([
            'name' => $request->input('name'),
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating'),
            'images' => $imagePaths,
            'travel_id' => $request->input('travel_id'),
        ]);

        // Update the travel's rating and rating_count
        $travel = Travel::find($request->input('travel_id'));

        // Calculate new average rating and increment rating_count
        $travel->rating = ($travel->rating * $travel->rating_count + $request->input('rating')) / ($travel->rating_count + 1);
        $travel->rating_count++;

        // Save the updated travel
        $travel->save();

        return redirect()->route('travel.detail', [$request->input('travel_id')])->withErrors('Berhasil menambhkan review', 'success');
    }
}
