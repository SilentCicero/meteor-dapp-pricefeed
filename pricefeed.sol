// sol PriceFeed
// Subscription based, lorded, price feed
// @authors:
// Nick Dodson <thenickdodson@gmail.com>
// a simple integer price feed contract that is owned, priced, and can be subscribed
// to for a certain duration.
// usage:
// update info using the set method, users can subscribe their contract address
// with the subscirbe method, and get info if subscribed through the get function
contract Owned {
    function Owned() { owner = msg.sender; }
    modifier isOwner { if(msg.sender == owner) _ }
    address owner;
}
// contact Priced, allow owner to set price (setPrice and contract 
// to use price (price) or make a method have a price (hasPrice)
contract Priced is Owned {
    function Priced(uint p) { price = p; } 
    function setPrice(uint p) isOwner { price = p; }
    modifier hasPrice() { if(msg.value >= price) _ }
    uint public price;
}
// contact Duration, allows a duration variable to be set by owner
// (setDuration) and used (duration)
contract Duration is Owned {
    function Duration(uint d) { duration = d; }
    function setDuration(uint d) isOwner { duration = d; }
    uint public duration;
}
// contact TimeSubscription allows a user to subscribe an
// address for a set amount of time for a price (subscribe) 
contract TimeSubscription is Owned, Priced(1 ether), Duration(2592000) { // 30 days
    function subscribe(address addr) hasPrice { // Can topup
        if(subscribers[addr] == 0){
            numSubscribed += 1;
            subscribers[addr] = now + duration;
        }else{
            if(subscribers[addr] > now)
                subscribers[addr] += duration;
            else
                subscribers[addr] = now + duration;
        }
    }
    uint public numSubscribed = 0;
    modifier hasSubscribed { if(subscribers[msg.sender] > now 
        || msg.sender == owner) _ }
    mapping (address => uint) public subscribers; //addr to timelimit
}
// contact Mortal allows the owner to kill the contract at any time
// (kill)
contract Mortal is Owned {
    function kill() isOwner { suicide(owner); }
}
// contact Named allows the contract to be named
contract Named is Owned, Mortal {
    function named(bytes32 name) {
    }
}
// contact SimpleAccount allows a very basic account system, so that a balance
// can be monitered and payed out by the owner.
contract SimpleAccount is Owned {
    function payout(address addr) isOwner {
        addr.send(balance);
        balance = 0;
    }
    uint public balance;
}
// usage:
// PriceFeed(p).set(newInfo)
// PriceFeed(p).get() 
// PriceFeed(p).subscribe(address) 
contract PriceFeed is Owned, Mortal, TimeSubscription, SimpleAccount {
   function set(uint newInfo) isOwner {
      info = newInfo;
   }
   function subscribe(address addr){
       if(msg.value >= price){
           TimeSubscription.subscribe(addr);
           balance += msg.value;
       }
   }
   function get() hasSubscribed constant returns(uint r) { return info; }
   uint private info;
}