angular.module("apiEstagiarios").config(function ($routeProvider){
    $routeProvider.when("/estagiarios", {
        templateUrl: "view/estagiarios.html",
        controller: "listaEstagiarioCtrl",
        resolve: {
            estagiarios: function (estagiariosAPI){
                return estagiariosAPI.getEstagiarios();
            }
        }
    });

    $routeProvider.when("/novoEstagiario", {
        templateUrl: "view/novoEstagiario.html",
        controller: "novoEstagiarioCtrl",
        resolve: {
            estagiarios: function (estagiariosAPI){
                return estagiariosAPI.getEstagiarios();
            }
        }
    });

    $routeProvider.when("/alterarEstagiario/:id",{
        templateUrl: "view/alterarEstagiario.html",
        controller: "alterarEstagiarioCtrl",
        resolve: {
            estagiario: function (estagiariosAPI, $route){
                return estagiariosAPI.getEstagiario($route.current.params.id);
            }
        }

    });

    $routeProvider.when("/deletarEstagiario/:id",{
        templateUrl: "view/deletarEstagiario.html",
        controller: "deletarEstagiarioCtrl",
        resolve: {
            estagiario: function (estagiariosAPI, $route){
                return estagiariosAPI.getEstagiario($route.current.params.id);
            }
        }

    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    }); 
       
    
    $routeProvider.otherwise({redirectTo: "/estagiarios"});

});