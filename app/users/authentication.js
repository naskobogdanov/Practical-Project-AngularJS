angular.module('issueTracker.users.authentication', [])
    .factory('authentication', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL) {
            console.log(BASE_URL);
            function registerUser (user) {
                console.log(user);
                var deferred = $q.defer;

                $http.post(BASE_URL + 'api/Account/Register', user)
                    .then(function(response) {
                        console.log(response);
                        //deferred.resolve(response);
                    }, function(error) {

                });

                return deferred.promise;
            }

            function loginUser (user) {
                var deferred = $q.defer;

                $http.post(BASE_URL + 'api/Token', user)
                    .then(function() {

                    }, function() {

                    });

                return deferred.promise;
            }

            function logoutUser () {

            }

            return {
                registerUser : registerUser,
                loginUser : loginUser,
                logoutUser : logoutUser
            }
    }]);