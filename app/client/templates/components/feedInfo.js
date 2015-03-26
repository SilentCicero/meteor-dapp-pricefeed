/**
Template Controller

@module Templates
*/

/**
The template to display feed information.

@class [template] components_feedInfo
@constructor
*/

Template['components_feedInfo'].created = function(){
};

Template['components_feedInfo'].helpers({
    /**
    The price feed object.

    @var (feed)
    **/
    
    'feed': Feed,
    
    /**
    The price feed duration.

    @var (duration)
    **/
    
    'duration': function(){ 
        return Feed.durationDisplay();
    },
    
    /**
    The price feed number of subscribers.

    @var (subscribers)
    **/
    
    'subscribers': function(){ 
        return Feed.numSubscribed();
    },
});

Template['components_feedInfo'].events({
});