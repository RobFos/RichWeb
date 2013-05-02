Message = new Meteor.Collection('messages');

if (Meteor.isClient) {


Accounts.ui.config(
{
	passwordSignupFields:'USERNAME_ONLY'
});

Template.login.events = {
	'click #button':function(){
		var user=document.getElementById('username');
		var text=document.getElementById('messagebox');
		if(user.value!=""){
			var ts=Date.now()/1000;
			Message.insert({ name:user.value,message:text.value,time:ts});
			console.log("You sent a message");
		}
	}
};


Template.messages.messages = function(){
	return Message.find({},{sort: {time:-1} } );
	};
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
