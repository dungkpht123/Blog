/**

**/
/*global jQuery, define */
(function( factory ) {
	"use strict";
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"../grid.base"
		], factory );
	} else {
		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.jgrid = $.jgrid || {};
if(!$.jgrid.hasOwnProperty("regional")) {
	$.jgrid.regional = [];
}
$.jgrid.regional["cn"] = {
    defaults : {
        recordtext: "Trang{0}Đến {1}\u3000 {2} ", // Trước từ thông thường là một không gian đầy đủ
        emptyrecords: "Không có hồ sơ!",
        loadtext: "Đang tải...",
	savetext: "Luu...",
        pgtext : "Trang{0}đến\u3000Tổng cộng {1} trang",
		pgfirst : "Trang đầu tiên",
		pglast : "trang cuối cùng",
		pgnext : "Trang tiếp theo",
		pgprev : "Trang cuối",
		pgrecs : "Số lượng  mỗi trang",
		showhide: "Chuyển sang mở rộng biểu mẫu gấp",
		// mobile
		pagerCaption : "Form :: Cài đặt trang",
		pageText : "Page:",
		recordPage : "Số lượng trên mỗi trang",
		nomorerecs : "Không còn hồ sơ nữa...",
		scrollPullup: "Tải nhiều hơn...",
		scrollPulldown : "Làm mới...",
		scrollRefresh : "Lăn làm mới..."
    },
    search : {
        caption: "Tìm kiếm...",
        Find: "Tìm thấy",
        Reset: "Repossess",
        odata: [{ oper:'eq', text:'công bằng\u3000\u3000'},{ oper:'ne', text:'không bằng\u3000'},{ oper:'lt', text:'Ít hơn\u3000\u3000'},{ oper:'le', text:'Ít hơn bằng nhau'},{ oper:'gt', text:'nhiều hơn\u3000\u3000'},{ oper:'ge', text:'lớn hơn hoặc bằng'},{ oper:'bw', text:'Bắt đầu lúc bắt đầu'},{ oper:'bn', text:'Sự khởi đầu không phải là'},{ oper:'in', text:'thuộc về\u3000\u3000'},{ oper:'ni', text:'Không thuộc về'},{ oper:'ew', text:'Cuối cùng'},{ oper:'en', text:'Kết thúc là không'},{ oper:'cn', text:'Bao gồm\u3000\u3000'},
        { oper:'nc', text:'Không bao gồm'},{ oper:'nu', text:'Trống rỗng'},{ oper:'nn', text:'có giá trị'}, {oper:'bt', text:'Khoảng thời gian'}],
        groupOps: [ { op: "AND", text: "Đáp ứng tất cả các điều kiện" },    { op: "OR",  text: "Đáp ứng bất kỳ điều kiện" } ],
		operandTitle : "Bấm để tìm kiếm.",
		resetTitle : "Đặt lại điều kiện tìm kiếm",
		addsubgrup : "Thêm nhóm điều kiện",
		addrule : "Thêm điều kiện",
		delgroup : "Xóa nhóm điều kiện",
		delrule : "Xóa điều kiện",
		Close : "Close",
		Operand : "Operand : ",
		Operation : "Oper : "
    },
    edit : {
        addCaption: "Thêm bản ghi",
        editCaption: "Chỉnh sửa hồ sơ",
        bSubmit: "Gửi đi",
        bCancel: "Hủy bỏ",
        bClose: "Khép kín",
        saveData: "Dữ liệu đã được sửa đổi, nó có được bảo tồn không?",
        bYes : "Yes",
        bNo : "No",
        bExit : "Thoat",
        msg: {
            required:"Trường này phải",
            number:"Vui lòng nhập các số hiệu quả",
            minValue:"Truyền dữ liệu phải lớn hơn bằng ",
            maxValue:"Truyền dữ liêu phải ít hơn bằng ",
            email: "Đây không phải là một địa chỉ e-mail",
            integer: "Vui lòng nhập số nguyên hợp lệ",
            date: "Vui lòng nhập thời gian hợp lệ",
            url: "URL không hợp lệ.Tiền tố phải là ('http://' hoặc 'https://')",
            nodefined : " Bất ngờ!",
            novalue : " Cần trả lại giá trị!",
            customarray : "Chức năng tùy chỉnh cần trả về mảng!",
            customfcheck : "Phải có một chức năng tùy chỉnh!"
        }
    },
    view : {
        caption: "Xem hồ sơ",
        bClose: "Đóng"
    },
    del : {
        caption: "xóa bỏ",
        msg: "Xóa bản ghi đã chọn?",
        bSubmit: "xóa bỏ",
        bCancel: "Hủy bỏ"
    },
    nav : {
        edittext: "",
        edittitle: "Chỉnh sửa hồ sơ",
        addtext:"",
        addtitle: "Thêm bản ghi mới",
        deltext: "",
        deltitle: "Xóa bản ghi đã chọn",
        searchtext: "",
        searchtitle: "Tìm thấy",
        refreshtext: "",
        refreshtitle: "Làm mới bàn",
        alertcap: "Lưu ý",
        alerttext: "Vui lòng chọn hồ sơ",
        viewtext: "",
        viewtitle: "Kiểm tra bản ghi đã chọn",
		savetext: "",
		savetitle: "Lưu hồ sơ",
		canceltext: "",
		canceltitle : "Hủy bản ghi biên tập",
		selectcaption : "chạy..."
    },
    col : {
        caption: "Sự lựa chọn",
        bSubmit: "Chắc chắn rồi",
        bCancel: "Hủy bỏ"
    },
    errors : {
        errcap : "sai lầm",
        nourl : "Không có URL",
        norecords: "Không có hồ sơ cần được xử lý",
        model : "colNames với colModel Độ dài là khác nhau!"
    },
    formatter : {
        integer : {thousandsSeparator: ",", defaultValue: '0'},
        number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
        currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
        date : {
            dayNames:   [
                "Ngày", "một", "hai", "ba", "bốn", "năm", "sáu",
                "Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy",
            ],
            monthNames: [
                "Một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín", "mười", "mười một", "mười hai",
"Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
            ],
            AmPm : ["am","pm","buổi buổi chiềung","下午"],
            S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
            srcformat: 'Y-m-d',
            newformat: 'Y-m-d',
            parseRe : /[#%\\\/:_;.,\t\s-]/,
            masks : {
                // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
                // and see http://docs.jquery.com/UI/Datepicker/formatDate
                // and https://github.com/jquery/globalize#dates for alternative formats used frequently
                // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
                // information about date, time, numbers and currency formats used in different countries
                // one should just convert the information in PHP format
                ISO8601Long:"Y-m-d H:i:s",
                ISO8601Short:"Y-m-d",
                // short date:
                //    n - Numeric representation of a month, without leading zeros
                //    j - Day of the month without leading zeros
                //    Y - A full numeric representation of a year, 4 digits
                // example: 3/1/2012 which means 1 March 2012
                ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
                // long date:
                //    l - A full textual representation of the day of the week
                //    F - A full textual representation of a month
                //    d - Day of the month, 2 digits with leading zeros
                //    Y - A full numeric representation of a year, 4 digits
                LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
                // long date with long time:
                //    l - A full textual representation of the day of the week
                //    F - A full textual representation of a month
                //    d - Day of the month, 2 digits with leading zeros
                //    Y - A full numeric representation of a year, 4 digits
                //    g - 12-hour format of an hour without leading zeros
                //    i - Minutes with leading zeros
                //    s - Seconds, with leading zeros
                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
                // month day:
                //    F - A full textual representation of a month
                //    d - Day of the month, 2 digits with leading zeros
                MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
                // short time (without seconds)
                //    g - 12-hour format of an hour without leading zeros
                //    i - Minutes with leading zeros
                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
                // long time (with seconds)
                //    g - 12-hour format of an hour without leading zeros
                //    i - Minutes with leading zeros
                //    s - Seconds, with leading zeros
                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
                SortableDateTime: "Y-m-d\\TH:i:s",
                UniversalSortableDateTime: "Y-m-d H:i:sO",
                // month with year
                //    Y - A full numeric representation of a year, 4 digits
                //    F - A full textual representation of a month
                YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
            },
            reformatAfterEdit : false,
			userLocalTime : false
        },
        baseLinkUrl: '',
        showAction: '',
        target: '',
        checkbox : {disabled:true},
        idName : 'id'
    },
	colmenu : {
		sortasc : "Phân loại tuần tự",
		sortdesc : "Sắp xếp",
		columns : "Danh sách",
		filter : "lọc",
		grouping : "Phân loại",
		ungrouping : "Hủy phân loại",
		searchTitle : "Tìm thấy:",
		freeze : "Đông",
		unfreeze : "Hủy",
		reorder : "sắp xếp lại",
		hovermenu: "Click for column quick actions"
	}
};
}));
