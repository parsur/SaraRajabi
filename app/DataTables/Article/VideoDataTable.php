<?php

namespace App\DataTables\Article;

use App\Models\Article;
use App\Models\Poster;
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
            ->rawColumns(['action','video_url']) 
            ->editColumn('video_url', function(Video $video) {
                return '<iframe src="'.$video->video_url.'"  width="50%" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
            })
            ->editColumn('poster_id', function (Video $video) {
                return $video->video->name;
            })
            ->filterColumn('poster_id', function ($query, $keyword) {

                $articles = Poster::where('type', Poster::VIDEO)->whereHas('poster', function($subquery) use ($keyword) {
                    $subquery->where('name', 'LIKE', '%'.$keyword.'%');
                })->get()->pluck('id')->toArray();

                $query->whereIn('id', $articles);
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
        return $model->where('poster_type', Article::class)->where('type', $model::VIDEO);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                ->setTableId('articleVideoTable')
                ->columns($this->getColumns())
                ->minifiedAjax(route('articleVideo.list.table'))
                ->columnDefs(
                    [
                        ["className" => 'dt-center text-center', "target" => '_all'],
                    ]
                )
                ->searching(false)
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
            Column::make('video_url')
            ->title('ویدئو')
                ->addClass('column-title'),
            Column::make('poster_id')
            ->title('مقاله مرتبط')
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
        return 'ArticleVideo_' . date('YmdHis');
    }
}