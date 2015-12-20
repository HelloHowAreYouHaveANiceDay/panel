if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click .update-forecast': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1)
	Meteor.call('getForecast');
    },
	'click .selection' : function(d){
		console.log(d.target.value);
		Session.set("getF", d.target.value);
	}
  });
}


