/**
Template Controller

@module Templates
*/

/**
The template to allow the admin to check a subscription.

@class [template] components_checkSubscription
@constructor
*/

Template['components_checkSubscription'].events({
    /**
    Check Subscription

    @event (click #check_subscription)
    **/
    
    'click #check_subscription': function(){
        var timeout = Feed.subscription($('#subscription_address').val());        
        if(parseInt(timeout) > 0){
            Session.set('checkSubscriptionAddress', $('#subscription_address').val());
            Session.set('checkSubscription', moment.unix(timeout).format('LLLL'));
        }
    },
});