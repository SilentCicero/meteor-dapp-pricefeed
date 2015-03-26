/**
Template Controllers

@module Templates
*/

/**
The admin template

@class [template] views_admin
@constructor
*/

Template['views_admin'].rendered = function() {
    // Navbar Hack
    $('.navbar-default').addClass( "navbar-shrink-force" );
    
    // Setup Session Variables
    Session.set('price', Feed.priceDisplay());
    Session.set('duration', Feed.durationDisplay());
    Session.set('balance', Feed.balanceDisplay());
    Session.set('subscribers', Feed.subscribersDisplay());
    Session.set('info', Feed.infoDisplay());
    Session.set('checkSubscription', '');
    console.log('Your Accounts: ', web3.eth.accounts);
}

Template['views_admin'].created = function() {
    // Navbar hack
    $('.navbar-default').addClass( "navbar-shrink-force" );
    
    // Reset Balance View
    Session.set('balanceView', true);
    
    // Set Admin Meta Title
    Meta.setSuffix(TAPi18n.__("dapp.admin.title"));
}

Template['views_admin'].helpers({
    /**
    Get the name

    @method (name)
    **/

    'name': function(){
        return this.name || TAPi18n.__('dapp.view1.defaultName');
    }
});