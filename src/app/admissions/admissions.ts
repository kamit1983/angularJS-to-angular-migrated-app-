'use strict';
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import 'angular-route';
import { html} from './admissions.html';

declare var $: any;


let routeProviderConfig:any = function($routeProvider){
    $routeProvider.when('/admissions', {
        template: '<admission></admission>'
    })
  };
  routeProviderConfig.$inject = ['$routeProvider'];
const template = html;

const admissionComponent = {
    template: template,
    bindings: {
        customer: '<'
    },
    controller: admissionsComponentController
};



var admissionsComponentController:any = function($scope, $window, $rootScope) {
  $('#maincarousel').hide();

};
admissionsComponentController.$inject = ['$scope', '$window', '$rootScope'];
export const admissionModule = angular.module('myApp.admissions', ['ngRoute'])
.config(routeProviderConfig)
.component('admission',admissionComponent);

@NgModule({})
export class admissionNgModule {}
