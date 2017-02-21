var myApi = {}; 
(function (exports) {
    function getCookie(name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    }

    var token = getCookie('token') || "15eba26dbbac96bc2b2d136f06e39999";

    var hostname = 'http://yml666.com/stumanager';
    function postJSON(path, params, end, next) {
        var url = hostname + path;
        var body = 'token=' + token;
        for (var key in params) {
            body += '&' + key + '=' + params[key];
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    success(JSON.parse(xhr.responseText))
                } else {
                    fail(xhr.status);
                }
            }
        }
        xhr.send(body);

        function success(response) {
            switch (response.status) {
                case 0:
                    end(null, response.data);
                    break;
                case 1003:
                    end(new Error('登陆超时，需要重新进入'));
                    break;
                case 1004:
                    end(new Error('权限不足'));
                    break;
                case 2002:
                    end(null, { contents: [], totalElements: 0, totalPages: 0 });
                    break;
                default: next(response);
            }
        }
        function fail(status) {
            var msg;
            if (status >= 400) msg = '客户端错误';
            if (status >= 500) msg = '服务器错误';
            end(new Error(msg));
        }
    }

    function postForm(path, formData, end, next) {
        var url = hostname + path;
        formData.append('token', token);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    success(JSON.parse(xhr.responseText))
                } else {
                    fail(xhr.status);
                }
            }
        }

        xhr.send(formData);

        function success(response) {
            switch (response.status) {
                case 0:
                    end(null, res.data);
                    break;
                case 1003:
                    end(new Error('登陆超时，需要重新进入'));
                    break;
                case 1004:
                    end(new Error('权限不足'));
                    break;
                case 2002:
                    end(null, { contents: [], totalElements: 0, totalPages: 0 });
                    break;
                default: next(res);
            }
        }
        function fail(status) {
            var msg;
            if (status >= 400) msg = '客户端错误';
            if (starus >= 500) msg = '服务器错误';
            end(new Error(msg));
        }
    }

    /**
     * 挂到全局变量 myApi 上，所有的方法使用统一的回调函数 DataProcessor
     * @module api
     */
    /**
     * 
     * 获取假条，限制条件之间是“且”的关系
     * @param {Object} limits - 限制条件
     * @param {number} page - 分页序号
     * @param {number} num - 分页大小
     * @param {DataProcessor} cb
     */
    exports.getNotes = function (limits, page, num, cb) {
        var path = '/student/getMyLeaveNotes.do';
        var params = JSON.parse(JSON.stringify(limits));
        params.page = page;
        params.num = num;
        postJSON(
            path,
            params,
            function(err, data){ cb(err, data) },
            function(res){
                cb(new Error('未知错误'));
            }
        );
    }

    /**
     * 新假条或更改假条
     * 更改假条时note需包含lid，只能对未知错误的假条调用
     * @param {Object} note - 假条对象
     * @param {DataProcessor} cb
     */
    exports.postNote = function (note, cb) {
        var path = '/student/saveOrUpdateLeaveNote.do';
        postJSON(
            path,
            note,
            function(err, data){ cb(err, data) },
            function(res){ cb(new Error('未知错误')) }
        );
    }


    /**
     * 撤销请假申请，只能对未知错误的假条调用
     * @param {number} lid - 假条id
     * @param {DataProcessor} cb
     */
    exports.deleteNote = function (lid, cb) {
        var path = '/student/closeLeaveNote.do';
        postJSON(
            path,
            { lid: lid },
            function(err){ cb(err) },
            function(res){ cb(new Error('未知错误')) }
        )
    }

    /**
     * 获取本人信息
     * @param {DataProcessor} cb - 统一回调函数
     */
    exports.getInfo = function (cb) {
        var path = '/student/getMyInfo.do';
        postJSON(
            path,
            {},
            function(err, data){ cb(err, data) },
            function(res) { cb(new Error('未知错误')) }
        )
    }

    /**
     * 更改本人信息
     * @param {Object} info
     * @param {DataProcessor} cb - 统一回调函数
     */
    exports.postInfo = function (info, cb) {
        var path = '/student/updateMyInfo.do';
        postJSON(
            path,
            info,
            function(err, data){ cb(err, data) },
            function(res){ cb(new Error('未知错误')) }
        )
    }

    exports.getSignForm = function (cb) {
        var path = '/student/getCurrentSignInForm.do';
        postJSON(
            path,
            {},
            function(err, data){
                var _data;
                if (data) {
                    if (data.contents) {
                        _data = data;
                    } else {
                        _data = {
                            contents: [data],
                            totalElements: 1,
                            totalPages: 1
                        }
                    }
                }
                cb(err, _data)
            },
            function(res){ cb(new Error('未知错误')) }
        )
    }

    exports.postSignData = function (signData, cb) {
        var path = '/student/signIn.do';
        postJSON(
            path,
            signData,
            function(err, data){ cb(err, data) },
            function(res){ cb(new Error('未知错误')) }
        )
    }

    /**
     * 统一格式回调函数
     * @callback DataProcessor
     * @param {Object} err - 错误对象，null时表示没有错误，否则为有错误，err.message为错误信息
     * @param {Object} data - 数据对象，err不为null时data为undefined
     */

    // window.myApi = exports;

    
    exports.getSignature =  function(url, cb) {
        var path = '//wechat/signUrl.do';
        postJSON(
            path,
            {url: url},
            function(err, data){ cb(err, data) },
            function(res){ cb(new Error('未知错误')) }
        )
    }
} (myApi));
