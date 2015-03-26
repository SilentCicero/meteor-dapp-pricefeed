/**
Template Controller

@module Templates
*/

/**
The template for the kill feed dashboard component.

@class [template] components_killFeed
@constructor
*/

Template['components_killFeed'].events({
    /**
    Kill the price feed contract.

    @event (click #kill)
    **/

    'click #kill': function(){
        Feed.kill();
    },
});