<?php

namespace Database\Factories;

use App\Models\Likes;
use App\Models\User;
use App\Models\Posts;

use Illuminate\Database\Eloquent\Factories\Factory;

class LikesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Likes::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::all()->random()->id,
            'post_id' => Posts::all()->random()->id,
        ];
    }
}
