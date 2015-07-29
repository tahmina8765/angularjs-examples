(function () {
    var app = angular.module('feedbackApp');
    app.controller('feedbackListController', ['$scope', function ($scope) {
            $scope.name = 'Feedback List';
            $scope.formdata = {
                'name': '',
                'email': '',
                'message': ''
            };

            $scope.data = [
                {
                    'name': 'Tahmina',
                    'email': 'khatoon.tahmina@genweb2.com',
                    'message': 'Test Message'
                }
            ];

            $scope.submit = function (form) {
                var newdata = {
                    'name': form.name,
                    'email': form.email,
                    'message': form.message
                };

                $scope.data.push(newdata)
            }
            ;
        }]);



})();