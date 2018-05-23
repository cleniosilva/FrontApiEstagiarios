angular.module("apiEstagiarios").controller("deletarEstagiarioCtrl", function ($scope, estagiariosAPI, estagiario, $location){

    $scope.title = "Deseja remover este estagiário da lista?";
    $scope.estagiario = estagiario.data;   
    
    $scope.deletarEstagiario = function (estagiario){
        estagiariosAPI.deleteEstagiario(estagiario).then(function (data){
         
            delete $scope.estagiario;
            $scope.estagiarioForm.$setPristine();
            $location.path("/estagiarios");

        });
    };

    
});