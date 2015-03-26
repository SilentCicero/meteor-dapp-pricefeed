/**
Template Controller

@module Templates
*/

/**
The template for the dashboard nav bar.

@class [template] components_dashbar
@constructor
*/

Template['components_dashbar'].created = function(){
};

Template['components_dashbar'].helpers({
    /**
    The price feed object.

    @var (feed)
    **/
    
    'feed': Feed,
});

Template['components_dashbar'].events({
});