<?php

namespace App\Http\Controllers\Article;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\DataTables\Article\CommentDataTable;
use App\Http\Requests\StoreCommentRequest;
use App\Providers\SuccessMessages;
use App\Providers\CourseArticleAction;
use App\Providers\Action;
use App\Models\Comment;
use App\Models\Status;
use DB;

class CommentController extends Controller
{
    // Datatable To blade
    public function list() {
        // dataTable
        $dataTable = new CommentDataTable();

        // Article comment Table
        $vars['articleCommentTable'] = $dataTable->html();

        return view('article.commentList', $vars);
    }

    // Get article comment
    public function articleCommentTable(CommentDataTable $dataTable) {
        return $dataTable->render('article.commentList');
    }

    // Store
    public function store(StoreCommentRequest $request) {
        DB::beginTransaction();
        try {
            $comment = Comment::create(['name' => $request->get('name'), 'comment' => $request->get('comment'), 
                'commentable_id' => $request->get('article_id'), 'commentable_type' => Article::class]);

            // Set the course's comment invisible
            $comment->statuses()->create(['status' => Status::INVISIBLE]);

            DB::commit();
            
            return response()->json('دیدگاه درباره مقاله با موفقیت ثبت شد', JSON_UNESCAPED_UNICODE);

        } catch(Exception $e) {
            throw $e;
            DB::rollBack();
        }
    }

    // Edit
    public function edit(Request $request) {
        $action->edit(Comment::class, $request->get('id')); 
    }

    // Update
    public function update(Request $request) {
        DB::beginTransaction();
        try {
            $comment = Comment::where('commentable_id', $article_id)->where('commentable_type', Article::class)
                ->update(['comment' => $request->get('comment')]);

            DB::commit();

            return response()->json('دیدگاه درباره مقاله با موفقیت ویرایش شد', JSON_UNESCAPED_UNICODE);

        } catch(Exception $e) {
            throw $e;
            DB::rollBack();
        }
    }

    // Delete
    public function delete($id, Action $action) {
        return $action->delete(Comment::class, $id);
    }

    // Comment submitted by admin to be shown for user.
    public function submit(Request $request, CourseArticleAction $action) {
        // Set the course's comment visible
        return $action->comment($request->get('submission'));
    }
}
