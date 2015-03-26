/**
Template Controllers

@module Routes
*/

/**
The app routes

@class App routes
@constructor
*/

// Change the URLS to use #! instead of real paths
// Iron.Location.configure({useHashPaths: true});

// Router defaults
Router.configure({
    layoutTemplate: 'layout_main',
    notFoundTemplate: 'layout_notFound',
    yieldRegions: {
        'layout_header': {to: 'header'}
        , 'layout_footer': {to: 'footer'}
    }
});

// ROUTES

/**
The receive route, showing the dapp overview

@route home
**/

Router.route('/', {
    template: 'views_home',
    name: 'home'
});

/**
The admin page route.

@route admin
**/

Router.route('/admin', {
    template: 'views_admin',
    name: 'admin'
});

/**
The tracker page route, where subscriptions can be tracked.

@route track
**/

Router.route('/track/:_address', {
    template: 'views_track',
    name: 'track',
	data: function (){
		_address  = this.params._address;
        enddate_unix = Feed.subscription(_address);
        enddate = 'No end date';
        status = 'inactive';
        if(_.isUndefined(enddate_unix) || enddate_unix == 0){
            enddate_unix = false;
        }else{
            enddate = moment.unix(enddate_unix).format('LLLL');
            if(enddate_unix > moment().unix()){
                status = 'active';
            }
        }
		templateData = {
			_address: _address,
            enddate: enddate,
            enddate_unix: enddate_unix,
            status: status            
		};
		return templateData;
	},
});