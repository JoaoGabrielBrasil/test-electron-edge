'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

  var edge = require('electron-edge')

  var teste = edge.func(function() {/*
        	  using System;
        	  using System.Runtime.InteropServices;
            using System.Threading.Tasks;

            public class Startup
            {
        		[DllImport("BemaFi32.dll")]
                public static extern int Bematech_FI_LeituraX();

                public async Task<object> Invoke(int input)
                {
                    int x = Startup.Bematech_FI_LeituraX();
                    return x;
                }
            }
        */});

  console.log(teste(null, true));
  //console.log('Success: platform check for edge.js: node.js ' + process.arch + ' v' + process.versions.node);

}]);
