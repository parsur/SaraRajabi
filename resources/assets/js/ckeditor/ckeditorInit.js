ClassicEditor
  .create(document.querySelector('#description'), {
    fontFamily: {
      options: [
        'Arial, Helvetica, sans-serif',
        'Courier New, Courier, monospace',
        'Georgia, serif',
        'Lucida Sans Unicode, Lucida Grande, sans-serif',
        'Tahoma, Geneva, sans-serif',
        'Times New Roman, Times, serif',
        'Trebuchet MS, Helvetica, sans-serif',
        'Verdana, Geneva, sans-serif'
      ]
    },
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'blockQuote',
        'insertTable',
        'htmlEmbed',
        'mediaEmbed',
        'imageUpload',
        'imageInsert',
        'exportPdf',
        'CKFinder',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'fontFamily',
        'pageBreak',
        'horizontalLine',
        'codeBlock',
        'alignment',
        'undo',
        'redo'
      ]
    },
    mediaEmbed: {
      extraProviders: 
      [
        {
          name: 'aparat',
          url: /^aparat\.com/,
          html: match => {
            const url = getAttribute( 'url' );

            return (
              { $url }
            );
          }
        },
      ],
    },
    language: 'fa',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side',
        'linkImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    licenseKey: '',
  })
  .then(editor => {
    window.editor = editor;
    editor.execute( 'fontFamily', 'shabnam');
  })
  .catch(error => {
    console.error('Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:');
    console.error(error);
  });

  