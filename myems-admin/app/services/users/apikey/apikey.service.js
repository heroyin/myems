'use strict';
app.factory('ApiKeyService', function($http) {
    return {
        getAllApiKeys:function(callback){
            $http.get(getAPI()+'apikeys')
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        addApiKey: function(apikey, headers, callback) {
		    delete apikey.created_datetime_utc;
            $http.post(getAPI()+'apikeys', {data:apikey}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        editApiKey: function(apikey, headers, callback) {
		    delete apikey.created_datetime_utc;
            $http.put(getAPI()+'apikeys/'+apikey.id, {data:apikey}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        deleteApiKey: function(apikey, headers, callback) {
            $http.delete(getAPI()+'apikeys/'+apikey.id, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        getApiKey: function(id, callback) {
            $http.get(getAPI()+'apikeys/'+id)
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        }
    };
});
