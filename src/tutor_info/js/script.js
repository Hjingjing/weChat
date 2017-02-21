// 电话号码检测
function phoneTest() {
    var phoneNumber = document.getElementsByClassName('phone-number');
    for (var i = 0; i < phoneNumber.length; i++) {
        var phone = phoneNumber[i].value;
        if ((/^1[34578]\d{9}$/).test(phone)) {
            phoneNumber[i].style.color = "#000";
        } else {
            phoneNumber[i].style.color = "red";
        }
    }
}

// 邮政编码的验证
function codeCheck() {
    var code = document.getElementById('zipCode');
    var codeNumber = code.value;
    if (!(/^[1-9][0-9]{5}$/).test(codeNumber)) {
        code.style.color = "red";
    } else {
        code.style.color = "#000";
    }
}

// 封装
function $(id) {
    return document.getElementById(id);
}
function scrollTo(ele) {
    ele.onFocus = function (event) {
        console.log(event.layerY);
        document.body.scrollTop = Math.abs(event.layerY);
    }
    ele.focus();

}
     
    // 设置入学年份
    var date = new Date();
    var year = date.getFullYear();
    var select = $('enterYear');
    for (var i = 0; i < select.options.length; i++) {
        select.options[i].innerHTML = year;
        year--;
    }

            
//    获取学生基本信息
    var data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    // 基本信息
    $('name').value = data.name;
    $('uid').value = data.uid;
    $('sex').value = data.sex;
    $('idcard').value = data.idcard;
    $('nation').value = data.nation;
    var selectPolitical = $('politicalStatus');
    for (var i = 0; i < selectPolitical.options.length; i++) {
        if (selectPolitical.options[i].innerHTML == data.politicalStatus) {
            selectPolitical.options[i].selected = true;
            break;
        }
    }
    // 行政班级
    $('clazz').value = data.clazz;
    $('major').value = data.major;
    $('faculty').value = data.faculty;
    var selectType = $('type');
    for (var i = 0; i < selectType.options.length; i++) {
        if (selectType.options[i].innerHTML == data.type) {
            selectType.options[i].selected = true;
            break;
        }
    }
    $('lengthOfSchooling').value = data.lengthOfSchooling;
    var selectYear = $('enterYear');
    for (var i = 0; i < selectYear.options.length; i++) {
        if (selectYear.options[i].innerHTML == data.enterYear) {
            selectYear.options[i].selected = true;
            break;
        }
    }
    $('advisorName').value = data.advisorName;
    $('advisorTelephone').value = data.advisorTelephone;
    // 住宿及校园信息
    var selectZone = $('schoolZone');
    for (var i = 0; i < selectZone.options.length; i++) {
        if (selectZone.options[i].innerHTML == data.schoolZone) {
            selectZone.options[i].selected = true;
            break;
        }
    }
    $('dormitoryBuilding').value = data.dormitoryBuilding;
    $('dormitoryID').value = data.dormitoryID;
    $('schoolCardID').value = data.schoolCardID;
    $('icbcCard').value = data.icbcCard;
    $('icbcID').value = data.icbcID;
    // 联系方式
    $('telephone').value = data.telephone;
    $('vnetID').value = data.vnetID;
    $('qq').value = data.qq;
    $('wechat').value = data.wechat;
    $('weibo').value = data.weibo;
    $('height').value = data.height;
    // 生源信息
    $('studentSrcPlace').value = data.studentSrcPlace;
    var selectPoverty = $('poverty');
    for (var i = 0; i < selectPoverty.options.length; i++) {
        if (selectPoverty.options[i].innerHTML == data.poverty) {
            selectPoverty.options[i].selected = true;
            break;
        }
    }
    $('lastSchool').value = data.lastSchool;
    $('lastAdvisorName').value = data.lastAdvisorName;
    $('lastAdvisorTelephone').value = data.lastAdvisorTelephone;
    // 家庭情况
    $('addressOfLetter').value = data.addressOfLetter;
    $('zipCode').value = data.zipCode;
    $('fatherName').value = data.fatherName;
    $('fatherTelephone').value = data.fatherTelephone;
    $('fatherJob').value = data.fatherJob;
    $('fatherIncome').value = data.fatherIncome;
    $('motherName').value = data.motherName;
    $('motherTelephone').value = data.motherTelephone;
    $('motherJob').value = data.motherJob;
    $('motherIncome').value = data.motherIncome;
    // 亲属
    $('relativeAName').value = data.relativeAName;
    $('relativeAAppellation').value = data.relativeAAppellation;
    $('relativeATelephone').value = data.relativeATelephone;
    $('relativeAJob').value = data.relativeAJob;
    $('relativeAIncome').value = data.relativeAIncome;
    $('relativeBName').value = data.relativeBName;
    $('relativeBAppellation').value = data.relativeBAppellation;
    $('relativeBTelephone').value = data.relativeBTelephone;
    $('relativeBJob').value = data.relativeBJob;
    $('relativeBIncome').value = data.relativeBIncome;
    phoneTest();
    codeCheck();
