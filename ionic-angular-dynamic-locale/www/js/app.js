// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'tmh.dynamicLocale'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, tmhDynamicLocaleProvider) {
  tmhDynamicLocaleProvider.localeLocationPattern('https://code.angularjs.org/1.3.18/i18n/angular-locale_{{locale}}.js');
})

.controller('indexCtrl', function($rootScope, $scope, tmhDynamicLocale, $locale) {

  $scope.amount = "10";
  $scope.currencies = {
    'fr-fr': 'French',
    'en-us': 'US' };
  $rootScope.model = {currencySelected: 'en-us'};
  $rootScope.$locale = $locale;
  $rootScope.changeLocale = tmhDynamicLocale.set;


})
