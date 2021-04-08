//取消订阅
/*
client 向broker 发送unsubscribe 数据包，其中包含client想要取消的主题
broker收到unsubscribe 数据包后，向client发送unsuback 数据包答应
 */
var mqtt = require('mqtt')

var client = mqtt.connect("mqtt:test.mosquitto.org",{
    clientId:"mqtt_sample_subscribe_id_1",
    clean:false
})
client.on('connect',function (connack){
    if(connack.returnCode == 0){
        client.unsubscribe("home/2ndfloor/201/temperature",function (err){
            if(err!=undefined){
                console.log('unsubscribe failed')
            }else{
                console.log("unsubscribe succeeded")
            }
            client.end()
        })
    }else{
        console.log(`connecting failed:${connack.returnCode}`)
    }
})