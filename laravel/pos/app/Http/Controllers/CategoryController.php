<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Exception;

class CategoryController extends Controller
{
    function CreateCategory(Request $request)
    {
        try {
            $user_id = $request->header('id');
            $category = Category::create(
                [
                    'name' => $request->name,
                    'user_id' => $user_id
                ]
            );
            return response()->json(['status' => 'success', 'message' => 'Category Created Successfully'], 201);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Something went wrong'], 500);
        }
    }
    function CategoryAll(Request $request)
    {
        try {
            $user_id = $request->header('id');
            $data = Category::where('user_id', $user_id)->get();
            return response()->json(['status' => 'success', 'data' => $data], 200);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Something went wrong'], 500);
        }
    }
    function CategoryUpdate(Request $request)
    {
        try {
            $user_id = $request->header('id');
            $data = Category::where(['id', $request->id, 'user_id' => $user_id])->update(['name' => $request->name]);
            return response()->json(['status' => 'success', 'message' => 'Category Updated Successfully'], 200);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Something went wrong'], 500);
        }
    }
    function CategoryDelete(Request $request)
    {
        try {
            $user_id = $request->header('id');
            $data = Category::where(['id', $request->id, 'user_id' => $user_id])->delete();
            return response()->json(['status' => 'success', 'message' => 'Category Deleted Successfully'], 200);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Something went wrong'], 500);
        }
    }

    // pages
    function CategoryPage()
    {
        return view('dashboard.categories');
    }
}
