<?php

namespace App\DataTables;

use App\Models\SubCategory;
use App\Models\Status;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class SubCategoryDataTable extends DataTable
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
            ->rawColumns(['action','status'])
            ->addColumn('status', function (SubCategory $subCategory) {
                if($subCategory->statuses->status == Status::VISIBLE) return "فعال";
                else if($subCategory->statuses->status == Status::INVISIBLE) return 'غیر فعال';
                else '-';
            })
            ->editColumn('c_id', function (SubCategory $subCategory) {
                return $subCategory->category->name;
            })
            ->addColumn('action', function (SubCategory $subCategory) {
                return <<<ATAG
                            <a onclick="showConfirmationModal('{$subCategory->id}')">
                                <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                            </a>
                            &nbsp;
                            <a onclick="showEditModal('{$subCategory->id}')">
                                <i class="fa fa-edit text-danger" aria-hidden="true"></i>
                            </a>
                        ATAG;      
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\SubCategory $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(SubCategory $model)
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->setTableId('subCategoryTable')
            ->columns($this->getColumns())
            ->minifiedAjax(route('subCategory.list.table'))
            ->dom('Bfrtip')
            ->orderBy(1)
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
            Column::make('DT_RowIndex')
            ->title('#')
                ->addClass('column-title')
                ->searchable(false)
                ->orderable(false),
            Column::make('name')
            ->title('نام')
                ->addClass('column-title'),
            Column::computed('status')
            ->title('وضعیت')
                ->addClass('column-title'),
            Column::make('c_id')
            ->title('دسته بندی اول')
                ->addClass('column-title'),
            Column::computed('action') // This column is not in database
            ->title('حذف،ویرایش')
                ->exportable(false)
                ->searchable(false)
                ->printable(false)
                ->orderable(false)
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
        return 'SubCategory_' . date('YmdHis');
    }
}