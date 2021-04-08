//发布端发布retained 消息
/*
retained消息是指在publish数据包中将retained设置为1 ，broker收到数据包后，将主题保存，当一个新的订阅者订阅时，，马上把消息发个订阅者
 */

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt:test.mosquitto.org',{
    clientId:"mqtt_sample_publish_1",
    clean:false
})
client.on("connect", function (connack) {
    if (connack.returnCode == 0){

        client.publish("home/2ndfloor/201/temperature", JSON.stringify({current: 25}), {
            qos: 0,
            retain: 1
        }, function (err) {
            if (err == undefined) {
                console.log("publish finished")
                client.end()
            } else {
                console.log("publish failed")
            }
        })
    }else{
        console.log(`connecting failed returncode :${connack.returnCode}`)
    }
})