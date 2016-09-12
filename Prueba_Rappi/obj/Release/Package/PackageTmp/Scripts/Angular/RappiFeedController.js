app.controller('newsCrtl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $scope.getNews = function () {
        $(".loading").show();
        $scope.news = [];
        if ($scope.source == null || $scope.source == '') {
            $http.post(getNewsUrl).success(function (data) {
                $(data).each(function () {
                    $scope.news.push(this);
                });
                setAccordion();
                $(".loading").hide();
            });
        }
        else {
            $http.post($scope.source).success(function (data) {
                $(data).each(function () {
                    $scope.news.push(this);
                });
                setAccordion();
                $(".loading").hide();
            });
            //http://www.json-generator.com/api/json/get/cftNNXGfEy?indent=2
        }
    };
    $scope.selected = function (n) {
        $scope.selected_new = n;
    };
}]);

function setAccordion() {
    $('#accordion').unbind('shown.bs.collapse');
    $('#accordion').unbind('hidden.bs.collapse');
    $('#accordion').on('shown.bs.collapse', function () {
        $('.head-title').show();
    });
    $('#accordion').on('hidden.bs.collapse', function () {
        $('.head-title').hide();
    });
}