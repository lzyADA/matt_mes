//监测client 连接状态，使用LWT和retained 消息实现对一个client的连接状态监控
/*
1.client在连接时指定will topic 为 "client/status",遗愿消息为"offline",will retain=1;
2.client 在连接成功后向同一个主题"client/status",发布一个内容为"online"的retained 的消息；
订阅者任何时候订阅"client/status"都会获取client当前的连接状态
运行client.js 再运行monitor.js >>client is online  ctrl +c 终止client moitor.js>> client is offline
 */

var mqtt = require("mqtt")
var client = mqtt.connect("mqtt:test.mosquitto.org",{
    clientId:"mqtt_sample_p_8",
    clean:false,
    will:{
        topic:"client/status",
        qos:1,
        retain:true,
        payload:JSON.stringify({status:"offline"})
    }
})
client.on('connect',function (connack){
    if(connack.returnCode==0){
        client.publish("client/status",JSON.stringify({status:"online"}),{qos:1,retain:1})
    }else{
        console.log(`connecting failed returncode: ${connack.returnCode}`)
    }
})