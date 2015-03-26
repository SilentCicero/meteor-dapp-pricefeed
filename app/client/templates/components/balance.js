/**
Template Controller

@module Templates
*/

/**
The template to allow the admin to check and payout the feed account balanace (i.e. the ether earned from feed operations).

@class [template] components_balance
@constructor
*/

Template['components_balance'].events({
    /**
    Switch Balance View to Payout and Visa-Versa

    @event (click #kill)
    **/
    
    'click #switchBalanceView': function(){
        if(Session.get('balanceView')){
            Session.set('balanceView', false);
            $('#switchBalanceView').html('balance');
        }else{
            Session.set('balanceView', true);
            $('#switchBalanceView').html('payout');
        }
    },
                               
    /**
    Payout Balance to Contract Address

    @event (click #payout)
    **/

    'click #payout': function(){
        Feed.payout($('#payout_address').val());
        Session.set('balance', 0);
    },
});