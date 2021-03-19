<?php

namespace Database\Factories;

use App\Models\Comments;
use App\Models\User;
use App\Models\Posts;

use Illuminate\Database\Eloquent\Factories\Factory;

class CommentsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comments::class;

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
            'reply'   => $this->faker->text,
        ];
    }
}
