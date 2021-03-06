<?php
namespace App\Models;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Likes extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'post_id',
    ];

    //
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
