/**
Template Controller

@module Templates
*/

/**
The template that enables the subscription settings to be altered.

@class [template] components_subscriptionSettings
@constructor
*/

Template['components_subscriptionSettings'].created = function(){
};

Template['components_subscriptionSettings'].helpers({
});

Template['components_subscriptionSettings'].events({
    /**
    Update subscription settings

    @event (click #update_subscription)
    */

    'click #update_subscription': function(){
        if($('#subscription_price').val() != Session.get('price')){
            console.log($('#subscription_price').val());
            Feed.setPrice($('#subscription_price').val());  
            Session.set('price', price);
        }
        
        if($('#subscription_period').val() != Session.get('duration')){
            Feed.setDuration($('#subscription_duration').val());
            Session.set('duration', period);  
        }
        
        console.log('Update Subscription', $('#subscription_price').val(), $('#subscription_period').val());
    },
});