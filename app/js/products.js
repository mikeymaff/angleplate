(function(){
	var app = angular.module('store-directives', []);

	app.directive('productDescription', function(){
  		return {
  			restrict:'E',
  			templateUrl:'product-description.html'
  		};
  	});

  	app.directive('productSpecs', function(){
  		return {
  			restrict: 'A',
  			templateUrl: 'product-specs.html'
  		};
  	});

  	app.directive('productTabs', function(){
  		return {
  			restrict:'E',
  			templateUrl:'product-tabs.html',
  			controller: function(){
  				this.tab = 1;

		  		this.setTab = function(value) {
		  			this.tab = value;
		  		};

		  		this.isSet = function(value) {
		  			return (this.tab == value);
		  		};
  			},
  			controllerAs:'tab'
  		};
  	});

  	app.directive('productGallery', function(){
  		return {
  			restrict: 'E',
  			templateUrl:'product-gallery.html',
  			controller:function(){
  				this.current = 0;

		  		this.setCurrent = function(value){
		  			this.current = value || 0;
		  		};
  			},
  			controllerAs:'gallery'
  		}
  	});
}())