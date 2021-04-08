//发布消息，向一个主题发布一条Qos为1 的使用 Json编码的数据 然后退出


let mqtt = require("mqtt")

let client = mqtt.connect('mqtt:test.mosquitto.org',{
    clientID: "mqtt_sample_publisher_1",
    clean: 0,
})
client.on('connect',function (connack){
    if (connack.returnCode == 0){
        client.publish("home/2ndfloor/201/temperature",JSON.stringify({current:25}),{qos:1},function(err){
            if (err == undefined){
                console.log("publish finished")
                client.end()
            }else{
                console.log("publish failed")
            }
        })

    }
})

