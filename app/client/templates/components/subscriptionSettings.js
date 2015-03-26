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
        var price = $('#subscription_price').val();
        var duration = $('#subscription_duration').val();
        if($('#subscription_price').val() != Session.get('price')){
            Feed.setPrice(price);  
            Session.set('price', price);
        }
        
        if($('#subscription_period').val() != Session.get('duration')){
            Feed.setDuration($('#subscription_duration').val());
            Session.set('duration', duration);
        }
        
        console.log('Update Subscription', price, duration);
    },
});
