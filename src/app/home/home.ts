
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import 'angular-route';
import {html} from './home.html';
declare var $: any;
let routeProviderConfig:any = function($routeProvider){
    $routeProvider.when('/home', {
        template: html,
        controller: 'HomeCtrl'
    })
  };
  routeProviderConfig.$inject = ['$routeProvider'];
const template = html

const homeComponent = {
    template: template,
    bindings: {
        customer: '<'
    },
    controller: homeComponentController
};



var homeComponentController:any = function($scope, $window, $rootScope) {
  $('#maincarousel').show();
  console.log('hi');

};
homeComponentController.$inject = ['$scope', '$window', '$rootScope'];

export const homeModule = angular.module('myApp.home', ['ngRoute'])
.config(routeProviderConfig)
.controller('HomeCtrl', ['$scope','$http', function($scope,$http) {
    $('#maincarousel').show();
  }]);
//.component('home',homeComponent);
@NgModule({})
export class homeNgModule {}


