'use strict';

/**
 * @ngdoc function
 * @name elsaArdilaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elsaArdilaApp
 */
angular.module('elsaArdilaApp')
  .controller('DashboardCtrl', function ($scope) {

  	$scope.carouselInterval = 5000;

    $scope.lastNews = [
        {title: 'Integer fermentum massa lacinia.', image: '/images/news1.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis velit suscipit condimentum ultrices."},
        {tille: 'Aliquam ac nulla dapibus, ultricies neque.', image: '/images/news2.jpg', description: "Sed efficitur id justo non egestas. Fusce lacinia sem lacus, non condimentum augue commodo convallis."},
        {title: 'Nullam hendrerit odio dictum.', image: '/images/news1.jpg', description: "Praesent luctus diam vitae turpis pulvinar, quis rutrum justo tempus. Nullam vel tellus convallis, lobortis tellus ut, imperdiet urna."}
    ];

    $scope.lastProducts = [
      {name: 'producto1', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto2', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto3', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto4', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto5', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'}
    ];
  });
