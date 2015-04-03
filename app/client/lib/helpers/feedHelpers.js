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
The main from address to be used for transactions and calls.

@method (from)
**/

Feed.from = function(){
    return web3.eth.accounts[this.account];   
}

/**
Bare minimum call params. Includes the now mandatory from param.

@method (callParams)
**/

Feed.callParams = function(){ 
    return {from: this.from()};
}

/**
Deploy A PriceFeed Contract

@method (deploy)
**/

Feed.deploy = function(){
    var addr = web3.eth.sendTransaction({from: this.from(), code: Feed.hex, gas: 700000, gasPrice: web3.eth.gasPrice}); // Eventually web3.eth.solidity(source) instead of hex for Go CLI
    console.log('New PriceFeed address: ', addr);
    return addr;
};
    
/**
Display the feed subscription price in Ether.

@method (priceDisplay)
**/

Feed.priceDisplay = function(){
    return web3.fromWei(this.contract.call(this.callParams()).price(), LocalStore.get('etherUnit')).toString(10);
};

/**
Display the feed subscription duration in days.

@method (durationDisplay)
**/

Feed.durationDisplay = function(){
    return parseInt(this.contract.call(this.callParams()).duration())/(24 * 60 * 60);
};

/**
Display the pricefeed info.

@method (infoDisplay)
**/

Feed.infoDisplay = function(){
    console.log(this.contract.call(this.callParams()).get());
    return this.contract.call({from: this.from()}).get().toString(10);
};

/**
Balance Display

@method (balanceDisplay)
**/

Feed.balanceDisplay = function(){
    return web3.fromWei(this.contract.call(this.callParams()).balance(), LocalStore.get('etherUnit')).toString(10);
};

/**
Subscribers Display

@method (subscribersDisplay)
**/

Feed.subscribersDisplay = function(){
    return this.contract.call(this.callParams()).numSubscribed().toString(10);
};

/**
Feed Subscribe

@method (subscribe)
**/

Feed.subscribe = function(addr){
    if(web3.isAddress(addr)) {
        var price = this.contract.call(this.callParams()).price().toString(10);
        this.contract.sendTransaction({from: this.from(), value: price}).subscribe(addr);
        console.log('Subscribe:', {from: this.from(), value: price}, addr);
    }else{
        console.log('Please enter a valid address.');   
    }
};

/**
Feed set info manually (should not be used, as it should really be done by a server).

@method (setInfo)
**/

Feed.setInfo = function(info){
    this.contract.sendTransaction({from: this.from()}).set(info);
    console.log('Set info to: ', info);
};

/**
Feed Set Subscription Price

@method (setPrice)
**/

Feed.setPrice = function(price){
    var wei_value = web3.toWei(price, LocalStore.get('etherUnit'));
    this.contract.sendTransaction({from: this.from()}).setPrice(wei_value);
    console.log('Set price to: ', price);
    return price;
};

/**
Feed Set Subscription Period 

@method (setPeriod)
**/

Feed.setDuration = function(period){
    this.contract.sendTransaction({from: this.from()}).setDuration(parseInt(period) * 24 * 60 * 60);
    console.log('Set period to: ', period);
    return period;
};

/**
Feed Payout

@method (payout)
**/

Feed.payout = function(addr){
    if(web3.isAddress(addr)) {
        this.contract.sendTransaction({from: this.from()}).payout(addr);
        console.log('Payout balance to: ', addr);
    }
};

/**
Get Subscription Status/Info

@method (subscription)
**/

Feed.subscription = function(addr){
    if(web3.isAddress(addr)) {
        var info = this.contract.call(this.callParams()).subscribers(addr);
        console.log('Subscription info: ', info.toString(10));
        return info.toString(10);
    }
};

/**
Get the number of subscribers

@method (numSubscribed)
**/

Feed.numSubscribed = function(){
    var info = this.contract.call(this.callParams()).numSubscribed();
    return info.toString(10);
};

/**
Kill PriceFeed

@method (kill)
**/

Feed.kill = function(){
    this.contract.sendTransaction({from: this.from()}).kill();
    console.log('Killing price feed contract...');
};
