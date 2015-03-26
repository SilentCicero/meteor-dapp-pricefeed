/**
The PriceFeed functions and variables.

@class PriceFeed
@constructor
*/

Feed = {};

/**
Feed Setup, setup the contract object

@method (setup)
**/

Feed.setup = function(){
    var PriceFeed = web3.eth.contract(Feed.abi);
    Feed.contract = new PriceFeed(Feed.address);
};

/**
Deploy A PriceFeed Contract

@method (deploy)
**/

Feed.deploy = function(){
    var addr = web3.eth.sendTransaction({from: web3.eth.accounts[0], code: Feed.hex}); // Eventually web3.eth.solidity(source) instead of hex for Go CLI
    return addr;
    console.log('New PriceFeed address: ', addr);
};
    
/**
Display the feed subscription price in Ether.

@method (priceDisplay)
**/

Feed.priceDisplay = function(){
    return web3.fromWei(this.contract.call().price(), LocalStore.get('etherUnit')).toString(10);
};

/**
Display the feed subscription duration in days.

@method (durationDisplay)
**/

Feed.durationDisplay = function(){
    return parseInt(this.contract.call().duration())/(24 * 60 * 60);
};

/**
Display the pricefeed info.

@method (infoDisplay)
**/

Feed.infoDisplay = function(){
    console.log(this.contract.call({from: web3.eth.accounts[0]}).get());
    return this.contract.call({from: web3.eth.accounts[0]}).get().toString(10);
};

/**
Balance Display

@method (balanceDisplay)
**/

Feed.balanceDisplay = function(){
    return  web3.fromWei(this.contract.call().balance(), LocalStore.get('etherUnit')).toString(10);
};

/**
Subscribers Display

@method (subscribersDisplay)
**/

Feed.subscribersDisplay = function(){
    return this.contract.call().numSubscribed().toString(10);
};

/**
Feed Subscribe

@method (subscribe)
**/

Feed.subscribe = function(addr){
    if(web3.isAddress(addr)) {
        var price = this.contract.call().price().toString(10);
        this.contract.sendTransaction({from: web3.eth.accounts[0], value: price}).subscribe(addr);
        console.log('Subscribe:', {from: web3.eth.accounts[0], value: price}, addr);
    }else{
        console.log('Please enter a valid address.');   
    }
};

/**
Feed set info manually (should not be used, as it should really be done by a server).

@method (setInfo)
**/

Feed.setInfo = function(info){
    this.contract.sendTransaction({from: web3.eth.accounts[0]}).set(info);
    console.log('Set info to: ', info);
};

/**
Feed Set Subscription Price

@method (setPrice)
**/

Feed.setPrice = function(price){
    var wei_value = web3.toWei(price, LocalStore.get('etherUnit'));
    this.contract.sendTransaction({from: web3.eth.accounts[0]}).setPrice(wei_value);
    console.log('Set price to: ', wei_value);
    return wei_value;
};

/**
Feed Set Subscription Period 

@method (setPeriod)
**/

Feed.setDuration = function(period){
    this.contract.sendTransaction({from: web3.eth.accounts[0]}).setDuration(parseInt(period) * 24 * 60 * 60);
    console.log('Set period to: ', period);
    return period;
};

/**
Feed Payout

@method (payout)
**/

Feed.payout = function(addr){
    if(web3.isAddress(addr)) {
        this.contract.sendTransaction({from: web3.eth.accounts[0]}).payout(addr);
        console.log('Payout balance to: ', addr);
    }
};

/**
Get Subscription Status/Info

@method (subscription)
**/

Feed.subscription = function(addr){
    if(web3.isAddress(addr)) {
        var info = this.contract.call().subscribers(addr);
        console.log('Subscription info: ', info.toString(10));
        return info.toString(10);
    }
};

/**
Get the number of subscribers

@method (numSubscribed)
**/

Feed.numSubscribed = function(){
    var info = this.contract.call().numSubscribed();
    return info.toString(10);
};

/**
Kill PriceFeed

@method (kill)
**/

Feed.kill = function(){
    this.contract.sendTransaction({from: web3.eth.accounts[0]}).kill();
    console.log('Killing price feed contract...');
};
