$(function () {
    new AjaxUpload('#uploadButton', {
        action: '/admin/upload/file',
        name: 'file',
        autoSubmit: true,
        responseType: "json",
        onSubmit: function (file, extension) {
            if (!(extension && /^(jpg|jpeg|png|gif)$/.test(extension.toLowerCase()))) {
                alert('Chỉ các tệp trong JPG, PNG, Định dạng GIF!');
                return false;
            }
        },
        onComplete: function (file, r) {
            if (r != null && r.resultCode == 200) {
                console.log(r.data);
                $("#img").attr("src", r.data);
                $("#img").attr("style", "width: 100px;display:block;");
                return false;
            } else {
                alert("error");
            }
        }
    });
});