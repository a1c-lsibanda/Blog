<?php
namespace App\Models;
use App\Models\User;
use App\Models\Comments;
use App\Models\Likes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'title',
        'header_image',
        'content',
    ];

    //
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //
    public function comments()
    {
        return $this->hasMany(Comments::class);
    }

    //
    public function likes()
    {
        return $this->hasMany(Likes::class);
    }
}
