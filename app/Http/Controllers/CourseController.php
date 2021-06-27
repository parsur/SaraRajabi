<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Category;
use App\Models\Subcategory;
use App\Models\Rating;
use App\Providers\Action;
use App\Providers\CourseArticleAction;
use App\DataTables\CourseDataTable;
use App\Http\Requests\StoreCourseRequest;
use App\Mail\FreeCourse;
use Illuminate\Support\Facades\Mail;
use Auth;
use DB;

class CourseController extends Controller
{
    public $categories;
    public $subcategories;

    public function __construct() {

        $this->middleware('auth:sanctum')->only('setRating');

        // Categories
        $this->categories = Category::select('id', 'name')->whereHas('statuses', function($query) {
            $query->active();
        })->with('courses')->get();

        // Subcategories
        $this->subcategories = Subcategory::select('id', 'name')->whereHas('statuses', function($query) {
            $query->active();
        })->get();
    }

    // Datatable To blade
    public function list() {
        // dataTable
        $dataTable = new CourseDataTable();

        // Course Table
        $vars['courseTable'] = $dataTable->html();

        return view('course.list', $vars);
    }

    // Get course
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
        $vars['categories'] = $this->categories;

        // Subcategories
        $vars['subcategories'] = $this->subcategories;

        return view('course.create', $vars);
    }

    // Store course
    public function store(StoreCourseRequest $request) {

        $id = $request->get('id');
        
        DB::beginTransaction();

        try {
            $course = Course::updateOrCreate(
                ['id' => $id],
                ['name' => $request->get('name'), 'price' => $request->get('price'), 
                'category_id' => $request->get('categories'), 
                'subcategory_id' => $request->get('subcategories')]
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

        return $this->getAction($request->get('button_action'));
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
        $vars['courses'] = Course::select('id', 'name', 'price', 'category_id', 'subcategory_id')->with(['statuses:status_id,status',
            'description:description_id,description','category:id,name','subcategory:id,name',
            'media' => function($query) {
                $query->image()->first();
            }])->get();
    
        // Categories
        $vars['categories'] = $this->categories;

        // Sub categories
        $vars['subcategories'] = $this->subcategories;
 
        return response()->json($vars);
    } 


    // Set rating
    public function setRating(Request $request) {
        return Rating::create( 
            ['rating' => $request->get('rating'), 'course_id' => $request->get('course_id'), 'user_id' => Auth::user()->id]
        );
    }

    // Free courses
    public function download(Request $request) {
        // Course
        $course = Course::where('id', $request->get('id'))->where('price', null)->first();
        // Email
        Mail::to(auth()->user()->email)->send(new FreeCourse($course));

        return $this->successfulResponse('دوره با موفقیت به ایمیل شما ارسال شد', Response::HTTP_OK);
    }

    // Search
    public function search(CourseArticleAction $action, SearchRequest $request) {
        return $action->search($request, Course::class);
    }

    // Details
    public function details(Request $request, CourseArticleAction $action) {
        return $action->details($request, Course::class);
    }
}
