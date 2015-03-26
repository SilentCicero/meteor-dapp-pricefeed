/**
Template Controller

@module Templates
*/

/**
The template to allow users to contact the admin.

@class [template] components_contact
@constructor
*/

Template['components_contact'].events({    
    /**
    The send message event.

    @event (click #sendMessage)
    **/
    
    'click #sendMessage': function(){
        //var identity = web3.shh.newIdentity();
        var msg = 'P: ' + String($('#phone').val()) + ' N:' + String($('#name').val()) + 'M: ' + String($('#message').val());
        Contact.message($('#identity').val(), 'Contact Form Messages', msg);
    },
});