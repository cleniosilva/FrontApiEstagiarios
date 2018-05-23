angular.module("apiEstagiarios").controller("novoEstagiarioCtrl", function ($scope, estagiariosAPI, $location){

    $scope.title = "Cadastrar novo estagiário";
    $scope.adicionarEstagiario = function (estagiario){
        estagiariosAPI.saveEstagiario(estagiario).then(function (data) {
            delete $scope.estagiario;
            $scope.estagiarioForm.$setPristine();
            $location.path("/estagiarios");
        });

    };

});