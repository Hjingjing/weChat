/**
 * @desc 银行卡号Luhn验证
 * 验证19位的卡号
 * 考虑到同学可能不记得卡号，所以若不填写此项的话，就没提示；若填写的话，就判断填写的是否准确；
 */
function luhnCheck(bankno) {
    var lastNum = bankno.substr(bankno.length - 1, 1);
    var firstNum = bankno.substr(0, bankno.length - 1);
    var arr = [];
    //将前18位卡号逆序放入数组arr中
    for (var i = firstNum.length - 1; i >= 0; i--) {
        arr.push(firstNum[i]);
    }
    var arrOdd1 = [];//奇数位*2的积小于9
    var arrOdd2 = [];//奇数位*2的积大于9

    var arrEven = [];
    for (var i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 == 1) { //奇数位
            if (parseInt(arr[i]) * 2 < 9) {
                arrOdd1.push(parseInt(arr[i] * 2));
            } else {
                arrOdd2.push(parseInt(arr[i]) * 2);
            }
        } else {//偶数位
            arrEven.push(arr[i]);
        }
    }

    var oddUnit = [];//奇数位*2>9之后数组的个位数
    var oddDecade = [];//奇数位*2>9之后数组的十位数
    for (var i = 0; i < arrOdd2.length; i++) {
        oddUnit.push(parseInt(arrOdd2[i] % 10));
        oddDecade.push(parseInt(arrOdd2[i] / 10));
    }

    var sumArrOdd1 = 0;//奇数位*2<9的数组之和
    var sumArrEven = 0;//偶数位之和
    var sumOddUnit = 0;//奇数位*2>9的分割之后的数组个位数之和
    var sumOddDecase = 0;//奇数位*2>9的分割之后的数组十位数之和
    for (var i = 0; i < arrOdd1.length; i++) {
        sumArrOdd1 += parseInt(arrOdd1[i]);
    }
    for (var i = 0; i < arrEven.length; i++) {
        sumArrEven += parseInt(arrEven[i]);
    }
    for (var i = 0; i < oddUnit.length; i++) {
        sumOddUnit += parseInt(oddUnit[i]);
        sumOddDecase += parseInt(oddDecade[i]);
    }
    //计算总和
    var sumTotal = parseInt(sumArrOdd1) + parseInt(sumArrEven) + parseInt(sumOddUnit) + parseInt(sumOddDecase);

    //计算Luhm值
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var luhm = 10 - k;

    var icbcCard = document.getElementById('icbcCard');
    if ($('icbcCard').value.trim().length != 19) {
        icbcCard.style.color = "red";
        return false;
    } else {
        if (lastNum == luhm) {
            icbcCard.style.color = "#000";
            return true;
        } else {
            icbcCard.style.color = "red";
            return false;
        }
    }

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

//校园卡号检测
function schoolCardIDCheck() {
    var schoolCardID = document.getElementById('schoolCardID');
    // console.log(schoolCardID.value);
    if (schoolCardID.value.length != 6) {
        schoolCardID.style.color = "red";
        return false;
    } else {
        schoolCardID.style.color = "#000";
        return true;
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
//验证身份证号
function idcardCheck(){
    var reg = /(^\d{15}$)|(^\d{17}(\d|x|X)$)/;
    if(reg.test($('idcard').value.trim()) == false){
         $('idcard').style.color = "red";
         return false;
    }else{
        $('idcard').style.color = "#000";
        return true;
    }
}
// 封装
function $(id) {
    return document.getElementById(id);
}
function scrollTo(ele) {
    ele.onFocus = function (event) {
        // console.log(event.layerY);
        document.body.scrollTop = Math.abs(event.layerY);
    }
    ele.focus();
}
// 验证是否有未填的选项
function requiredCheck() {

    //验证身份证号
    var idcard = idcardCheck();
    if(!idcard){
        alert("请填写正确的身份证号码");
        scrollTo($('idcard'));
        return 0;
    }

    var flag = phoneTest();
    var phoneNumber = document.getElementsByClassName('phone-number');
    for (var i = 0; i <= flag.length; i++) {
        if (flag[i] == "0") {
            alert("电话号码不正确");
            scrollTo(phoneNumber[i]);
            return 0;
        }
    }
    if ($('nation').value.trim() == "") {
        alert('请填写民族');
        scrollTo($('nation'));
        return 0;
    }
    if ($('clazz').value.trim() == "") {
        alert('请填写行政班级');
        scrollTo($('clazz'));
        return 0;
    }
    if ($('major').value.trim() == "") {
        alert('请填写专业全称');
        scrollTo($('major'));
        return 0;
    }
    if ($('faculty').value.trim() == "") {
        alert('请填写学院');
        scrollTo($('faculty'));
        return 0;
    }
    if ($('lengthOfSchooling').value.trim() == "") {
        alert('请填写学制');
        scrollTo($('lengthOfSchooling'));
        return 0;
    }
    if ($('dormitoryBuilding').value.trim() == "") {
        alert('请填写楼栋');
        scrollTo($('dormitoryBuilding'));
        return 0;
    }
    if ($('dormitoryID').value.trim() == "") {
        alert('请填写寝室');
        scrollTo($('dormitoryID'));
        return 0;
    }
    if ($('schoolCardID').value.trim() == "") {
        alert('请填写校园卡号');
        scrollTo($('schoolCardID'));
        return 0;
    }
    var schoolCardID = schoolCardIDCheck();
    if (!schoolCardID) {
        alert("请填写正确的校园卡号");
        scrollTo($('schoolCardID'));
        return 0;
    }
    if ($('icbcCard').value.trim() != "") {
        var icbcCard = $('icbcCard');
        var results = luhnCheck(icbcCard.value.trim());
        // console.log(results);
        if(!results){
            alert("请填写正确的银行卡号");
            scrollTo($('icbcCard'));
            return 0;
        }
    }

    // if ($('qq').value.trim() == "") {
    //     alert('请填写qq号');
    //     scrollTo($('qq'));
    //     return 0;
    // }
    // if ($('height').value.trim() == "") {
    //     alert('请填写身高(cm)');
    //     scrollTo($('height'));
    //     return 0;
    // }
    // if ($('studentSrcPlace').value.trim() == "") {
    //     alert('请填写生源地');
    //     scrollTo($('studentSrcPlace'));
    //     return 0;
    // }
    // if ($('lastSchool').value.trim() == "") {
    //     alert('请填写毕业高中');
    //     scrollTo($('lastSchool'));
    //     return 0;
    // }
    // if ($('addressOfLetter').value.trim() == "") {
    //     alert('请填写家庭收信地址');
    //     scrollTo($('addressOfLetter'));
    //     return 0;
    // }
    // if ($('zipCode').value.trim() == "") {
    //     alert('请填写邮编');
    //     scrollTo($('zipCode'));
    //     return 0;
    // }
    // if ($('fatherName').value.trim() == "") {
    //     alert('请填写父亲姓名');
    //     scrollTo($('fatherName'));
    //     return 0;
    // }
    // if ($('motherName').value.trim() == "") {
    //     alert('请填写母亲姓名');
    //     scrollTo($('motherName'));
    //     return 0;
    // }
    return 1;
}

window.onload = function () {

    console.log($('icbcCard').value.trim());
    $('icbcCard').oninput = function () {
        luhnCheck($('icbcCard').value.trim())
    };

    // 设置入学年份
    var date = new Date();
    var year = date.getFullYear();
    var select = $('enterYear');
    for (var i = 0; i < select.options.length; i++) {
        select.options[i].innerHTML = year;
        year--;
    }

    // 获取学生基本信息
    myApi.getInfo(function (err, data) {
        if (err) {
            alert(err.message)
        } else {
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
            // 页面加载完成就检验一些填写是否符合标准
            phoneTest();
            codeCheck();
            schoolCardIDCheck();
            luhnCheck($('icbcCard').value.trim());
        }
    });

    document.getElementById('submit').onclick = function () {

        var info = {};
        // 基本信息
        info.name = $('name').value;
        info.uid = $('uid').value;
        info.sex = $('sex').value;
        info.idcard = $('idcard').value;
        info.nation = $('nation').value;
        var Political = $('politicalStatus');
        var index = Political.selectedIndex;
        info.politicalStatus = Political.options[index].text;
        // 行政班级
        info.clazz = $("clazz").value;
        info.major = $('major').value;
        info.faculty = $('faculty').value;
        var type = $('type');
        index = type.selectedIndex;
        info.type = type.options[index].text;
        info.lengthOfSchooling = $('lengthOfSchooling').value;
        index = $('enterYear').selectedIndex;
        info.enterYear = $('enterYear').options[index].text;
        info.advisorName = $('advisorName').value;
        info.advisorTelephone = $('advisorTelephone').value;
        // 住宿及校园信息
        index = $('schoolZone').selectedIndex;
        info.selectZone = $('schoolZone').options[index].text;
        info.dormitoryBuilding = $('dormitoryBuilding').value;
        info.dormitoryID = $('dormitoryID').value;
        info.schoolCardID = $('schoolCardID').value;
        info.icbcCard = $('icbcCard').value;
        info.icbcID = $('icbcID').value;
        // 联系方式
        info.telephone = $('telephone').value;
        info.vnetID = $('vnetID').value;
        info.qq = $('qq').value;
        info.wechat = $('wechat').value;
        info.weibo = $('weibo').value;
        info.height = $('height').value;
        // 生源信息
        info.studentSrcPlace = $('studentSrcPlace').value;
        index = $('poverty').selectedIndex;
        info.poverty = $('poverty').options[index].text;
        info.lastSchool = $('lastSchool').value;
        info.lastAdvisorName = $('lastAdvisorName').value;
        info.lastAdvisorTelephone = $('lastAdvisorTelephone').value;
        // 家庭情况
        info.addressOfLetter = $('addressOfLetter').value;
        info.zipCode = $('zipCode').value;
        info.fatherName = $('fatherName').value;
        info.fatherTelephone = $('fatherTelephone').value;
        info.fatherJob = $('fatherJob').value;
        info.fatherIncome = $('fatherIncome').value;
        info.motherName = $('motherName').value;
        info.motherTelephone = $('motherTelephone').value;
        info.motherJob = $('motherJob').value;
        info.motherIncome = $('motherIncome').value;
        // 亲属
        info.relativeAName = $('relativeAName').value;
        info.relativeAAppellation = $('relativeAAppellation').value;
        info.relativeATelephone = $('relativeATelephone').value;
        info.relativeAJob = $('relativeAJob').value;
        info.relativeAIncome = $('relativeAIncome').value;
        info.relativeBName = $('relativeBName').value;
        info.relativeBAppellation = $('relativeBAppellation').value;
        info.relativeBTelephone = $('relativeBTelephone').value;
        info.relativeBJob = $('relativeBJob').value;
        info.relativeBIncome = $('relativeBIncome').value;
        // alert(info.name);

        // 判断是否有必须项没有填写
        var flag = requiredCheck();
        if (flag == 1) {
            myApi.postInfo(info, function (err, data) {
                if (err) {
                    console.log(err.message)
                } else {
                    console.log(data);
                }
            });
            window.location.href = "./success.html"
        } else {
            //  window.location.href='./index.html';
        }
    }
}

