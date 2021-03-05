<?php

namespace App\DataTables\Course;

use App\Models\Poster;
use App\Models\Image;
use App\Models\Course;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class VideoDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->addIndexColumn()
            ->rawColumns(['action','url']) 
            ->editColumn('url', function(Poster $poster) {
                return '<iframe src="'.$poster->url.'"  width="50%" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
            })
            ->addColumn('poster_id', function (Poster $poster) {
                return $poster->poster->name;
            })
            ->filterColumn('poster_id', function ($query, $keyword) {

                $courses = Poster::where('type', Poster::VIDEO)->whereHas('poster', function($subquery) use ($keyword) {
                    $subquery->where('name', 'LIKE', '%'.$keyword.'%');
                })->get()->pluck('id')->toArray();

                $query->whereIn('id', $courses);
            })
            ->addColumn('action', function(Poster $poster){
                return <<<ATAG
                            <a onclick="showConfirmationModal('{$poster->id}')">
                                <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                            </a>
                            &nbsp;
                            <a onclick="showEditModal('{$poster->id}')">
                                <i class="fa fa-edit text-danger" aria-hidden="true"></i>
                            </a>
                        ATAG;
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\Poster $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Poster $model)
    {
        return $model->where('poster_type', Course::class)->where('type', $model::VIDEO);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                ->setTableId('courseVideoTable')
                ->columns($this->getColumns())
                ->minifiedAjax(route('courseVideo.list.table'))
                ->columnDefs(
                    [
                        ["className" => 'dt-center text-center', "target" => '_all'],
                    ]
                )
                ->searching(true)
                ->info(false)
                ->responsive(true)
                ->dom('PBCfrtip')
                ->orderBy(1)
                ->language(asset('js/Persian.json'));
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('DT_RowIndex') // connect to 226 line columns
            ->title('#')
                ->addClass('column-title')
                ->searchable(false)
                ->orderable(false),
            Column::make('url')
            ->title('ویدئو')
                ->addClass('column-title'),
            Column::make('poster_id')
            ->title('دوره مرتبط')
                ->addClass('column-title'),
            Column::computed('action') // This column is not in database
                ->exportable(false)
                ->searchable(false)
                ->printable(false)
                ->orderable(false)
                ->title('حذف،ویرایش')
                ->addClass('column-title')
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'CourseVideo_' . date('YmdHis');
    }
}