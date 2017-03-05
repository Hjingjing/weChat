/**
 * Created by 静静 on 2016/10/19.
 */

/*调用api.js,对接*/
api.token.setToken("2e6119eabfdd0e6f293a8d5c8412ef66");
console.log(api.student);

//导航栏样式变换
$(document).ready(function () {
    $(".weui-navbar__item").on("click", function () {
        $(this).addClass("weui-bar__item_on").siblings(".weui-bar__item_on").removeClass("weui-bar__item_on");
    });
});

//点击表格每一行，储存假条信息，跳转
var lists;
function showPage(index) {
    var str = JSON.stringify(lists[index]);
    localStorage.setItem('local', str);//存到本地
    window.location.href = "student_leava_Info.html";
}

//api对接，获取请假条列表信息
api.student.getNotes({}, {}, 1, 1000).then(function (data) {

    /*获取每一个页面的id*/
    var pendingOn = $("#pending").attr("id");
    var forbiddenOn = $("#forbidden").attr("id");
    var approvedOn = $("#approved").attr("id");
    var finishedOn = $("#finished").attr("id");

    /*数组中每一个元素是对象*/
    lists = data.list;
    console.log(lists);

    /*根据页面按钮id值匹配遍历的state值*/
    /*渲染不同页面*/
    lists.forEach(function (item, index) {

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

        var states;
        /*判断假条状态,渲染列表*/
        if (pendingOn == item.state) {

            states = "待审核";
            $("#pendingRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd' > <label  >" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div><div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div>  <div class='weui-cell__bd'> <label class='tutor_list_label'>" + states + "</label> </div> </div>");
        } else if (forbiddenOn == item.state) {

            states = "已拒绝";
            $("#forbiddenRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div> <div class='weui-cell__bd' > <label class='tutor_list_label'>" + states + "</label> </div> </div>");
        } else if (forbiddenOn == item.state) {

            states = "已通过";
            $("#approvedRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div> <div class='weui-cell__bd'> <label class='tutor_list_label'>" + states + "</label> </div> </div>");
        } else if (finishedOn == item.state) {

            states = "已销假";
            $("#finishedRow").append("<div class='weui-cell allrow' onclick='showPage(" + index + ");' style='padding-left: 1px;padding-right: 1px'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd' style='width:10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'> <label>" + item.reason + "</label> </div> <div class='weui-cell__bd' > <label class='tutor_list_label'>" + states + "</label> </div> </div>");
        }
    })
});

/*显示所有列表*/
function allRow() {
    $("#row").show();
    $("#pendingRow").show();
    $("#forbiddenRow").show();
    $("#approvedRow").show();
    $("#finishedRow").show();
}

/*待审核表格*/
function pendingRow() {
    $("#row").hide();
    $("#pendingRow").show();
    $("#forbiddenRow").hide();
    $("#approvedRow").hide();
    $("#finishedRow").hide();
}

/*已拒绝表格*/
function forbiddenRow() {
    $("#row").hide();
    $("#pendingRow").hide();
    $("#forbiddenRow").show();
    $("#approvedRow").hide();
    $("#finishedRow").hide();
}

/*已同意表格*/
function approvedRow() {
    $("#row").hide();
    $("#pendingRow").hide();
    $("#forbiddenRow").hide();
    $("#approvedRow").show();
    $("#finishedRow").hide();
}

/*已销假表格*/
function finishedRow() {
    $("#row").hide();
    $("#pendingRow").hide();
    $("#forbiddenRow").hide();
    $("#approvedRow").hide();
    $("#finishedRow").show();
}


