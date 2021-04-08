//订阅主题

var mqtt = require('mqtt')

var client = mqtt.connect('mqtt:test.mosquitto.org',{
    clientId:"mqtt_sample_subscriber_id_1",
    clean: false,
})
client.on('connect',function (connack){
    if(connack.returnCode == 0){
        if(connack.sessionPresent==false){
            console.log("subscribeing")
            client.subscribe("home/2ndfloor/201/temperature",{
                qos:1
            },function (err,granted){
                if(err!=undefined){
                    console.log("subscribe failed")
                }else{
                    console.log(`subscribe succeeded with ${granted[0].topic},qos:${granted[0].qos}`)
                }
            })
        }else{
            console.log(`subscribe failed:${connack.returnCode}`)
        }
    }
    client.on("message",function (_,message,_){
        var jsonpaylod = JSON.parse(message.toLocaleString())
        console.log(`current temperature is ${jsonpaylod.current} `)
    })
})