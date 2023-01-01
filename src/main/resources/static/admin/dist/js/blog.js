$(function () {
    $("#jqGrid").jqGrid({
        url: '/admin/blogs/list',
        datatype: "json",
        colModel: [
            {label: 'id', name: 'blogId', index: 'blogId', width: 50, key: true, hidden: true},
            {label: 'Tiêu đề', name: 'blogTitle', index: 'blogTitle', width: 140},
            {label: 'Ảnh', name: 'blogCoverImage', index: 'blogCoverImage', width: 120, formatter: coverImageFormatter},
            {label: 'View', name: 'blogViews', index: 'blogViews', width: 60},
            {label: 'Trạng thái', name: 'blogStatus', index: 'blogStatus', width: 60, formatter: statusFormatter},
            {label: 'Thể loại', name: 'blogCategoryName', index: 'blogCategoryName', width: 60},
            {label: 'Thời gian', name: 'createTime', index: 'createTime', width: 90}
        ],
        height: 700,
        rowNum: 10,
        rowList: [10, 20, 50],
        styleUI: 'Bootstrap',
        loadtext: 'Trong thông tin...',
        rownumbers: false,
        rownumWidth: 20,
        autowidth: true,
        multiselect: true,
        pager: "#jqGridPager",
        jsonReader: {
            root: "data.list",
            page: "data.currPage",
            total: "data.totalPage",
            records: "data.totalCount"
        },
        prmNames: {
            page: "page",
            rows: "limit",
            order: "order",
        },
        gridComplete: function () {
            //Ẩn thanh cuộn dưới cùng của grid

            $("#jqGrid").closest(".ui-jqgrid-bdiv").css({"overflow-x": "hidden"});
        }
    });

    $(window).resize(function () {
        $("#jqGrid").setGridWidth($(".card-body").width());
    });

    function coverImageFormatter(cellvalue) {
        return "<img src='" + cellvalue + "' height=\"120\" width=\"160\" alt='coverImage'/>";
    }

    function statusFormatter(cellvalue) {
        if (cellvalue == 0) {
            return "<button type=\"button\" class=\"btn btn-block btn-secondary btn-sm\" style=\"width: 50%;\">Nháp</button>";
        }
        else if (cellvalue == 1) {
            return "<button type=\"button\" class=\"btn btn-block btn-success btn-sm\" style=\"width: 50%;\">Hiện</button>";
        }
    }

});

/**
 * Chức năng tìm kiếm
 */
function search() {
    //Từ khoá
    var keyword = $('#keyword').val();
    if (!validLength(keyword, 20)) {
        swal("Tìm kiếm từ khoá quá dài!", {
            icon: "error",
        });
        return false;
    }
    //Đóng gói dữ liệu
    var searchData = {keyword: keyword};
    //Tham số điều kiện truy vấn đến
    $("#jqGrid").jqGrid("setGridParam", {postData: searchData});
    //Nhấp vào nút tìm kiếm theo mặc định bắt đầu từ trang đầu tiên
    $("#jqGrid").jqGrid("setGridParam", {page: 1});
    //Gửi post và làm mới biểu mẫu
    $("#jqGrid").jqGrid("setGridParam", {url: '/admin/blogs/list'}).trigger("reloadGrid");
}

/**
 * jqGrid loading
 */
function reload() {
    var page = $("#jqGrid").jqGrid('getGridParam', 'page');
    $("#jqGrid").jqGrid('setGridParam', {
        page: page
    }).trigger("reloadGrid");
}

function addBlog() {
    window.location.href = "/admin/blogs/edit";
}

function editBlog() {
    var id = getSelectedRow();
    if (id == null) {
        return;
    }
    window.location.href = "/admin/blogs/edit/" + id;
}

function deleteBlog() {
    var ids = getSelectedRows();
    if (ids == null) {
        return;
    }
    swal({
        title: "Thông báo",
        text: "Bạn có xác nhận rằng bạn muốn xóa dữ liệu không?   ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((flag) => {
            if (flag) {
                $.ajax({
                    type: "POST",
                    url: "/admin/blogs/delete",
                    contentType: "application/json",
                    data: JSON.stringify(ids),
                    success: function (r) {
                        if (r.resultCode == 200) {
                            swal("Xóa thành công ", {
                                icon: "success",
                            });
                            $("#jqGrid").trigger("reloadGrid");
                        } else {
                            swal(r.message, {
                                icon: "error",
                            });
                        }
                    }
                });
            }
        }
    );
}