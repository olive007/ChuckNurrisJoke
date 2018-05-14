cnApp.component('categoryList', {
	templateUrl: 'tmpl/categoryList.html',
	controller: ['$http', 'api', 'data', function CategoryListController($http, api, data) {

		this.data = data;

		if (data.categoryList == null) {
			api.loadCategoryList();
		}

		this.changeJoke = function(category) {
			api.loadJoke(category)
		}
	}]
});
