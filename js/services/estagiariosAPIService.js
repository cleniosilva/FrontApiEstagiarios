angular.module("apiEstagiarios").factory("estagiariosAPI", function ($http, config){
    var _getEstagiarios = function (){
        return $http.get(config.baseUrl + "/estagiario");

    };

    var _getEstagiario = function(id){
        return $http.get(config.baseUrl + "/estagiario/" + id);

    };

    var _saveEstagiario = function (estagiario) {
        return $http.post(config.baseUrl + "/estagiario", estagiario);
        
    };

    var _updateEstagiario = function (estagiario){
        return $http.put(config.baseUrl + "/estagiario", estagiario);
    };

    var _deleteEstagiario = function (id){
        return $http.delete(config.baseUrl + "/estagiario/" + id);
    }

    return {
        getEstagiarios: _getEstagiarios,
        getEstagiario: _getEstagiario,
        saveEstagiario: _saveEstagiario,
        updateEstagiario: _updateEstagiario,
        deleteEstagiario: _deleteEstagiario
    };
});