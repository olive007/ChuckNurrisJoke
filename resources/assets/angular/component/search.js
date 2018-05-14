cnApp.component('search', {
	templateUrl: 'tmpl/search.html',
	controller: ['api', 'data', function SearchController(api, data) {
		var self = this;

		this.query = "";
		self.enable = true;

		self.renable = function() {
			self.enable = true;
		}

		this.search = function() {
			self.enable = false;
			api.searchJoke(self.query, self.renable);
		}
	}]
});
