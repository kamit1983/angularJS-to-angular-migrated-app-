
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import 'angular-route';
import {html } from './career.html';
declare var $: any;
var routeProviderConfig:any = function($routeProvider){
    $routeProvider.when('/career', {
        template:html,
        controller: 'CareerCtrl'
    })
  };

  routeProviderConfig.$inject = ['$routeProvider'];
const template = html;

const careerComponent = {
    template: template,
    bindings: {
        customer: '<'
    },
    controller: careerComponentController
};



var careerComponentController:any = function($scope, $window, $rootScope) {
  $('#maincarousel').hide();

};
careerComponentController.$inject = ['$scope', '$window', '$rootScope'];

export const careerModule = angular.module('myApp.career', ['ngRoute'])
.config(routeProviderConfig)
//.component('career',careerComponent);
.controller('CareerCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $('#maincarousel').hide();
  }]);


@NgModule({})
export class careerNgModule {}


