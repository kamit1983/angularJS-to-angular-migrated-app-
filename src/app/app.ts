
import * as angular from 'angular';
import 'angular-route';
import 'bootstrap';
import {html} from './main.html';
import { admissionModule } from './admissions/admissions';
import { careerModule} from './career/career';
import { homeModule} from './home/home';

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

export const Ng1AppModule = angular.module('Ng1AppModule', ['ngRoute',
admissionModule.name,careerModule.name,homeModule.name])
.config(routeProviderConfig)
.component('main',mainComponent);

