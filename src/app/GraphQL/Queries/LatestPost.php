<?php

namespace App\GraphQL\Queries;
use App\Models\Posts;

class LatestPost
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return Posts::all()->last();
    }
}
