// 引入web3
let Web3 = require('web3')
// 创建web3实例
let web3 = new Web3()
// 设置网络
web3.setProvider('http://localhost:7545')

// 从11_compile.js中复制过来
let abi = [{"constant":false,"inputs":[{"name":"work","type":"address"}],"name":"serve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"service_fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"work","type":"address"}],"name":"evalute","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"evaluation_fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"donate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"amount_from_donator","type":"uint256"},{"name":"donator_addr","type":"address"},{"name":"proj_addr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

// 在12_deploy.js中生成的合约地址
let address = '0xB0b55ABef56de7DEc8c5D88C8c95b7D80aDe05b6'

let contractInstance = new web3.eth.Contract(abi, address)

// 导出合约实例
module.exports = contractInstance