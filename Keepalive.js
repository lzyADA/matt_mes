//client
//设备能自动从错误中恢复过来，比如在网络故障恢复以后，设备能自动重新连接Broker
/*
1.在建立连接时可以传递一个keepalive参数，单位"s"，mqtt协议规定在1.5xkeepalive时间间隔内，broker没有收到client数据包，broker认为两者断开，
同样，client没有收到broker的数据包，client认为它与broker 断开
2.mqtt 设计一对pingreq,pingresp broker与client没有数据传输时，通过两者满足
 */



var mqtt = require('mqtt')
var datetime = require('node-datetime');
var client = mqtt.connect("mqtt:test.mosquitto.org",{
    clientId:"mqtt_sample_id_9",
    clean:false,
    Keepalive:5
})

client.on('connect',function(){
    client.on('packetsend',function(packet){
        console.log(`${datetime.create().format('H:M:S')}:send ${packet.cmd}`)
    })
    client.on('packetreceive',function(packet){
    console.log(`${datetime.create().format('H:M:S')}:receive${packet.cmd}`)
    }
)
})
