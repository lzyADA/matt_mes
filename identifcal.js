//使用相同的客户端标识进行连接(俩个客户端使用相同的client identifcal捕获offline事件)
/*broker 通过client identifier 来识别不同的客户端(唯一性)，当两个客户端使用相同的Client identifier 进行连接时，
如果第二个连接成功，broker会关闭第一个client的连接，使用的mqtt具有断线重连的功能，so 一个连上会顶掉另一个*/
let mqtt = require('mqtt')

let client = mqtt.connect('mqtt:test.mosquitto.org',{
    clientId: "mqtt_identical_1",
})

client.on("connect",function (connack){
    console.log(`return code:${connack.returnCode},seeionPresent:${connack.sessionPresent}`)
})
client.on('offline',function (){
    console.log("client went offline")
})






