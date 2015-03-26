/**
Template Controllers

@module Templates
*/

/**
The track template, used for tracking subscribers.

@class [template] views_track
@constructor
*/

Template['views_track'].rendered = function() {
    // Navbar Hack
    $('.navbar-default').addClass( "navbar-shrink-force" );
}

Template['views_track'].events = {
    /**
    Renew the current address.

    @event (click #kill)
    **/
    
    'click #renew': function(){
        if(enddate_unix != false){
            Feed.subscribe(_address);
            Session.set('renewed', true);
        }
    },
};

Template['views_track'].created = function() {
	  Meta.setSuffix(TAPi18n.__("dapp.track.title"));
}