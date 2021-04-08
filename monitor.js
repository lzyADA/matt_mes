//用于监控client连接状态的
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt:test.mosquitto.org',{
    clientId:"mqtt_sample_su_id_8_2",
    clean:false
})

client.on('connect',function (){
    client.subscribe("client/status",{qos:1})
})

client.on("message",function (_,message){
    var jsonpayload = JSON.parse(message.toString())
    console.log(`client is ${jsonpayload.status}`)
})