//初始化过程
var Web3 = require('web3');
var acc = []

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

//console.log(web3.eth.getAccounts())

web3.eth.getAccounts(function (error, accounts) {
    if (error)
    {
        console.log(error)
    }

    web3.eth.getBalance(accounts[0]).then(function(result){
        console.log("Balance:", web3.utils.fromWei(result, 'ether'));
    });
    console.log(accounts)//授权成功后result能正常获取到账号了
    acc = accounts

    web3.eth.sendTransaction({
        from : acc[0],
        to : acc[1],
        value: web3.utils.toWei("0.01","ether")
    }, function(err, transactionHash) {
        if (!err){
            console.log(transactionHash)
        }else{
            console.log(err)
        }
    });

    //web3.eth.
});

