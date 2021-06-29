<?php

namespace App\Http\Controllers\Course;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\DataTables\Course\FileDataTable;
use App\Http\Requests\Course\StoreFileRequest;
use App\Providers\Action;
use Illuminate\Support\Str;
use Storage;
use ZipArchive;
use File;


class FileController extends Controller
{
    public $file = \App\Models\File::class;
    
    // DataTable to blade
    public function list() {
        // dataTable
        $dataTable = new FileDataTable();

        // CourseFile Table
        $vars['courseFileTable'] = $dataTable->html();

        return view('course.fileList', $vars);
    }

    // Get Course Image
    public function courseFileTable(FileDataTable $dataTable) {
        return $dataTable->render('course.fileList');
    }

    // Store
    public function store(StoreFileRequest $request) {
        // Insert course files
        $this->file::updateOrCreate(
            ['id' => $request->get('id')],
            ['url' => $request->get('url'), 'title' => $request->get('title'), 'course_id' => $request->get('course')]
        );

        return $this->getAction($request->get('button_action'));
    }

    // Edit
    public function edit(Action $action,Request $request) {
        return $action->edit($this->file,$request->get('id'));
    }

    // Delete
    public function delete($id, Action $action) {
        return $action->delete($this->file,$id);
    }
}
