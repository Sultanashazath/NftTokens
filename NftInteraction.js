var abi=[{"constant":false,"inputs":[{"name":"_uri","type":"string"},{"name":"_editions","type":"uint256"},{"name":"_salePrice","type":"uint256"}],"name":"addNewTokenWithEditions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_salePrice","type":"uint256"}],"name":"setSalePrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"currentBidDetailsOfToken","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"approvedFor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"acceptBid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_creator","type":"address"}],"name":"isWhitelisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOf","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_percentage","type":"uint256"}],"name":"setMaintainerPercentage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_creator","type":"address"}],"name":"whitelistCreator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_uri","type":"string"}],"name":"originalTokenOfUri","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelBid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"salePriceOfToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"takeOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_percentage","type":"uint256"}],"name":"setCreatorPercentage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenid","type":"uint256"}],"name":"tokenDetais","outputs":[{"name":"owner","type":"address"},{"name":"price","type":"uint256"},{"name":"bidderAddress","type":"address"},{"name":"bidPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"creatorOfToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_uri","type":"string"}],"name":"addNewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"creatorPercentage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maintainerPercentage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_creator","type":"address"}],"name":"WhitelistCreator","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_amount","type":"uint256"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Bid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_seller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"AcceptBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_bidder","type":"address"},{"indexed":true,"name":"_amount","type":"uint256"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"CancelBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_buyer","type":"address"},{"indexed":true,"name":"_seller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_tokenId","type":"uint256"},{"indexed":true,"name":"_price","type":"uint256"}],"name":"SalePriceSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"}]
var contractAddress="0x3eCB7a34Ac664Db0e17248E657Ddaaa419e1E485"
var minteraddr="0x631d4CE498561faBBc0Ffb72e73AD906C0B90F18"
var ownerAddress="0x9e51a346ebE667FdcEec8Baa34037Df68cCaa4E9"
var totalSupplycounts
// ol=0x3e8E9Ed4C93dec220174Ec57F93088F93b19823C
ethereum.enable()
console.log(web3.version)
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
}
var contract=web3.eth.contract(abi);
var nft=contract.at(contractAddress)
function mint(receverAddress){
    console.log("mint")
    console.log(receverAddress.value)
    nft.addNewToken(receverAddress.value,function(err,res){console.log(err,res)})
      
}

function mintMultiple(receverAddress,tokenColorCode,price){
    console.log("mintMultiple")
    console.log(receverAddress.value,tokenColorCode.value,price.value)
    nft.addNewTokenWithEditions(receverAddress.value,tokenColorCode.value,web3.toWei(price.value.toString()),function(err,res){console.log(err,res)})
      
}
function buy(tokenid,amount){
    console.log("buy")
    console.log(tokenid,amount)
    nft.buy(tokenid,{value:web3.toWei(amount.toString())},function(err,res){console.log(err,res)})

}
function setSalePrice(tokenId,price){
    console.log("setSalePrice")
    console.log(tokenId.value,price.value)
    nft.setSalePrice(tokenId.value,web3.toWei((price.value).toString()),function(err,res){console.log(err,res)})
      
}
function bid(tokenid,amount){
    console.log("bid")
    console.log(tokenid.value,amount.value)
    nft.bid(tokenid.value,{value:web3.toWei(amount.value.toString())},function(err,res){console.log(err,res)})

}
function acceptBid(tokenid){
    console.log("acceptBid"+tokenid.value)
    nft.acceptBid(tokenid.value,function(err,res){console.log(err,res)})

}

var addressRec
web3.eth.getAccounts(function(err,res){
    addressRec=res[0];
      web3.eth.getBalance(res[0],function(er,bal){
        // alert(bal)
        document.getElementById("balance").innerHTML = (web3.fromWei(bal)).toFixed(4);
    })
})

nft.totalSupply(function(err,res){
    totalSupply=res.toString()
})


function updateContractStatus(status){
    nft.updateContracStatus(status.value,function(err,res){console.log(err,res)})
}