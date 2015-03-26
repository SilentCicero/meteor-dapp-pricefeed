/**
Template Controller

@module Templates
*/

/**
The template that contains the subscription form.

@class [template] components_subscribe
@constructor
*/

Template['components_subscribe'].helpers({
    /**
    The price feed object.

    @var (feed)
    **/
    
    'feed': Feed,
});

Template['components_subscribe'].events({
    /**
    Update subscription settings

    @event (click #update_subscription)
    **/

    'click #subscribe': function(){
        var addr = $('#address').val();
        Feed.subscribe(addr);
        Session.set('subscribed', true);
        Session.set('subscriberAddress', addr);
        console.log('Subscribe to Price Feed: ', addr);
    },
});