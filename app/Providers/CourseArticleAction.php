<?php

namespace App\Providers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Media;
use App\Models\Comment;
use App\Models\Status;
use File;

class CourseArticleAction {

    /**
     * Action of course and article. (GET,POST)
     * 
     * @return json 
     */
    
    // Details
    public function details($request, $model) {

        $id = $request->get('id');
        $role = $request->get('role');

        switch($model) {
            case 'App\Models\Course':
                $name = 'course';
                break;
            case 'App\Models\Article':
                $name = 'article';
        }
        
        $vars["$name"] = $model::where('id', $id)->with(['statuses:status_id,status',
            'description:description_id,description','category:id,name','subCategory:id,name', 
                'comments' => function($query) {
                $query->select('id', 'commentable_id', 'comment')->whereHas('statuses', function ($query) {
                    $query->active();
                });
            }])->first();
        

        if($role != 'admin') {

            $images = [];
            $videos = [];

            $media_urls = Media::where('media_id', $id)->where('media_type', $model)->get();
            foreach($media_urls as $media_url) {
                switch($media_url->type) {
                    case Media::IMAGE:
                        $images[] = ['url' => 'http://sararajabi.com/images/' . $media_url->url];
                        break;
                    case MEDIA::VIDEO:
                        $videos[] = ['url' => $media_url->url];
                }
            }

            // Images
            $vars['images'] = $images;
            // Videos
            $vars['videos'] = $videos;

            return response()->json($vars);
        }

        return view("$name.details", $vars);
    }

    // Edit
    public function edit($model, $id) {
        $values = $model::where('id', $id)->with('statuses:status_id,status',
            'description:description_id,description','category:id,name','subCategory:id,name')->first();

        return response()->json($values);
    }

    // Category and subCategory SubSet
    public function subSet($request) {
        // Category or Sub Category
        switch($request) {
            case '':
                return null;
                break;
            default:
                return $request;
        }
    }

    // Add Image
    public function image($request, $id, $type) {
        // Update
        $imageUpload = Media::find($request->get('id'));
        if(!$imageUpload) {
            // Insert
            $imageUpload = new Media();
        }
        $imageUpload->media_id = $id;
        $imageUpload->media_type = $type;
        // 0 = image
        $imageUpload->type = Media::IMAGE;

        if($request->hasFile('images')) {
            foreach($request->file('images') as $image) {
                // File
                $file = $image->getClientOriginalName();

                if(isset($file)) {
                    File::delete(public_path("images/$imageUpload->url")); 
                    $imageUpload->url = $file;
                    $image->move(public_path('images'), $file);
                }
            }
        }
        $imageUpload->save();
    }

    // Add Video
    public function video($request, $id, $type) {
        // Insert course videos
        Media::updateOrCreate(
            ['id' => $request->get('id')],
            ['url' => $request->get('aparat_url'), 'media_id' => $id, 'media_type' => $type, 'type' => Media::VIDEO]
        );
    }

    // Comment submitted by admin to be shown for user.
    public function comment($request) {
        // Set the course's comment visible
        $comment = Comment::find($request);
        $comment->statuses()->update(['status' => Status::VISIBLE]);
        
        $output = array('success' => '<div class="alert alert-success">دیدگاه کاربر با موفقیت تایید شد</div>');
        return response()->json($output);
    }

    /**
     * Search.
     */
    public function search($request, $model) {

        // If search is requested
        if($request->has('search') and $request->has('column')) {
            
            $values = $model::where($request->column, 'LIKE', "%{$request->search}%")->get();
        }
        if($request->has('category_id')) {

            $values = $model::where('category_id', $request->category_id)->whereNotNull('category_id')->get();
        }
        if($request->has('sub_category_id')) {
            
            $values = $model::where('subCategory_id', $request->sub_category_id)->whereNotNull('subCategory_id')->get();
        }

        if(count($values) > 0)
            return response()->json($values); // 200
        else 
            return response()->json(''); // 404
    }
}