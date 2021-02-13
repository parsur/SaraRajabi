<?php

namespace App\View\Components;

use Illuminate\View\Component;

class create extends Component
{
    public $title;
    public $formId;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($title,$formId)
    {
        $this->title = $title;
        $this->formId = $formId;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.admin.create');
    }
}
