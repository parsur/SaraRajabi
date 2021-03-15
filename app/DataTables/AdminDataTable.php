<?php

namespace App\DataTables;

use App\Models\User;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;
use Morilog\Jalali\Jalalian;
use Carbon\Carbon;


class AdminDataTable extends DataTable
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
            ->rawColumns(['action'])
            ->editColumn('created_at', function(User $user){
                date_default_timezone_set('Asia/Tehran');
                // return Jalalian::forge($user->created_at)->format('%A, %d %B %y');
                return Jalalian::forge($user->created_at);
                // return $user->created_at;
                // return Jalalian::now();
            })
            ->editColumn('updated_at', function(User $user){
                // return Jalalian::forge($user->updated_at)->format('%A, %d %B %y');
                // return Jalalian::now();
                // return Jalalian::forge($user->created_at);
                // return $user->updated_at;
                return Jalalian::forge($user->updated_at);




                
            })->addColumn('action', function (User $user){
                return <<<ATAG
                            <a onclick="showConfirmationModal('{$user->id}')">
                                <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                            </a>
                            &nbsp;
                            <a onclick="showEditModal('{$user->id}')">
                                <i class="fa fa-edit text-danger" aria-hidden="true"></i>
                            </a>
                        ATAG;
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\User $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(User $model)
    {
        return $model->where('role',$model::ADMIN);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                ->setTableId('adminTable')
                ->minifiedAjax(route('admin.list.table'))
                ->columns($this->getColumns())
                ->columnDefs(
                    [
                        ["className" => 'dt-center text-center', "target" => '_all'],
                    ]
                )
                ->searching(true)
                // ->lengthMenu([10,25,40])a
                ->info(false)
                ->ordering(true)
                ->responsive(true)
                ->pageLength(8)
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
            Column::make('DT_RowIndex')
            ->title('#')
                ->addClass('column-title')
                ->searchable(false)
                ->orderable(false),
            Column::make('name')
            ->title('نام')
                ->addClass('column-title'),
            Column::make('email')
            ->title('ایمیل')
                ->addClass('column-title'),
            Column::make('created_at')
            ->title('ساخته شده در')
                ->addClass('column-title'),
            Column::make('updated_at')
            ->title('بروز شده در')
                ->addClass('column-title'),
            Column::computed('action') // This Column is not in database
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
        return 'Admin_' . date('YmdHis');
    }
}
