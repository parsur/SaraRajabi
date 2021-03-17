<div class="row">
    {{-- Status --}}
    <div class="col-md-12 mb-3">
        <label for="status">وضعیت:</label>
        <select id="status" name="status" class="custom-select">
            <option value="0">موجود</option>
            <option value="1">ناموجود</option>
        </select>
    </div>
</div>

<div class="row">
    {{-- Category --}}
    <div class="col-md-6 mb-3">
        <label for="categories">دسته بندی اول:</label>
        <select name="categories" id="categories" class="custom-select">
            <option value="">دسته بندی اول</option>
            @foreach($categories as $category)
                <option value="{{ $category->id }}" {{ $category->id == optional($table)->category_id ? 'selected' : '' }}>{{ $category->name }}</option>
            @endforeach
        </select>
    </div>
    {{-- Sub Category --}}
    <div class="col-md-6 mb-3">
        <label for="subCategories">دسته بندی سطح-۲:</label>
        <select id="subCategories" name="subCategories" class="custom-select">
            <option value="">دسته بندی سطح-۲</option>
            @foreach($subCategories as $subCategory)
                <option value="{{ $subCategory->id }}" {{ $subCategory->id == optional($table)->subCategory_id ? 'selected' : '' }}>{{ $subCategory->name }}</option>
            @endforeach
        </select>
    </div>
</div>

{{-- Description --}}
<div class="row">
    <div class="col-md-12 fr-view mb-3">
        <x-textarea key="description" name="توضیح" />
    </div>
</div>

{{-- Buttons --}}
<div class="col-md-12 mb-3" align="center">
    <input type="hidden" name="button_action" id="button_action" value="insert" />
    <input type="submit" name="submit" id="action" value="تایید" class="btn btn-success" />
</div>
