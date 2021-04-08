// 订阅端

var mqtt = require('mqtt')
var client = mqtt.connect("mqtt:test.mosquitto.org",{
    clientId:"mqtt_sample_subscribe_id_chapter_8",
    clean:false
})

client.on("connect", function (connack){

    if(connack.returnCode == 0){
        if(connack.sessionPresent == false){
            console.log("subscribing")
            client.subscribe("home/2ndfloor/201/temperature",{qos:0},function (err,granted){
                if(err!=undefined){
                    console.log("subscrbe failed")
                }else{
                    console.log(`subscribe succeeded with ${granted[0].topic},qos:${granted[0].qos}`)
                }
            })
        }
    }else{
        console.log(`subscribe failed returncode:${connack.returnCode}`)
    }
})
 client.on("message",function (_,message,packet){
        var jsonpayload = JSON.parse(message.toString())
        // console.log(P//acket)
        console.log(`retained: ${packet.retain},temperature: ${jsonpayload.current}`)
        client.end()
    })