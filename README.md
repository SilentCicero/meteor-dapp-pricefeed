# meteor-dapp-pricefeed
MeteorJS price feed DApp - a starting point for owning and operating a price feed on Ethereum.

** Note this DApp is in alpha, and is still under heavy development.

## <a name="installation"></a> Installation

1. Clone this repo

  `git clone https://github.com/SilentCicero/meteor-dapp-pricefeed.git`

2. Remove `.git`

  `cd meteor-dapp-pricefeed/app && rm -rf .git`

## <a name="deployment"></a> Deployment

Start an eth node open the http://localhost:3000 in *mist*, *mix* or *alethzero* or run a CPP node as follows:

    $ eth -j -b // for a mining node: $ eth -j -b -f -n no -m yes

Start your app using meteor

    $ cd meteor-dapp-pricefeed/app
    $ meteor

Go to http://localhost:3000/admin

    Click 'Deploy PriceFeed Contract' and copy the new address to clipboard

Edit client/lib/feedConfig.js

    Change Feed.address to your new address

Wait for mining, refresh, then start using the DApp!

## <a name="server"></a> Server Deployment

Edit server.py

    change vars CONTRACT_ADDRESS, OWNER_ADDRESS, and JSON_RPC_URL to the appropriate values

Running the server

    $ cd meteor-dapp-pricefeed/app
    $ python server.py

## <a name="functionality"></a> DApp Functionality
- landing page
- admin page (a dashboard for contract owner)
- tracking page (to track subscriptions)
- subscribable
- renewable subscriptions
- owner can manage feed price, subscribers, subscription duration and payout balance
- a basic server.py for updating the feed info

## <a name="about"></a> About

This DApp was built as a starting point for operating price feeds on Ethereum.

## <a name="todo"></a> TODO
- Decimal numbers for feed into
- Multi-type feed data (e.g. "gold", "silver" etc.)
- Contact form (make active)
