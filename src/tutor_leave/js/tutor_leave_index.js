/**
 * Created by 静静 on 2016/11/2.
 */

//点击每一行执行的函数
var list;
function tutor_leave_info(index) {
    myApi.note.getNotes({}, 0, 10000, function (err, data) {
        if (err) {
            alert(err.message);
        } else {
            //将获取的假条信息储存在列表中
            list = data.contents;
            var str = JSON.stringify(list[index]);
            localStorage.setItem('local', str);//存到本地
            console.log(str);
            window.location.href = "tutor_leave_info.html";
        }
    });
}

//根据开始时间进行筛选
function changeFromTimes() {

    myApi.note.getNotes({}, 0, 1000, function (err, data) {
        if (err) {
            alert(err.message);
        } else {

            document.getElementById("table").innerHTML = "";

            data.contents.forEach(function (item, index) {

                var fromTimes = item.fromTime;//毫秒数
                var toTimes = item.toTime;//毫秒数
                var selectFromTimes = document.getElementById("fromTime");//选择的开始日期
                var selectToTimes = document.getElementById("toTime");//选择的结束时间
                var selectFromTime = new Date(selectFromTimes.value).getTime();//开始时间转化为毫秒数
                var selectToTime = new Date(selectToTimes.value).getTime();//结束时间转化为毫秒数

                if (selectFromTime < fromTimes) {

                    //获取的假别改为中文
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

                    //状态转为汉语
                    var state;
                    switch (item.state) {
                        case "pending":
                            state = "待处理";
                            break;
                        case "forbidden":
                            state = "已拒绝";
                            break;
                        case "approved":
                            state = "已批准";
                            break;
                        case "finished":
                            state = "已销假";
                            break;
                    }
                    $("#table").append("<div class='weui-cell tutor_list' onclick='tutor_leave_info(" + index + ");'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + item.clazz + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd'> <label class='tutor_list_label' >" + state + "</label> </div> </div>");

                }
            });
        }
    });
}

//根据结束时间进行筛选
function changeToTime() {
    myApi.note.getNotes({}, 0, 1000, function (err, data) {
        if (err) {
            alert(err.message);
        } else {

            document.getElementById("table").innerHTML = "";

            data.contents.forEach(function (item, index) {

                var fromTimes = item.fromTime;//毫秒数
                var toTimes = item.toTime;//毫秒数
                var selectFromTimes = document.getElementById("fromTime");//选择的开始日期
                var selectToTimes = document.getElementById("toTime");//选择的结束时间
                var selectFromTime = new Date(selectFromTimes.value).getTime();//开始时间转化为毫秒数
                var selectToTime = new Date(selectToTimes.value).getTime();//结束时间转化为毫秒数

                if ((selectFromTime < fromTimes) && (selectToTime > toTimes)) {

                    //获取的假别改为中文
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

                    //状态转为汉语
                    var state;
                    switch (item.state) {
                        case "pending":
                            state = "待处理";
                            break;
                        case "forbidden":
                            state = "已拒绝";
                            break;
                        case "approved":
                            state = "已批准";
                            break;
                        case "finished":
                            state = "已销假";
                            break;
                    }

                    $("#table").append("<div class='weui-cell tutor_list' onclick='tutor_leave_info(" + index + ");'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + item.clazz + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd'> <label class='tutor_list_label' >" + state + "</label> </div> </div>");

                }
            });
        }
    });
}

//初始界面
//清屏
document.getElementById("table").innerHTML = "";

var states = document.getElementById("state").value;
var types = document.getElementById("type").value;
var leaveSchools = document.getElementById("leaveSchool").value;
var limits = {};

if (states == "all") {

} else {
    limits.state = states;
}

if (types == "all") {

} else {
    limits.type = types;
}

if (leaveSchools == "all") {

} else {
    limits.leaveSchool = leaveSchools;
}

myApi.note.getNotes(limits, 0, 1000, function (err, data) {
    if (err) {
        alert(err.message);
    } else {
        console.log(data);
        data.contents.forEach(function (item, index) {
            //获取的假别改为中文
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
            //状态转为汉语
            var state;
            switch (item.state) {
                case "pending":
                    state = "待处理";
                    break;
                case "forbidden":
                    state = "已拒绝";
                    break;
                case "approved":
                    state = "已批准";
                    break;
                case "finished":
                    state = "已销假";
                    break;
            }
            $("#table").append("<div class='weui-cell tutor_list' onclick='tutor_leave_info(" + index + ");'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + item.clazz + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd'> <label class='tutor_list_label' >" + state + "</label> </div> </div>");
        });
    }
});

//根据三个状态的筛选函数
function select() {
    //清屏
    document.getElementById("table").innerHTML = "";

    var states = document.getElementById("state").value;
    var types = document.getElementById("type").value;
    var leaveSchools = document.getElementById("leaveSchool").value;
    var limits = {};

    if (states == "all") {

    } else {
        limits.state = states;
    }

    if (types == "all") {

    } else {
        limits.type = types;
    }

    if (leaveSchools == "all") {

    } else {
        limits.leaveSchool = leaveSchools;
    }

    myApi.note.getNotes(limits, 0, 1000, function (err, data) {
        if (err) {
            alert(err.message);
        } else {
            console.log(data);
            data.contents.forEach(function (item, index) {
                //获取的假别改为中文
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
                //状态转为汉语
                var state;
                switch (item.state) {
                    case "pending":
                        state = "待处理";
                        break;
                    case "forbidden":
                        state = "已拒绝";
                        break;
                    case "approved":
                        state = "已批准";
                        break;
                    case "finished":
                        state = "已销假";
                        break;
                }
                $("#table").append("<div class='weui-cell tutor_list' onclick='tutor_leave_info(" + index + ");'> <div class='weui-cell__bd'> <label>" + item.name + "</label> </div> <div class='weui-cell__bd'> <label>" + item.clazz + "</label> </div> <div class='weui-cell__bd'> <label>" + types + "</label> </div> <div class='weui-cell__bd'> <label class='tutor_list_label' >" + state + "</label> </div> </div>");
            });
        }
    });
}

//更改请假条状态获取列表
function changeStates() {
    select();
}

//更改请假条假别获取列表
function changeTypes() {
    select();
}

//更改请假条是否离校获取列表
function changeLeaveSchools() {
    select();
}