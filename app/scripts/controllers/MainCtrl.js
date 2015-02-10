'use strict';

/**
 * @ngdoc function
 * @name elsaArdilaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elsaArdilaApp
 */
angular.module('elsaArdilaApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.carouselInterval = 5000;
    $scope.lastProducts = [
      {name: 'producto1', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto2', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto3', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto4', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'},
      {name: 'producto5', famille: 'tarjeteria', categoria: 'de-para', price: '500', image: '/images/yeoman.png'}
    ];
  });
