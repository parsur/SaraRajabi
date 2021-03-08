<?php

namespace App\Providers;
use File;

class CourseArticleImgVideo {

    /**
     * All reusable actions (GET,POST) for course and article images and videos.
     * 
     * @return json_encode
     * 
     */

    /**
     * Edit.
     */
    public function edit($model,$id) {

        $values = $model::where('id', $id)->with('statuses', 'media', 'description')->first();
        return json_encode($values);
    }


    /**
     * Delete
     */
    public function delete($model, $id) {
        // Why did not try catch work?
        $values = $model::find($id);
        if ($values) {
            $values->delete();
        } else {
            return response()->json([], 404);
        }
        return response()->json([], 200);

    }

    /**
     * Delete With Image.
     */
    public function deleteWithImage($model,$id,$column) {

        $modelImage = $model::find($id);
        if($modelImage) {
            File::delete(public_path("images/" . $modelImage->$column)); 
            $modelImage->delete();
        } else {
            return response()->json([], 404);
        }
        return response()->json([], 200);
    }


    /**
     * Search.
     */
    public function search($model,$search,$coulmn) {
        // If search is requested
        if(!empty($search)) {

            $values = $model::where($column, $search)->paginate(9);
            if(count($values) > 0)
                return response()->json($values);
            else 
                return response()->json('متاسفانه نتیجه ای یافت نشد');
        }
        else {
            return response()->json('لطفا نوشته مورد نظر خود را جستجو کنید');
        }
    }
}