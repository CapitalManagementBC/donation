let contractInstance = require('./13_instance')

// test
var from = '0xA95954bcfbA4bd0359D6a0C037470233eAd29caa'
from = '0xb828cE755181BEe1f60A9Dbe8c6dF3527af452e9'

contractInstance.methods.service_fee().call().then(data => {
    console.log("data : ", data)
})

contractInstance.methods.evaluation_fee().call().then(data => {
    console.log("data : ", data)
})


contractInstance.methods.donate().send({
            from : from,
            value : 0,
        })



// contractInstance.methods.getValue().call().then(data => {
//     console.log("data : ", data)
 
//     // 测试合约的setValue方法
//     contractInstance.methods.setValue("hello test").send({
//         from : from,
//         value : 0,
//     }).then(res => {
//         console.log("res : ", res)
//         contractInstance.methods.getValue().call().then(data => {
//             console.log("data : ", data)
//         })
//     })
// })