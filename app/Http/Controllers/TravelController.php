<?php

namespace App\Http\Controllers;

use App\Http\Resources\TravelCollection;
use App\Http\Resources\TravelResource;
use App\Models\Travel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TravelController extends Controller
{

    public function index(): JsonResponse {
        $travels = Travel::with('ratings')->orderBy('id', 'DESC')->get();
        return response()->json(new TravelCollection($travels), 200);
    }

    public function all(Request $request) {
        $name = $request->travel;
        $message = '';
        $travels = [];
    
        if ($name) {
            // If a name is provided, search travels by name
            $travels = Travel::where('title', 'like', '%' . $name . '%')
            ->orderBy('id', 'DESC')
            ->with('ratings')
            ->get();
            $totalData = $travels->count();
            if($totalData == 0) {
                $message = 'Berikut pencarian ' . $name . ' tidak ditemukan ' ;
            } else {
                $message = 'Berikut pencarian ' . $name . ' ditemukan ' . $totalData ;
            }
        } else {
            // If no name is provided, return all travels
            $travels = Travel::with('ratings')->orderBy('id', 'DESC')->get();
            $message = 'Semua travel yang tersedia disini.';
        }

        if (!$name && $travels->count() == 0) {
            $message = 'Masih belum ada travel/trip.';
        }
        
        $props = [
            'travels' => new TravelCollection($travels),
            'message' =>  $message
        ];
    
        return Inertia::render('Travel/All', $props); 
    }

    public function dashboard() {
        $travels = Travel::with('ratings')->get();
        $props = [
            'travels' => new TravelCollection($travels)
        ];
        return Inertia::render('Travel/Page', $props);
    }

    public function store(Request $request) {
        // dd($request->all());
         // Validasi input
         $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'address' => 'required|string',
            'ward' => 'required|string',
            'subdistrict' => 'required|string',
            'regency' => 'required|string',
            'province' => 'required|string',
            'price' => 'required|integer',
        ]);

        // Cek validasi
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Simpan thumbnail
        $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');
        $uploadedThumbnail = url('storage/' . $thumbnailPath);
        
        // Simpan images
        $imagePaths = [];
        foreach ($request->file('images') as $image) {
            $path = $image->store('images', 'public');
            $uploadedImage = url('storage/' . $path);
            $imagePaths[] = $uploadedImage;
        }
        // Simpan ke database
        Travel::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'thumbnail' => $uploadedThumbnail,
            'images' => $imagePaths,
            'address' => $request->input('address'),
            'ward' => $request->input('ward'),
            'subdistrict' => $request->input('subdistrict'),
            'regency' => $request->input('regency'),
            'province' => $request->input('province'),
            'price' => $request->input('price'),
        ]);
        return redirect()->route('travel.dashboard.index');
    }

    public function detail($id) {
        $travel = Travel::where('id', $id)
                ->with('ratings')
                ->first();
        return Inertia::render('Travel/Detail', [
            'travel' => new TravelResource($travel)
        ]);
    }

    public function delete($id) {
        $travel = Travel::where('id', $id)->first();
        $travel->delete();
        return redirect()->route('travel.dashboard.index');
    }
}
