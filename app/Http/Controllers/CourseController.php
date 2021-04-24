<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Category;
use App\Models\SubCategory;
use App\Providers\Action;
use App\Providers\CourseArticleAction;
use App\DataTables\CourseDataTable;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\SearchRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\FreeCourse;
use DB;

class CourseController extends Controller
{
    // Datatable To blade
    public function list() {
        // dataTable
        $dataTable = new CourseDataTable();

        // Course Table
        $vars['courseTable'] = $dataTable->html();

        return view('course.list', $vars);
    }

    // Get Course
    public function courseTable(CourseDataTable $dataTable) {
        return $dataTable->render('course.list');
    }

    // Get Course Page
    public function new(Request $request, CourseArticleAction $action) {

        // Edit
        if($request->get('id')) {
            $vars['course'] = Course::find($request->get('id'));
        } else {
            $vars['course'] = '';
        }

        // Categories
        $vars['categories'] = Category::select('id', 'name')->whereHas('statuses', function($query) {
            $query->active();
        })->with('courses')->get();

        // Sub Categories
        $vars['subCategories'] = SubCategory::select('id', 'name')->whereHas('statuses', function($query) {
            $query->active();
        })->with('courses')->get();

        return view('course.create', $vars);
    }

    // Store Course
    public function store(StoreCourseRequest $request) {
        // Insert or update
        $this->add($request);

        // Insert
        if($request->get('button_action') == "insert") {
            $success_output = $this->getInsertionMessage();
        }
        // Update
        else if($request->get('button_action') == 'update') {
            $success_output = $this->getUpdateMessage();
        }

        return $this->responseWithSuccess($success_output);
    }

    // Insert
    public function add($request) {
 
        $id = $request->get('id');

        // Course article
        $courseArticle = new CourseArticleAction;

        DB::beginTransaction();

        try {
            $course = Course::updateOrCreate(
                ['id' => $id],
                ['name' => $request->get('name'), 'price' => $request->get('price'), 
                'category_id' => $courseArticle->subSet($request->get('categories')), 
                'subCategory_id' => $courseArticle->subSet($request->get('subCategories'))]
            );
            // Status
            $course->statuses()->updateOrCreate(
                ['status_id' => $id],
                ['status' => $request->get('status'), 'status_type' => Course::class]
            );

            // Description
            $course->description()->updateOrCreate(
                ['description_id' => $id],
                ['description' => $request->get('description'), 'description_type' => Course::class]
            );

            DB::commit();

        } catch(Exception $e) {
            throw $e;
            DB::rollBack();
        }
    }

    // Edit
    public function edit(CourseArticleAction $action, Request $request) {
        return $action->edit(Course::class, $request->get('id'));
    }

    // Delete
    public function delete(Action $action,$id) {
        return $action->delete(Course::class, $id);
    }

    // Show course list page
    public function show() {
        // Courses
        $vars['courses'] = Course::select('id', 'name', 'price', 'category_id', 'subCategory_id')->with(['statuses:status_id,status',
            'description:description_id,description','category:id,name','subCategory:id,name',
            'media' => function($query) {
                $query->image()->first();
            }])->get();
    
        // Categories
        $vars['categories'] = Category::select('id', 'name')->whereHas('statuses', function($query) {
            $query->active();
        })->get();

        // Sub Categories
        $vars['subCategories'] = SubCategory::select('id', 'name')->whereHas('statuses', function($query) {
            $query->active();
        })->get();
 
        return response()->json($vars);
    } 

    // Free courses
    public function download(Request $request) {
        // Course
        $course = Course::where('id', $request->get('id'))->where('price', null)->first();
        // Email
        Mail::to(auth()->user()->email)->send(new FreeCourse($course));

        return $this->responseWithSuccess('دوره با موفقیت به ایمیل شما ارسال شد');
    }

    // Search
    public function search(CourseArticleAction $action, SearchRequest $request) {
        return $action->search($request, Course::class);
    }

    // Details
    public function details(Request $request, CourseArticleAction $action) {
        return $action->details($request, 'App\Models\Course');
    }
}
