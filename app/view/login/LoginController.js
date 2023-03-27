Ext.define('LoginTestApp.view.login.LoginController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.login',

	routes: {
		'main': 'onMain'
	},

	onLoginClick: function() {
		var user = {}
		user.name = this.lookupReference('username').lastValue;
		user.password = this.lookupReference('password').lastValue;

		var checkUser = function(user) {
			var storeUsers = Ext.getStore('credentials');
			var userIsFound = false;
			storeUsers.each(function(record) {
				if (record.data.name === user.name && record.data.password === user.password) {
					userIsFound = true;
					return false;
				}
			});
			return userIsFound;
		};

		if (checkUser(user)) {
			localStorage.setItem("checkedUser", true);
			this.redirectTo('main');
		} else {
			Ext.Msg.alert('Error', 'Wrong user!');
		}
	},

	onMain: function() {
		this.getView().destroy();
		Ext.create('LoginTestApp.view.main.Main');
	}
});