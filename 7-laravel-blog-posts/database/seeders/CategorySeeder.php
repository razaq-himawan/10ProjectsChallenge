<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    public static $counter = 0;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = ['Web Programming', 'Mobile Programming', 'Machine Learning', 'System Design', 'Embedded Programming'];
        $color = ['red', 'green', 'blue', 'yellow', 'purple'];
        $this::$counter += 1;

        // Category::factory(3)->create();

        foreach ($categories as $i => $category) {
            Category::create([
                'name' => $category,
                'slug' => Str::slug($category),
                'color' => $color[$i],
            ]);
        }
    }
}
