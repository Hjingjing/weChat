/**
 * Created by 静静 on 2016/11/26.
 */

/*调用api.js,对接*/
api.token.setToken("2e6119eabfdd0e6f293a8d5c8412ef66");
console.log(api.student);

localStorage.getItem('local');
var str2 = localStorage.getItem('local');
var obj = JSON.parse(str2);
//时间转化格式
//开始时间
var fromTime = obj.fromTime;
var oDate = new Date(fromTime),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate()-1,
    oHour = oDate.getUTCHours(),
    oMin = oDate.getMinutes(),
    FromTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin);//最后拼接时
//结束时间
var toTime = obj.toTime;
var pDate = new Date(toTime),
    pYear = pDate.getFullYear(),
    pMonth = oDate.getMonth() + 1,
    pDay = pDate.getDate()-1,
    pHour = pDate.getUTCHours(),
    pMin = pDate.getMinutes(),
    ToTime = pYear + '/' + getzf(pMonth) + '/' + getzf(pDay) + ' ' + getzf(pHour) + ':' + getzf(pMin);//最后拼接时
//提交时间
var commitTime = obj.commitTime;
var qDate = new Date(commitTime),
    qYear = qDate.getFullYear(),
    qMonth = qDate.getMonth() + 1,
    qDay = qDate.getDate(),
    qHour = qDate.getHours(),
    qMin = qDate.getMinutes(),
    CommitTime = qYear + '/' + getzf(qMonth) + '/' + getzf(qDay) + ' ' + getzf(qHour) + ':' + getzf(qMin);//最后拼接时间

//处理时间
var handleTime = obj.handleTime;
var rDate = new Date(handleTime),
    rYear = rDate.getFullYear(),
    rMonth = rDate.getMonth() + 1,
    rDay = rDate.getDate(),
    rHour = rDate.getHours(),
    rMin = rDate.getMinutes(),
    HandleTime = rYear + '/' + getzf(rMonth) + '/' + getzf(rDay) + ' ' + getzf(rHour) + ':' + getzf(rMin);//最后拼接时间

//补0操作
function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}

//离校时，显示离校去向
if (obj.leaveSchool == true) {
    document.getElementById("toPlaceDiv").style.display = "block";
}

//假别为实习假，有实习信息可以填写
if (obj.type == "practice") {
    document.getElementById("PracticeInfo").style.display = "block";
}

//对象值给标签
document.getElementById('name').value = obj.name;
document.getElementById('clazz').value = obj.clazz;
document.getElementById('uid').value = obj.uid;
document.getElementById('telephone').value = obj.telephone;
document.getElementById('fatherTelephone').value = obj.fatherTelephone;
document.getElementById('motherTelephone').value = obj.motherTelephone;
document.getElementById('type').value = obj.type;
document.getElementById('reason').value = obj.reason;
document.getElementById('fromTime').value = FromTime;
document.getElementById('toTime').value = ToTime;
document.getElementById('leaveSchool').value = obj.leaveSchool;
document.getElementById('toPlace').value = obj.toPlace;
document.getElementById('toldParents').value = obj.toldParents;
document.getElementById('guideName').value = obj.guideName;
document.getElementById('guideTelephone').value = obj.guideTelephone;
document.getElementById('commitTime').value = CommitTime;
document.getElementById('handleTime').value = HandleTime;
document.getElementById('practiceUnit').value = obj.practiceUnit;
document.getElementById('practiceJob').value = obj.practiceJob;
document.getElementById('practiceAddress').value = obj.practiceAddress;
document.getElementById('practiceLinkmanNameA').value = obj.practiceLinkmanNameA;
document.getElementById('practiceLinkmanJobA').value = obj.practiceLinkmanJobA;
document.getElementById('practiceLinkmanTelA').value = obj.practiceLinkmanTelA;
document.getElementById('practiceLinkmanNameB').value = obj.practiceLinkmanNameB;
document.getElementById('practiceLinkmanJobB').value = obj.practiceLinkmanJobB;
document.getElementById('practiceLinkmanTelB').value = obj.practiceLinkmanTelB;

//如果是批准或拒绝状态，显示处理时间
if ((obj.state == "approved") || (obj.state == "forbidden")) {
    document.getElementById("handleTime").style.display = "block";
}

//点击返回修改，选项可用
function eraser() {
    if (obj.state == "pending") {

        document.getElementById("type").removeAttribute("disabled");//假别可选
        document.getElementById("leaveSchool").removeAttribute("disabled");//是否离校可选
        document.getElementById("toPlace").removeAttribute("readonly");//离校去向可选
        document.getElementById("reason").removeAttribute("readonly");//原因可选
        document.getElementById("fromTime").removeAttribute("readonly");//开始时间可选择
        document.getElementById("toTime").removeAttribute("readonly");//结束时间可选择
        document.getElementById("toldParents").removeAttribute("disabled");//是否告知家长可选
        document.getElementById("practiceUnit").removeAttribute("readonly");//实习单位可选
        document.getElementById("practiceJob").removeAttribute("readonly");//实习职位可选
        document.getElementById("practiceAddress").removeAttribute("readonly");//实习地址可选
        document.getElementById("practiceLinkmanNameA").removeAttribute("readonly");//实习单位联系人1可选
        document.getElementById("practiceLinkmanJobA").removeAttribute("readonly");//实习联系人1职位可选
        document.getElementById("practiceLinkmanTelA").removeAttribute("readonly");//实习联系人1电话可选
        document.getElementById("practiceLinkmanNameB").removeAttribute("readonly");//实习单位联系人2可选
        document.getElementById("practiceLinkmanJobB").removeAttribute("readonly");//实习联系人2职位可选
        document.getElementById("practiceLinkmanTelB").removeAttribute("readonly");//实习联系人2电话可选

        document.getElementById("reason").focus();//光标显示在原因一栏

        //清除提交时间
        document.getElementById("commitTime").value = "";

        //清除开始时间
        document.getElementById("fromTime").value = "";
        //点击开始时间，时间可以重新填写
        document.getElementById("fromTime").setAttribute("type", "datetime-local");

        //清除结束时间
        document.getElementById("toTime").value = "";
        //点击结束时间，时间可以重新填写
        document.getElementById("toTime").setAttribute("type", "datetime-local");

        //提交按钮可用
        document.getElementById("commit").setAttribute("href","javascript:commit();")
    }
}

//假条为待审核状态时，修改、删除按钮可用，提交按钮不可用
//假条为已通过，已拒绝，已销假时，删除按钮，提交按钮，修改按钮不可用
if (obj.state == "pending") {
    document.getElementById("commit").removeAttribute("href", "javascript:commit()");
} else {
    document.getElementById("delete").removeAttribute("href", "javascript:deleteTiao()");
    document.getElementById("commit").removeAttribute("href", "javascript:commit()");
    document.getElementById("eraser").setAttribute("href", "javascript:eraser()");
}


//请假类别变化时，是否显示实习信息一栏目
function changeTypes() {
    var changeTypes = document.getElementById("type");
    if ((changeTypes.value == "affair") || (changeTypes.value == "sick") || (changeTypes.value == "meeting")) {
        document.getElementById("PracticeInfo").style.display = "none";
    } else {
        document.getElementById("PracticeInfo").style.display = "block";
    }
}

//是否离校变化时，是否显示离校信息一栏目
function changeLeaveSchools() {
    var changeLeaveSchools = document.getElementById("leaveSchool");
    if (changeLeaveSchools.value == "true") {
        document.getElementById("toPlaceDiv").style.display = "block";
    } else {
        document.getElementById("toPlaceDiv").style.display = "none";
    }
}

//点击提交，提交数据
function commit() {

    /*调用api,对接,删去原有的假条信息*/
    api.student.deleteNote(obj.lid).then(function (data) {

    });

    // 封装id
    function $(id) {
        return document.getElementById(id);
    }

    var note = {};
    note.reason = $('reason').value;//申请理由
    note.fromTime = new Date($('fromTime').value).getTime();//开始时间
    note.toTime = new Date($('toTime').value).getTime();//结束时间
    note.type = $('type').value;//假别
    note.leaveSchool = $('leaveSchool').value;//是否离校
    note.toPlace = $('toPlace').value;//离校去向
    note.toldParents = $('toldParents').value;//是否告知家长
    //实习假部分
    note.practiceUnit = $('practiceUnit').value;//实习单位
    note.practiceJob = $('practiceJob').value;//实习职位
    note.practiceAddress = $('practiceAddress').value;//实习地址
    note.practiceLinkmanNameA = $('practiceLinkmanNameA').value;//单位联系人1
    note.practiceLinkmanJobA = $('practiceLinkmanJobA').value;//联系人1职位
    note.practiceLinkmanTelA = $('practiceLinkmanTelA').value;//联系人1电话
    note.practiceLinkmanNameB = $('practiceLinkmanNameB').value;//单位联系人2
    note.practiceLinkmanJobB = $('practiceLinkmanJobB').value;//联系人2职位
    note.practiceLinkmanTelB = $('practiceLinkmanTelB').value;//联系人2电话

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

    // 判断每一项是否填写
    var eachItem = ifItemNull();
    if (eachItem == true) {

        /*调用api,对接*/
        api.student.postNote(note,function (err,data) {
            if(err){
                alert(err.message);
            }else{

            }
        });
        window.location.href="student_leave_success.html";

    }
}

//删除假条
function deleteTiao() {

    /*调用api,对接*/
    api.student.deleteNote(obj.lid).then(function (data) {

                window.location.href = "student_leave_delete_success.html";
    });

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










































