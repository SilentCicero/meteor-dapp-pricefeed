/**
Template Controller

@module Templates
*/

/**
The template to allow easy PriceFeed contract deployment.

@class [template] components_deployment
@constructor
*/

Template['components_deployment'].created = function(){
    Session.setDefault('deployed', false);
};

Template['components_deployment'].events({
    /**
    Deploy the price feed, used for setup of contract.

    @event (click #deploy)
    **/

    'click #deploy': function(){
        var addr = Feed.deploy();
        Session.set('address', addr);
        Session.set('deployed', true);
    },
});