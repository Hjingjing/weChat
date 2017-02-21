/**
 * Created by 静静 on 2016/11/26.
 */

//获取本地存储的请假条各项信息
localStorage.getItem('local');
var str1 = localStorage.getItem('local');
var obj = JSON.parse(str1);

//时间转化格式
//开始时间
var fromTime = obj.fromTime;
var oDate = new Date(fromTime),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oHour = oDate.getUTCHours(),
    oMin = oDate.getMinutes(),
    FromTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin);//最后拼接时

//结束时间
var toTime = obj.toTime;
var pDate = new Date(toTime),
    pYear = pDate.getFullYear(),
    pMonth = oDate.getMonth() + 1,
    pDay = pDate.getDate(),
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

//销假时间
var finishedTime = obj.finishedTime;
var sDate = new Date(finishedTime),
    sYear = sDate.getFullYear(),
    sMonth = sDate.getMonth() + 1,
    sDay = sDate.getDate(),
    sHour = sDate.getHours(),
    sMin = sDate.getMinutes(),
    FinishedTime = sYear + '/' + getzf(sMonth) + '/' + getzf(sDay) + ' ' + getzf(sHour) + ':' + getzf(sMin);//最后拼接时间

//补0操作
function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}

//获取的假别改为中文
var types = obj.type;
switch (obj.type) {
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

//将是否离校一栏转化为汉字显示
var leaveSchools;
if (obj.leaveSchool == true) {
    leaveSchools = "是";
} else {
    leaveSchools = "否";
}

//将是否告知父母一栏转化为汉字显示
var toldParents;
if (obj.toldParents == true) {
    toldParents = "是";
} else {
    toldParents = "否";
}

//实习假一栏是否显示
if (obj.type == "实习假") {
    document.getElementById("PracticeInfo").style.display = "block";
}

//将各项信息填充到表格
document.getElementById('name').value = obj.name;
document.getElementById('clazz').value = obj.clazz;
document.getElementById('uid').value = obj.uid;
document.getElementById('telephone').value = obj.telephone;
document.getElementById('fatherTelephone').value = obj.fatherTelephone;
document.getElementById('motherTelephone').value = obj.motherTelephone;
document.getElementById('type').value = types;
document.getElementById('reason').value = obj.reason;
document.getElementById('fromTime').value = FromTime;
document.getElementById('toTime').value = ToTime;
document.getElementById('leaveSchool').value = leaveSchools;
document.getElementById('toldParents').value = toldParents;
document.getElementById('guideName').value = obj.guideName;
document.getElementById('guideTelephone').value = obj.guideTelephone;
document.getElementById('commitTime').value = CommitTime;
document.getElementById('handleTime').value = HandleTime;
document.getElementById('finishedTime').value = FinishedTime;
document.getElementById('practiceUnit').value = obj.practiceUnit;
document.getElementById('practiceJob').value = obj.practiceJob;
document.getElementById('practiceAddress').value = obj.practiceAddress;
document.getElementById('practiceLinkmanNameA').value = obj.practiceLinkmanNameA;
document.getElementById('practiceLinkmanJobA').value = obj.practiceLinkmanJobA;
document.getElementById('practiceLinkmanTelA').value = obj.practiceLinkmanTelA;
document.getElementById('practiceLinkmanNameB').value = obj.practiceLinkmanNameB;
document.getElementById('practiceLinkmanJobB').value = obj.practiceLinkmanJobB;
document.getElementById('practiceLinkmanTelB').value = obj.practiceLinkmanTelB;

//点击“同意”按钮:
function success() {

    //更新请假条状态信息
    myApi.note.updateState(obj.lid, "approved", function (err, data) {
        if (err) {
            alert(err.message);
        } else {

            document.getElementById("handleTime").style.display = "block";
            //跳转到成功页面
            window.location.href = "tutor_leave_success.html";

        }
    });
}

//点击“拒绝”按钮
function foridden() {

    //更新请假条状态信息
    myApi.note.updateState(obj.lid, "forbidden", function (err, data) {
        if (err) {
            alert(err.message);
        } else {

            //跳转到成功页面
            window.location.href = "tutor_leave_success.html";
        }
    });
}

//点击“销假”按钮
function finished() {

    //更新请假条状态信息
    myApi.note.updateState(obj.lid, "finished", function (err, data) {
        if (err) {
            alert(err.message);
        } else {

            //跳转到成功页面
            window.location.href = "tutor_leave_success.html";
        }
    });
}

//假条状态为：待审核，没有“处理时间”显示   同意拒绝按钮可用
//            已同意、已拒绝、已销假，有“处理时间”显示   同意拒绝销假按钮不可用
if ((obj.state == "approved") || (obj.state == "forbidden") || (obj.state == "finished")) {
    document.getElementById("handleTime").style.display = "block";
    document.getElementById("successBtn").removeAttribute("href", "javascript:success();");
    document.getElementById("forbiddenBtn").removeAttribute("href", "javascript:forbidden();");
}

//假条状态为：待审核，已拒绝，待销假时候，销假按钮不可以用
if ( (obj.state == "pending")||(obj.state == "forbidden") || (obj.state == "finished")) {
    document.getElementById("finishedBtn").removeAttribute("href", "javascript:finished();");
}


//假条状态为：已销假，有“销假时间”显示
if (obj.state == "finished") {
    document.getElementById("finishedTime").style.display = "block";
}

//当假条状态为“拒绝”时，不显示销假时间
if ((obj.state == "forbidden")) {
    document.getElementById("finishedTimeRow").innerHTML = "";
}






































































































