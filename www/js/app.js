// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home',{
        url: "/", //la url con la cual vas a llamar al estado, es apoteosico de ubicacion/ define el root ---> obligatorio
        templateUrl: 'template/contenido.html' ,//la url del archivo html que se va a cargar en el ion-nav-view, a guevo el ajax cabron
        //template: "Jelow Pinchi Joto" ,//texto que se carga dentro del ion-nav-view mero merito 
        controller: "nombrecontrolador" ,//controlador (funcion javascript) que se ejecuta al cargar el contenido
    });
    $urlRouterProvider.otherwise('/');//aca solo pide una url: try catch con esta pinga 
})
