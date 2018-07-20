
import * as angular from 'angular';
import 'angular-route';
import 'bootstrap';
import {html} from './main.html';

declare var $: any;

var routeProviderConfig:any = function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({
    redirectTo: '<home></home>'
  });
  };
  routeProviderConfig.$inject = ['$routeProvider','$locationProvider'];
const template = html;

const mainComponent = {
    template: template,
    bindings: {
        customer: '<'
    },
    controller: mainComponentController
};


var mainComponentController:any = function($scope, $window, $rootScope) {
  $('#maincarousel').hide();

};

mainComponentController.$inject = ['$scope', '$window', '$rootScope'];

export const Ng1AppModule = angular.module('myApp', ['ngRoute','ui.bootstrap'])
.config(routeProviderConfig)
.component('main',mainComponent);

