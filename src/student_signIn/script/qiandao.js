// api.token.setToken('1d6c35ff7761683c68c52c9ca3276263');
var map;
var center;
var current;
var signForm;

function markCenter(center) {
    console.trace();
    var marker = new qq.maps.Marker({
        position: center,
        map: map
    });
    var label = new qq.maps.Label({
        position: center,
        map: map,
        content: '发起位置'
    });
}

function markCurrent(current) {
    console.trace();
    var marker = new qq.maps.Marker({
        position: current,
        map: map
    });
    var label = new qq.maps.Label({
        position: current,
        map: map,
        content: '当前位置'
    });
}

// 获取签到信息
api.student.getSignForm().then(function (data) {
    console.log(data);
    if (data == "") {
        document.getElementById('content').style.display = 'none';
        document.getElementById('hidden').style.display = 'block';
    } else {
        signForm = data
        center = new qq.maps.LatLng(signForm.latitude, signForm.longitude);
        map = new qq.maps.Map(document.getElementById('container'), {
            center: center,
            zoom: 12
        });
        console.log('center', center);
        markCenter(center);
        if (current) {
            markCurrent(current);
        }
        document.getElementById('launchTime').innerHTML = toLocalTimeString(signForm.launchTime);
        document.getElementById('fromTime').innerHTML = toLocalTimeString(signForm.fromTime);
        document.getElementById('toTime').innerHTML = toLocalTimeString(signForm.toTime);
    }
}).catch(function (err) {
    console.error(err);
})

//时间转换
function toLocalTimeString(utcStr) {
    if (utcStr) {
        const date = new Date(parseInt(utcStr));
        return date.toLocaleDateString() + '/' + date.toLocaleTimeString();
    } else {
        return '';
    }
}


//获取签名信息，注入微信配置
api.student.getSignature(
    "http://www.yml666.com/stumanager/wechat/student_signIn/index.html").then(
    function (data) {
        wx.config({
            debug: false,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            appId: data.appid,
            signature: data.signature,
            jsApiList: ['getLocation']
        });
    }).catch(function (err) {
        console.error(err);
    })


//微信配置成功后，调用位置接口获取当前位置
wx.ready(function () {
    console.log('--------------');
    wx.getLocation({
        success: function (res) {
            current = new qq.maps.LatLng(res.latitude, res.longitude)
            console.log('current', current);
            if (map) {
                markCurrent(current);
            }
        },
        cancel: function (res) {
            alert('用户拒绝授权获取地理位置');
        }
    });
})
//提交事件
document.getElementById('signIn').onclick = function () {
    var signData = {};
    console.log(current);
    signData.longitude = current.getLng();
    signData.latitude = current.getLat();

    api.student.postSignData(signData, function (data) {
        document.getElementById('signIn').innerHTML = '已签到';
    }).catch(function (err) {
        console.error(err)
    });
}