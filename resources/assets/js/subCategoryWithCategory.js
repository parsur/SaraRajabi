// Ajax category Bbsed on subcategory
$('#categories').on('change', function (e) {
    var category_id = e.target.value;
    $.get('/sub_category?category_id=' + category_id, function (data) {
        $('#subCategories').empty();
        $("#subCategories").append('<option value="">دسته بندی سطح-۲</option>');
        $.each(data, function (index, subCat) {
            $("#subCategories").append('<option value="' + subCat.id + '">' + subCat.name + '</option>');
        })
    })
})