/**
 * Created by 静静 on 2016/10/6.
 */

//是否离校，点击是，填写离校去向
function ifLeaveSchool() {
    var leaveSchool = document.getElementById('leaveSchool');
    var toPlaceDiv = document.getElementById('toPlaceDiv');
    toPlaceDiv.style.display = leaveSchool.value == "true" ? "block" : "none";
}

//假别为实习假时，弹出实习部分信息
function ifPractice() {
    var type = document.getElementById('type');
    var practiceInfo = document.getElementById('practiceInfo');
    practiceInfo.style.display = type.value == "practice" ? "block" : "none";
}

// 电话号码检测
function phoneTest() {
    var flag = [];
    var phoneNumber = document.getElementsByClassName('phone-number');
    for (var i = 0; i < phoneNumber.length; i++) {
        var phone = phoneNumber[i].value;
        if (phone.trim() == "") {
            flag[i] = 1;
        }
        else {
            //若填写了电话号码就要保证正确
            if ((/^1[34578]\d{9}$/).test(phone)) {
                phoneNumber[i].style.color = "#000";
                flag[i] = 1;
            } else {
                phoneNumber[i].style.color = "red";
                flag[i] = 0;
            }
        }
    }
    return flag;
}

//post请假条信息
function onSubmit() {

    //验证每一项不为空
    function ifItemNull() {

        var reason = document.getElementById("reason");
        if (reason.value.trim() == "") {
            alert('请填写请假原因');
            return 0;
        }

        var fromTime = document.getElementById("fromTime");
        if (fromTime.value.trim() == "") {
            alert('请填写开始时间');
            return 0;
        }

        var toTime = document.getElementById("toTime");
        if (toTime.value.trim() == "") {
            alert('请填写结束时间');
            return 0;
        }

        //判断是否离校，如果是，填写离校去向
        var ifLeaveSchool = document.getElementById("leaveSchool");
        if (ifLeaveSchool.value == "true") {
            var toPlace = document.getElementById("toPlace");
            if (toPlace.value.trim() == "") {
                alert('请填写离校去向');
                return 0;
            }
        }

        //判断是否为实习假，如果是，判断实习信息是否空，为空继续填写
        var ifPractice = document.getElementById("type");
        if (ifPractice.value == "实习假") {

            var practiceUnit = document.getElementById("practiceUnit");
            if (practiceUnit.value.trim() == "") {
                alert('请填写实习单位');
                return 0;
            }

            var practiceJob = document.getElementById("practiceJob");
            if (practiceJob.value.trim() == "") {
                alert('请填写实习职位');
                return 0;
            }

            var practiceAddress = document.getElementById("practiceAddress");
            if (practiceAddress.value.trim() == "") {
                alert('请填写实习地址');
                return 0;
            }

            var practiceLinkmanNameA = document.getElementById("practiceLinkmanNameA");
            if (practiceLinkmanNameA.value.trim() == "") {
                alert('请填写单位联系人1');
                return 0;
            }

            var practiceLinkmanJobA = document.getElementById("practiceLinkmanJobA");
            if (practiceLinkmanJobA.value.trim() == "") {
                alert('请填写联系人1职位');
                return 0;
            }

            var practiceLinkmanTelA = document.getElementById("practiceLinkmanTelA");
            if (practiceLinkmanTelA.value.trim() == "") {
                alert('请填写联系人1电话');
                return 0;
            }

            var practiceLinkmanNameB = document.getElementById("practiceLinkmanNameB");
            if (practiceLinkmanNameB.value.trim() == "") {
                alert('请填写单位联系人2');
                return 0;
            }

            var practiceLinkmanJobB = document.getElementById("practiceLinkmanJobB");
            if (practiceLinkmanJobB.value.trim() == "") {
                alert('请填写联系人2职位');
                return 0;
            }

            var practiceLinkmanTelB = document.getElementById("practiceLinkmanTelB");
            if (practiceLinkmanTelB.value.trim() == "") {
                alert('请填写联系人2电话');
                return 0;
            }

        }

        return true;

    }

    //事假，病假，周会假，假期小于三天
    //实习假时间不限制
    var types = document.getElementById("type");
    var timestamp = Date.parse(new Date());//当前时间戳

    if ((types.value == "affair") || (types.value == "sick") || (types.value == "meeting")) {

        var toTimes=document.getElementById("toTime");
        var fromTimes=document.getElementById("fromTime");
        var selectToTimes = new Date(toTimes.value).getTime();//结束时间毫秒数
        var selectFromTimes = new Date(fromTimes.value).getTime();//开始时间毫秒数

        var times = selectToTimes - selectFromTimes;

        console.log(times);
        //开始时间必须为当前时间之前
        if (timestamp > selectFromTimes) {

            alert("请假开始时间不能早于当前时间");
            return false;

        }

        //结束时间大于当前时间
        if (timestamp > selectToTimes) {

            alert("请假结束时间不能早于当前时间");
            return false;

        }
        
        //请假时间为三天以内
        if (times > 259200000) {
            alert("请假时间应为三天以内");
            return false;
        }

    }

    //将页面信息存储在数组中
    var note = {};
    note.reason = document.getElementById('reason').value;//申请理由
    note.fromTime = new Date(document.getElementById('fromTime').value).getTime();//开始时间
    note.toTime = new Date(document.getElementById('toTime').value).getTime();//结束时间
    note.type = document.getElementById('type').value;//假别
    note.leaveSchool = document.getElementById('leaveSchool').value;//是否离校
    note.toPlace = document.getElementById('toPlace').value;//离校去向
    note.toldParents = document.getElementById('toldParents').value;//是否告知家长
    note.practiceUnit = document.getElementById('practiceUnit').value;//实习单位
    note.practiceJob = document.getElementById('practiceJob').value;//实习职位
    note.practiceAddress = document.getElementById('practiceAddress').value;//实习地址
    note.practiceLinkmanNameA = document.getElementById('practiceLinkmanNameA').value;//单位联系人1
    note.practiceLinkmanJobA = document.getElementById('practiceLinkmanJobA').value;//联系人1职位
    note.practiceLinkmanTelA = document.getElementById('practiceLinkmanTelA').value;//联系人1电话
    note.practiceLinkmanNameB = document.getElementById('practiceLinkmanNameB').value;//单位联系人2
    note.practiceLinkmanJobB = document.getElementById('practiceLinkmanJobB').value;//联系人2职位
    note.practiceLinkmanTelB = document.getElementById('practiceLinkmanTelB').value;//联系人2电话

    // 判断每一项是否填写
    var eachItem = ifItemNull();
    if (eachItem == true) {
        myApi.postNote(note, function (err, data) {
            if (err) {
                alert(err.message);
            } else {
                window.location.href = "student_leave_success.html";
            }
        });
    }
}


