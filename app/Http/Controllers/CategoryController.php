<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->paginate(5);
        return response()->json($categories, 200);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|min:3',
            'image'=>'required|image|mimes:jpeg,png,jpg'
        ]);

        $category = new Category();
        $category->name = $request->name;

        $path = $request->file('image')->store('categories_images');
        $category->image = $path;

        if ($category->save()) {
            return response()->json($category, 200);
        }else {
            return response()->json($category, 500);
        }
    }

    public function show(Category $category)
    {
        //
    }

    public function edit(Category $category)
    {
        //
    }

    public function update(Request $request, Category $category)
    {   
        // dd($request->all());
        $request->validate([
            'name'=>'required|min:3'
        ]);
        
        $category->name = $request->name;
        $old_path = $category->image;

        if($request->hasFile('image')) {
            $request->validate([
                'image'=>'required|image|mimes:jpeg,png,jpg'
            ]);
            $path = $request->file('image')->store('categories_images');
            $category->image = $path;

            Storage::delete($old_path);
        }

        if ($category->save()) {
            return response()->json($category,200);
        } else {
            Storage::delete($path);
            $message = [
                'message'=>'some errors occured, Please try again',
                'status_code'=>500
            ];
            return response()->json($message,500);
        }
    }

    public function destroy(Category $category)
    {
        if ($category->delete()) {
            Storage::delete($category->image);
            return response()->json([
                'message' => 'delete category successfully',
                'status_code' => 200,
            ], 200);
        } else {
            return response()->json([
                'message' => 'some error occured, please try again',
                'status_code' => 500,
            ], 500);
        }
    }
}
