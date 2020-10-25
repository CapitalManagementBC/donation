let {bytecode, interface} = require('./11_compile')

// 1.引入web3
let Web3 = require('web3')
// 2.创建web3实例
let web3 = new Web3()
// 3.设置网络
web3.setProvider('http://localhost:7545')

let contract = new web3.eth.Contract(JSON.parse(interface))


// 合约拥有者的帐号
const account = '0xA95954bcfbA4bd0359D6a0C037470233eAd29caa'
 
// 部署合约
contract.deploy({
    data : bytecode,
    arguments : [10, '0xA95954bcfbA4bd0359D6a0C037470233eAd29caa', '0xcf9fb6Fdd748c43cA0B66598c321FBBBd76e0Ab8']
}).send({
    from : account,
    gas : '3000000',
}).then(instance => {
    console.log("contract address : ", instance.options.address)
})