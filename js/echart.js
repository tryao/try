// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
  // 使用
require(
    [
        'echarts',
        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/pie'
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('dnamechart')); 
        // var chart1=ec.init(document.getElementById('addrchart'));
        // var chart2=ec.init(document.getElementById('rel_addrchart'));
        // var chart3=ec.init(document.getElementById('rel_dnamechart'));
        // var chart4=ec.init(document.getElementById('small_dnamechart'));
        // var chart5=ec.init(document.getElementById('small_addrchart'));
        // var chart6=ec.init(document.getElementById('ports'));
        var option = {
            title:{
                text:'域名',
                x:'center'
            },
            tooltip: {
                trigger:'axis'

            },
            /*legend: {
                data:['域名']
            },*/
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ["molss.gov.cn.","tira.cn.","bta.net.cn.","people.com.cn.","3g.cn.","4.cn.","sinaimg.cn.",
                    "kuwo.cn.","zol-img.com.cn.","zhongchenggongyu.cn","lefeng.cn.","sina.com.cn.","online.sh.cn.",
                    "cdnetdns.cn.","in-addr.cn.","ce.cn.","cnnic.cn.","yihaodian.com.cn.","diditaxi.com.cn.","dns.com.cn",
                    "t.cn","mobage.com.cn.","ccgslb.com.cn.","dns.cn.","dynamic.163data.com.cn.","uc.cn.","cnradio.com.cn.",
                    "360.cn.","teny.cn.","IN-ADDR.ARPA."]
                }
            ],
            
            series : [
                {
                    "name":"",
                    "type":"bar",
                    "data":[10,10,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,13,13,13,13,13,13, 66, 51, 50, 46, 36,689]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option); 
        var option1 = {
            title : {
                text: 'IP地址',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            tooltip: {
                trigger:'axis'

            },
            /*legend: {
                data:['域名']
            },*/
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ["182.118.20.0","220.181.108.0","123.125.71.0","101.226.160.0","180.153.229.0","220.181.12.0","74.125.41.0",
                   "220.181.12.0","61.50.244.0"]
                }
            ],
            
            series : [
                {
                    "name":"",
                    "type":"bar",
                    "data":[10,10,12,36,  46, 50,51, 66,689]
                }
            ]
        };
     /*    var option2 = {
            title : {
                text: '访问量最大的域名(in-addr.arpa.)的来源IP地址',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
      
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'182.118.20.0'},
                        {value:310, name:'220.181.108.0'},
                        {value:234, name:'123.125.71.0'},
                        {value:135, name:'101.226.160.0'},
                        {value:1548, name:'180.153.229.0'}
                    ]
                }
            ]
        };
         var option3 = {
            title : {
                text: '访问量最大的IP网段(182.118.20.0)访问的域名',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
           
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'bk2xc.ac.cn.'},
                        {value:310, name:'www.bk256.ac.cn.'},
                        {value:234, name:'bk24t.ac.cn.'},
                        {value:135, name:'www.bk30q.ac.cn.'},
                        {value:1548, name:'www.bk73q.ac.cn.'}
                    ]
                }
            ]
        };
         var option4 = {
            title : {
                text: '访问量最大的域名(in-addr.arpa.)的子域名',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'143.9.30.58.in-addr.arpa.'},
                        {value:310, name:'136.220.30.58.in-addr.arpa.'},
                        {value:234, name:'104.135.31.58.in-addr.arpa.'},
                        {value:135, name:'50.159.67.58.in-addr.arpa.'},
                        {value:1548, name:'245.63.100.58.in-addr.arpa.'}
                    ]
                }
            ]
        };
         var option5 = {
            title : {
                text: '访问量最大的IP网段(182.118.20.0)的IP地址',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
           
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'182.118.20.166'},
                        {value:310, name:'182.118.20.168'},
                        {value:234, name:'182.118.20.170'},
                        {value:135, name:'182.118.20.172'},
                        {value:1548, name:'182.118.20.174'}
                    ]
                }
            ]
        };*/
         var option6 = {
            title : {
                text: '访问量最大的IP网段(182.118.20.0)的端口使用情况',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
         
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'24593'},
                        {value:310, name:'25112'},
                        {value:234, name:'17983'},
                        {value:135, name:'58435'},
                        {value:1548, name:'32841'}
                    ]
                }
            ]
        };
        // chart1.setOption(option1);             
        /*chart2.setOption(option2);             
        chart3.setOption(option3);             
        chart4.setOption(option4);             
        chart5.setOption(option5); */            
        // chart6.setOption(option6);             
    }
);