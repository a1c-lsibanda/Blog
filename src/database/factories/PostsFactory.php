<?php

namespace Database\Factories;

use App\Models\Posts;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\File;

class PostsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Posts::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $filepath = public_path('images');

        return [
            'user_id'      => User::all()->random()->id,
            'title'        => $this->faker->sentence,
            'header_image' => $this->faker->image($filepath, 640, 480, null, false),
            'content'      => $this->faker->text
        ];
    }
}
