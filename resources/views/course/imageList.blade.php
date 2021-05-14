@extends('layouts.admin')
@section('title','لیست تصاویر دوره')

@section('content')

  {{-- Header --}}
  <x-header pageName="تصاویر دوره" buttonValue="تصاویر دوره">  
    <x-slot name="table">
      {!! $courseImageTable->table(['class' => 'table table-bordered table-striped w-100 nowrap text-center']) !!}
    </x-slot>
  </x-header>

  {{-- Insert Modal --}}
  <x-insert size="modal-lg" formId="courseImageForm">
    <x-slot name="content">
      <div class="row">
        <div class="col-md-6 mb-3">
          {{-- Course Select Box --}}
          @include('includes.form.course')
        </div>
        
        {{-- Image --}}
        @include('includes.courseArticle.image')
      </div>
    </x-slot>
  </x-insert>

  {{-- Delete Modal --}}
  <x-delete title="آیا مایل به حذف تصویر دوره هستید؟"/>

@endsection

@section('scripts')
  @parent
  {{-- Course Image DataTable --}}
  {!! $courseImageTable->scripts() !!}
  
  {{-- Image handler --}}
  <script src="{{ asset('js/ImageHandler.js') }}"></script>

  {{-- Image Preview --}}
  <script src="{{ asset('js/imagePreview.js') }}"></script>

  <script>
    $(document).ready(function () {  
      // Course Image DataTable And Action Object
      let dt = window.LaravelDataTables['courseImageTable'];
      let action = new RequestHandler(dt,'#courseImageForm','courseImage');

      // Image handler
      let imageHandler = new ImageHandler('course');

      // Record modal
      $('#create_record').click(function () {
        $('#course').val('').trigger('change');
        imageHandler.picture();
        action.modal();
      });

      // Insert
      action.insert();

      // Delete
      window.showConfirmationModal = function showConfirmationModal(url) {
        action.delete(url);
      }
      // Edit
      window.showEditModal = function showEditModal(id) {
        edit(id);
      }
      function edit($id) {
        action.edit();

        $.ajax({
          url: "{{ url('courseImage/edit') }}",
          method: "get",
          data: {id: $id},
          success: function(data) {
            $('#id').val($id);
            imageHandler.successfulEdit(data);
          }
        })
      }
    });
  </script>

@endsection
