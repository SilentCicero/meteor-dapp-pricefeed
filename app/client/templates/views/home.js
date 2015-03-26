/**
Template Controllers

@module Templates
*/

/**
The home template

@class [template] views_home
@constructor
*/

Template['views_home'].rendered = function() {
    // Navbar Hack
    $('.navbar-default').removeClass( "navbar-shrink-force" );
};

Template['views_home'].created = function() {
    Meta.setSuffix(TAPi18n.__("dapp.landing.title"));
};

Template['views_home'].helpers({
    /**
    The price feed object.

    @var (feed)
    */
    
    'feed': Feed,
    
    /**
    The price of the subscription.

    @var (price)
    */
    
    'price': function(){ return Feed.priceDisplay(); },
    
    /**
    The duration of the subscription.

    @var (duration)
    */
    
    'duration': function(){ return Feed.durationDisplay(); },
});

Template['views_home'].events = {
};