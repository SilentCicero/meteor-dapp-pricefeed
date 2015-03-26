/**
The Contact helper functions, this will be used to help establish a contact form with the admins of the dapp.

@class Contact
@constructor
*/

/**
The PriceFeed functions and variables.

@class PriceFeed
@constructor
*/

Contact = {};

/**
Create a new contact identity.

@method (newIdentity)
**/

Contact.newIdentity = function(){
    var identity = web3.shh.newIdentity();
    console.log('New Identity', identity);
    return identity;
};

/**
Send the admins a message.

@method (message)
**/

Contact.message = function(from, topic, payload){
    //var identity = web3.shh.newIdentity();
    //var topic = 'example';
    //var payload = 'hello whisper world!';

    var message = {
      to: Contact.identity,
      from: from,
      topics: [topic],
      payload: payload,
      ttl: Contact.ttl,
      workToProve: Contact.workToProve // or priority TODO
    };
    
    console.log('Sending message:', message);

    web3.shh.post(message);
};