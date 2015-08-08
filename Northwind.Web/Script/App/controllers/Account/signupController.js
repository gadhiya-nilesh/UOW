'use strict';
angular.module('sbAdminApp').controller('signupController', ['$scope', '$location', 'authService', 'ngAuthSettings', function ($scope, $location, authService, ngAuthSettings) {

    $scope.signupData = {
        Email: "",
        UserName: "",
        PhoneNumber: "",
        Password: "",
        UserProfileInfoDTO : {
            FirstName: "",
            LastName: "",
            Company: ""
        }
    };

    $scope.message = "";

    $scope.signUp = function () {
        debugger;
        $scope.signupData.UserName = $scope.signupData.Email;
        authService.saveRegistration($scope.signupData).then(function (response) {
            $scope.savedSuccessfully = true;
            $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
            startTimer();

        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.message = "Failed to register user due to:" + errors.join(' ');
             $scope.alerts = [
                {
                    type: 'danger',
                    msg: $scope.message
                }
             ];
         });
    };

    $scope.login = function () {
        $location.path('/login');
    };

    $scope.closeAlert = function (index) {
        return $scope.alerts.splice(index, 1);
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    }
}]);
