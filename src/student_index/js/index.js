 function startTime()
        {
            var today=new Date()
            var year=today.getFullYear();
            var month=today.getMonth() + 1;
            var date=today.getDate();
            var day=today.getDay();
            var dayStr='';
            var h=today.getHours();
            var m=today.getMinutes();
            var s=today.getSeconds()
            // 在小于10的数字前面加‘0’;
            month=checkTime(month);
            date=checkTime(date);
            m=checkTime(m);
            s=checkTime(s);
            //将阿拉伯数字转换为中文数字
            dayStr = changeNumToChinese(day);
            document.getElementById('ttime').innerHTML=h+":"+m+":"+s;
            document.getElementById('ddate').innerHTML=year+"-"+month+"-"+date;
            document.getElementById('dday').innerHTML=dayStr;
            t=setTimeout('startTime()',1000);
        }
        function checkTime(i)
        {
            if (i<10) 
            {i="0" + i;}
            return i
        }
        function changeNumToChinese(j)
        {
            var dayStr = '';//输出的中文数字
            if(parseInt(j) == 1) { dayStr = "一"; }
            else if(parseInt(j) == 2) { dayStr = "二"; }
            else if(parseInt(j) == 3) { dayStr = "三"; }
            else if(parseInt(j) == 4) { dayStr = "四"; }
            else if(parseInt(j) == 5) { dayStr = "五"; }
            else if(parseInt(j) == 5) { dayStr = "六"; }
            else { dayStr = "日"; } 
            return dayStr;                       
        }