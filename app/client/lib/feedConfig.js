/**
PriceFeed Configuration

@module PriceFeed
*/

/**
The address of the deployed PriceFeed contract.

@var (address)
*/

Feed.address = '0x3bc1b841f70e1560b501929c6998b74f88800764';

/**
The index of the account to use from web3.eth.accounts to make calls. If your an admin, this should be your admin account.

@var (account)
*/

Feed.account = 0;

/**
The frequency in which the feed is updated. Used for display purposes.

@var (frequency)
*/

Feed.frequency = 'daily';

/**
The denominations in which the feed information is provided. Used for display purposes.

@var (denominations)
*/

Feed.denomination = 'USD';

/**
The transaction hssh of the deployed PriceFeed contract. Used for display purposes.

@var (tx_hash)
*/

Feed.tx_hash = '0x426d495bc145d60138de49b4c2101abf06271c065bc145d60138de49b4c210';

/**
The website url (without an ending slash). Used for display purposes.

@var (website)
*/

Feed.website = 'http://meteor-dapp-pricefeed.meteor.com';
    
/**
The Hex code for the PriceFeed contract. Used for display and deployment.

@var (hex)
*/

Feed.hex = "600060035562278d00670de0b6b3a764000033600081905550806001819055505080600281905550506103f6806100376000396000f30060003560e060020a900480630b7e9c441461008f5780630fb5a6b4146100a057806341a7726a146100b257806341c0e1b5146100c35780635745ae28146100d157806360fe47b1146100e65780636d4ce63c146100f757806391b7f5ed146101095780639528fcb51461011a578063a035b1fe1461012c578063b69ef8a81461013e578063f6be71d11461015057005b61009a60043561020e565b60006000f35b6100a86101bf565b8060005260206000f35b6100bd600435610290565b60006000f35b6100cb6101de565b60006000f35b6100dc6004356101cd565b8060005260206000f35b6100f1600435610265565b60006000f35b6100ff6102b9565b8060005260206000f35b610114600435610161565b60006000f35b6101226101c6565b8060005260206000f35b61013461018d565b8060005260206000f35b61014661025f565b8060005260206000f35b61015b600435610193565b60006000f35b600054600160a060020a031633600160a060020a03161461018157610189565b806001819055505b50565b5b60015481565b600054600160a060020a031633600160a060020a0316146101b3576101bb565b806002819055505b50565b5b60025481565b5b60035481565b5b600052600460205260406000205481565b600054600160a060020a031633600160a060020a0316146101fe5761020c565b600054600160a060020a0316ff5b565b600054600160a060020a031633600160a060020a03161461022e5761025b565b80600160a060020a031660006005546000600060006000848787f161024f57005b50505060006005819055505b50565b5b60055481565b600054600160a060020a031633600160a060020a0316146102855761028d565b806006819055505b50565b60015434101561029f576102b6565b6102a88161030f565b346005818154019150819055505b50565b6000426004600033600160a060020a031681526020019081526020016000205411806102f85750600054600160a060020a031633600160a060020a0316145b6103015761030b565b600654905061030c565b5b90565b60015434101561031e576103f3565b6004600082600160a060020a03168152602001908152602001600020546000146103be57426004600083600160a060020a03168152602001908152602001600020541161038f5760025442016004600083600160a060020a03168152602001908152602001600020819055506103b9565b6002546004600083600160a060020a03168152602001908152602001600020818154019150819055505b6103f2565b600160038181540191508190555060025442016004600083600160a060020a03168152602001908152602001600020819055505b5b5056";

/**
The ABI Description for the PriceFeed Contract.

@var (abi)
*/

Feed.abi =  [{
    "name": "set(uint256)",
    "type": "function",
    "inputs": [
    {
        "name": "newInfo",
        "type": "uint256"
    }
    ],
    "outputs": [
    ]
},
 {
    "name": "get",
    "type": "function",
    "inputs": [
    ],
    "outputs": [
    {
        "name": "r",
        "type": "uint256"
    }
    ]
},
 {
    "name": "setDuration(uint256)",
    "type": "function",
    "inputs": [
    {
        "name": "d",
        "type": "uint256"
    }
    ],
    "outputs": [
    ]
},
 {
    "name": "subscribe(address)",
    "type": "function",
    "inputs": [
    {
        "name": "p",
        "type": "address"
    }
    ],
    "outputs": [
    ]
},
 {
    "name": "setPrice(uint256)",
    "type": "function",
    "inputs": [
    {
        "name": "p",
        "type": "uint256"
    }
    ],
    "outputs": [
    ]
},
 {
    "name": "payout(address)",
    "type": "function",
    "inputs": [
    {
        "name": "p",
        "type": "address"
    }
    ],
    "outputs": [
    ]
},
 {
    "name": "subscribers(address)",
    "type": "function",
    "inputs": [
    {
        "name": "addr",
        "type": "address"
    }
    ],
    "outputs": [
    {
        "name": "timelimit",
        "type": "uint256"
    }
    ]
},
 {
    "name": "numSubscribed",
    "type": "function",
    "constant": true,
    "inputs": [
    ],
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ]
},
 {
    "name": "kill",
    "type": "function",
    "constant": true,
    "inputs": [
    ],
    "outputs": [
    ]
},
 {
    "name": "balance",
    "type": "function",
    "constant": true,
    "inputs": [
    ],
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ]
},
 {
    "name": "price",
    "type": "function",
    "constant": true,
    "inputs": [
    ],
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ]
},
 {
    "name": "duration",
    "type": "function",
    "constant": true,
    "inputs": [
    ],
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ]
}];

/**
Comment: Inteface and Hashes

contract PriceFeed{function payout(address addr){}function duration()constant returns(uint256 ){}function subscribe(address addr){}function kill(){}function subscribers(address )constant returns(uint256 ){}function set(uint256 newInfo){}function get()constant returns(uint256 r){}function setPrice(uint256 p){}function numSubscribed()constant returns(uint256 ){}function price()constant returns(uint256 ){}function balance()constant returns(uint256 ){}function setDuration(uint256 d){}}
0b7e9c44… :payout
0fb5a6b4… :duration
41a7726a… :subscribe
41c0e1b5… :kill
5745ae28… :subscribers
60fe47b1… :set
6d4ce63c… :get
91b7f5ed… :setPrice
9528fcb5… :numSubscribed
a035b1fe… :price
b69ef8a8… :balance
f6be71d1… :setDuration
*/

// Setup Feed
Feed.setup();
