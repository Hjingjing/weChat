/**
 * Created by 静静 on 2016/10/19.
 */
/**
 * 请假条列表界面
 */

//导航栏
$(document).ready(function () {
    $(".weui-navbar__item").on("click", function () {
        $(this).addClass("weui-bar__item_on").siblings(".weui-bar__item_on").removeClass("weui-bar__item_on");
    });
});

var list;
// var list2;

//点击表格每一行，储存假条信息，跳转
function showPage(index) {
    var str = JSON.stringify(list[index]);
    localStorage.setItem('local', str);//存到本地
    window.location.href = "student_leava_Info.html";
}

//获取请假条信息
myApi.getNotes({}, 0, 10000, function (err, data) {
    if (err) {
        alert(err.message);
    } else {
        console.log(data);
        list = data.contents;

        //所有的表格
        data.contents.forEach(function (item, index) {

            //判断假别，转为汉语
            var types;
            switch (item.type) {
                case "affair":
                    types = "事假";
                    break;
                case "sick":
                    types = "病假";
                    break;
                case "meeting":
                    types = "周会假";
                    break;
                case "practice":
                    types = "实习假";
                    break;
            }

            //判断假条状态，给状态一个颜色
            var state;
            switch (item.state) {
                case "pending":
                    state = "待审核";
                    $("#row").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd' > <label  >" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div><div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div>  <div class='weui-cell__bd'> <label class='tutor_list_label' style='border: 2px solid #ffbe00;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
                    break;
                case "forbidden":
                    state = "已拒绝";
                    $("#row").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div> <div class='weui-cell__bd' > <label class='tutor_list_label' style='border: 2px solid #f43530;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
                    break;
                case "approved":
                    state = "已通过";
                    $("#row").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div> <div class='weui-cell__bd'> <label class='tutor_list_label' style='border: 2px solid #9b9b9b;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
                    break;
                case "finished":
                    state = "已销假";
                    $("#row").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div>  <div class='weui-cell__bd'> <label class='tutor_list_label' style='border: 2px solid #1aad19;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
                    break;
            }

        });
        //待审核表格
        data.contents.forEach(function (item, index) {

            //判断假别，转为汉语
            var types;
            switch (item.type) {
                case "affair":
                    types = "事假";
                    break;
                case "sick":
                    types = "病假";
                    break;
                case "meeting":
                    types = "周会假";
                    break;
                case "practice":
                    types = "实习假";
                    break;
            }

            //将假条状态改为汉字
            var state;
            switch (item.state) {
                case "pending":
                    state = "待审核";
                    break;
                case "forbidden":
                    state = "已拒绝";
                    break;
                case "approved":
                    state = "待销假";
                    break;
                case "finished":
                    state = "已销假";
                    break;
            }
            if (item.state == "pending") {
                $("#pendingRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd' > <label  >" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div><div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div>  <div class='weui-cell__bd'> <label class='tutor_list_label' style='border: 2px solid #ffbe00;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
            }
        });

        //待销假表格
        data.contents.forEach(function (item, index) {

            //判断假别，转为汉语
            var types;
            switch (item.type) {
                case "affair":
                    types = "事假";
                    break;
                case "sick":
                    types = "病假";
                    break;
                case "meeting":
                    types = "周会假";
                    break;
                case "practice":
                    types = "实习假";
                    break;
            }

            //将假条状态改为汉字
            var state;
            switch (item.state) {
                case "pending":
                    state = "待审核";
                    break;
                case "forbidden":
                    state = "已拒绝";
                    break;
                case "approved":
                    state = "待销假";
                    break;
                case "finished":
                    state = "已销假";
                    $("#finishedRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div>  <div class='weui-cell__bd'> <label class='tutor_list_label' style='border: 2px solid #1aad19;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
                    break;
            }
            if (item.state == "approved") {
                $("#approvedRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div> <div class='weui-cell__bd'> <label class='tutor_list_label' style='border: 2px solid #9b9b9b;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
            }
        });
        //已销假表格
        data.contents.forEach(function (item, index) {

            //判断假别，转为汉语
            var types;
            switch (item.type) {
                case "affair":
                    types = "事假";
                    break;
                case "sick":
                    types = "病假";
                    break;
                case "meeting":
                    types = "周会假";
                    break;
                case "practice":
                    types = "实习假";
                    break;
            }

            //将假条状态改为汉字
            var state;
            switch (item.state) {
                case "pending":
                    state = "待审核";
                    break;
                case "forbidden":
                    state = "已拒绝";
                    break;
                case "approved":
                    state = "待销假";
                    break;
                case "finished":
                    state = "已销假";
                    break;
            }
            if (item.state == "finished") {
                $("#finishedRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div>  <div class='weui-cell__bd'> <label class='tutor_list_label' style='border: 2px solid #1aad19;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
            }
        });
        //已拒绝表格
        data.contents.forEach(function (item, index) {

            //判断假别，转为汉语
            var types;
            switch (item.type) {
                case "affair":
                    types = "事假";
                    break;
                case "sick":
                    types = "病假";
                    break;
                case "meeting":
                    types = "周会假";
                    break;
                case "practice":
                    types = "实习假";
                    break;
            }

            //将假条状态改为汉字
            var state;
            switch (item.state) {
                case "pending":
                    state = "待审核";
                    break;
                case "forbidden":
                    state = "已拒绝";
                    break;
                case "approved":
                    state = "待销假";
                    break;
                case "finished":
                    state = "已销假";
                    break;
            }
            if (item.state == "forbidden") {
                $("#forbiddenRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div> <div class='weui-cell__bd' > <label class='tutor_list_label' style='border: 2px solid #f43530;border-radius: 20%;padding: 1px;'>" + state + "</label> </div> </div>");
            }
        });

        $("#pendingRow").hide();
        $("#approvedRow").hide();
        $("#finishedRow").hide();
        $("#forbiddenRow").hide();
    }
});

//显示所有
function allRow() {
    $("#row").show();
    $("#pendingRow").hide();
    $("#approvedRow").hide();
    $("#finishedRow").hide();
    $("#forbiddenRow").hide();
}
//显示待审核
function pendingRow() {
    $("#row").hide();
    $("#pendingRow").show();
    $("#approvedRow").hide();
    $("#finishedRow").hide();
    $("#forbiddenRow").hide();
}
//显示待销假
function approvedRow() {
    $("#row").hide();
    $("#pendingRow").hide();
    $("#approvedRow").show();
    $("#finishedRow").hide();
    $("#forbiddenRow").hide();
}
//显示已销假
function finishedRow() {
    $("#row").hide();
    $("#pendingRow").hide();
    $("#approvedRow").hide();
    $("#finishedRow").show();
    $("#forbiddenRow").hide();
}
//显示已拒绝
function forbiddenRow() {
    $("#row").hide();
    $("#pendingRow").hide();
    $("#approvedRow").hide();
    $("#finishedRow").hide();
    $("#forbiddenRow").show();
}
