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
myApi.getSignForm(function (err, data) {
    if (err) {
        alert(err.message);
    } else {
        console.log('data', data);
        if (data.contents.length == 0) {
            document.getElementById('content').style.display = 'none';
            document.getElementById('hidden').style.display = 'block';
        } else {
            signForm = data.contents[0];
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
    }

    //时间转换
    function toLocalTimeString(utcStr) {
        if (utcStr) {
            const date = new Date(parseInt(utcStr));
            return date.toLocaleDateString() + '/' + date.toLocaleTimeString();
        } else {
            return '';
        }
    }
});



//获取签名信息，注入微信配置
myApi.getSignature(
    "http://www.yml666.com/stumanager/wechat/student_signIn/index.html",
    function (err, data) {
        if (err) {
            alert(err)
        } else {
            wx.config({
                debug: false,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                appId: data.appid,
                signature: data.signature,
                jsApiList: ['getLocation']
            });
        }
    }
)

//微信配置成功后，调用位置接口获取当前位置
wx.ready(function () {
    wx.getLocation({
        success: function (res) {
            // alert(JSON.stringify(res));
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
    signData.longitude = current.getLng();
    signData.latitude = current.getLat();

    myApi.postSignData(signData, function (err, data) {
        if (err) {
            alert(err.message);
        } else {
            console.log('data', data);
            document.getElementById('signIn').innerHTML = '已签到';
        }
    });
}