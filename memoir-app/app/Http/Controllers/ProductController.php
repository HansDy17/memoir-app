<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Logic to retrieve and display products
        return Inertia::render('Products/Index', [
            'products' => [
                ['id' => 1, 'name' => 'Product 1', 'price' => 100],
                ['id' => 2, 'name' => 'Product 2', 'price' => 200],
                ['id' => 3, 'name' => 'Product 3', 'price' => 300],
            ],
        ]);
    }
    public function create()
    {
        return Inertia::render('Products/Create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
        ]);

        // Here you would typically save to database
        // Product::create($validated);

        return redirect()->route('products.index')
            ->with('message', 'Product created successfully');
    }
}
