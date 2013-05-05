Message = new Meteor.Collection('messages');

if (Meteor.isClient) {

Accounts.ui.config(
{
	passwordSignupFields:'USERNAME_ONLY'
});

Template.login.events = {
	'click #button':function(){
		var user=Meteor.user().username;
		var text=document.getElementById('messagebox');
		if(user.value!=""){
			var ts=Date.now()/1000;
			Message.insert({ name:user,message:text.value,time:ts});
			console.log("You sent a message");
			$('#messagebox').val('');
			var div=$("#chat");
				div.animate({scrollTop:
					div.prop("scrollHeight")});
		}
	}
};

//get all users
Template.users.allusers=function(){
	return Meteor.users.find({});
};

//check if user logged in
Template.login.checkLog=function(){
	if(Meteor.user()!=null){
		return true;
	}else{
		return false
	}
};

Template.messages.check=function(){
	var div=$("#chat");
				div.animate({scrollTop:
					div.prop("scrollHeight")});
};

//get all the messages
Template.messages.messages = function(){
	var div=$("#chat");
				div.animate({scrollTop:
					div.prop("scrollHeight")});
	return Message.find({},{sort: {time:1}} );
	};
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	
  });
}
