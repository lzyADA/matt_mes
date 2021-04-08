//建立持久化连接
// 导库
/*var mqtt = require('mqtt')

//连接
var client = mqtt.connect("mqtt://test.mosquitto.org",{
    clientId: "mqtt_sample_id_1",
    clean: false
})
client.on('connect',function (connack){
    console.log(`return conde: ${connack.returnCode},sessionPresent: ${connack.sessionPresent}`)
    client.end()
})
*/


//建立非持久化连接


let mqtt = require('mqtt')

let client = mqtt.connect('mqtt:test.mosquitto.org',{
    clientId: "mqtt_sample_id_1",
    clean: true``
})
client.on('connect',function (connack){
    console.log(`return code: ${connack.returnCode}, sessionPresent:${connack.sessionPresent}`)
    client.end()
})


