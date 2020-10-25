let solc = require('solc')
let fs = require('fs')
let contractCode = fs.readFileSync('./contracts/donation.sol', 'utf-8')
let output = solc.compile(contractCode, 1)
//console.log(output)
module.exports = output['contracts'][':Donation']
console.log('bytecode : ', output['contracts'][':Donation']['bytecode'])
console.log('abi : ', output['contracts'][':Donation']['interface'])